"use client";
import {useEffect, useState} from "react";
import Card from "@/app/components/card";
import styles from "./search.module.css";
import layoutStyle from "@/app/layout.module.css";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import defaultCities from './defaultCities.json'
import {faMagicWandSparkles} from "@fortawesome/free-solid-svg-icons/faMagicWandSparkles";

export default function Search() {
    const [cities, setCities] = useState(defaultCities);
    const [favoriteCities, setFavoriteCities] = useState([]);
    const [colorfulMode, setColorfulMode] = useState(false);

    useEffect(() => {
        async function getCities() {
            try {
                const response = await fetch('http://localhost:3000/api/city');
                const data = await response.json();
                setFavoriteCities(data);
            } catch (err) {
                console.log(err);
            }
        }
        getCities().then(r => {});
    }, []);

    async function searchCities(FormData) {
        try {
            const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${FormData.get('city')}`);
            const data = await response.json();
            if(data['results'] === undefined) {
                return;
            }
            setCities(data['results']);
        } catch (err) {
            console.log(err);
        }
    }

    function deleteCity(id) {
        const newCities = cities.filter((city) => {
            return city['id'] !== id;
        });
        setCities(newCities);
    }

    function checkAlreadyFavorite(city) {
        for(let i = 0; i < favoriteCities.length; i++) {
            if(favoriteCities[i]['id_api'] === city[0]['id']) {
                return true;
            }
        }
        return false;
    }

    function favoriteCity(id) {
        const favoriteCity = cities.filter((city) => {
            return city['id'] === id;
        });
        if(checkAlreadyFavorite(favoriteCity)) {
            alert('This city is already in your favorites');
            return;
        }

        const c = {name: favoriteCity[0]['name'], country: favoriteCity[0]['country'], id_api: favoriteCity[0]['id']};
        fetch('http://localhost:3000/api/city', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(c),
        }).then().catch((error) => console.log(error));
    }

    function changeTheme() {
        setColorfulMode(!colorfulMode);
    }

    return (
        <div className={layoutStyle.mainContent}>
            <button className={styles.themeButton} onClick={changeTheme}><FontAwesomeIcon icon={faMagicWandSparkles} /></button>
            <form action={searchCities} className={styles.searchContainer}>
                <input name="city" placeholder="Where would you like to go?" className={styles.searchBar}/>
                <button className={styles.searchButton}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </form>
            <div className={styles.cardListContainer}>
                <ul className={styles.cardList}>
                    {cities.map((city) => (
                        <li key={city['id']}><Card
                                                name={city['name']}
                                                country={city['country']}
                                                id={city['id']}
                                                deleteCity={deleteCity}
                                                favoriteCity={favoriteCity}
                                                colorfulMode={colorfulMode}
                                                currentPage={'/search'}
                        /></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}