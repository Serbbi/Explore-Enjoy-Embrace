"use client";
import Link from "next/link";
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

    const deleteCity = (cityName) => {
        console.log(`deleteCity: ${cityName}`);
        // const newCities = cities.filter((city) => city['name'] !== cityName);
        // setCities(newCities);
    }

    return (
        <div className={layoutStyle.mainContent}>
            <form action={searchCities} className={styles.searchContainer}>
                <input name="city" placeholder="Where would you like to go?" className={styles.searchBar}/>
                <button className={styles.searchButton}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </form>
            <div className={styles.cardListContainer}>
                <ul className={styles.cardList}>
                    <li><Card name={'Brasov'} country={'Romania'}/></li>
                    <li><Card name={'Bucuresti'} country={'Romania'}/></li>
                    <li><Card name={'Iasi'} country={'Romania'}/></li>
                    {cities.map((city) => (
                        <li key={city['id']}><Card name={city['name']} country={city['country']} id={city['id']} deleteCity={deleteCity}/></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}