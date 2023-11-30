"use client";
import layoutStyles from 'src/app/layout.module.css';
import styles from './favorites.module.css';
import Card from "@/app/components/card";
import {useEffect, useState} from "react";

export default function Favorites() {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetch('/api/city')
            .then((response) => response.json())
            .then((data) => setCities(data));
    }, []);

    function favoriteCity(id) {
        const newCities = cities.filter((city) => city['id_api'] !== id);
        setCities(newCities);
    }

    return (
        <div className={layoutStyles.mainContent}>
            <h1>Favorites</h1>
            <div className={styles.cardListContainer}>
                <ul className={styles.cardList}>
                    {cities.map((city) => (
                        <li key={city['id_api']}><Card
                            name={city['name']}
                            country={city['country']}
                            id={city['id_api']}
                            favoriteCity={favoriteCity}
                        /></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}