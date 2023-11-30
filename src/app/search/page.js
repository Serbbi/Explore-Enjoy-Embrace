"use client";
import {useState} from "react";
import Card from "@/app/components/card";
import styles from "./search.module.css";
import layoutStyle from "@/app/layout.module.css";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Search() {
    const [cities, setCities] = useState([]);

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

    function favoriteCity(id) {
        const favoriteCity = cities.filter((city) => {
            return city['id'] === id;
        });
        const c = {name: favoriteCity[0]['name'], country: favoriteCity[0]['country'], id_api: favoriteCity[0]['id']};
        fetch('http://localhost:3000/api/city', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(c),
        }).then().catch((error) => console.log(error));
    }

    return (
        <div className={layoutStyle.mainContent}>
            <form action={searchCities} className={styles.searchContainer}>
                <input name="city" placeholder="Where would you like to go?" className={styles.searchBar}/>
                <button className={styles.searchButton}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                {/*<button className={styles.searchButton}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>*/}
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
                        /></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}