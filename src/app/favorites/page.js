"use client";
import layoutStyles from 'src/app/layout.module.css';
import styles from './favorites.module.css';
import Card from "@/app/components/card";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagicWandSparkles} from "@fortawesome/free-solid-svg-icons/faMagicWandSparkles";

export default function Favorites() {
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [colorfulMode, setColorfulMode] = useState(false);

    useEffect(() => {
        fetch('/api/city')
            .then((response) => response.json())
            .then((data) => setCities(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    function favoriteCity(id) {
        const newCities = cities.filter((city) => city['id_api'] !== id);
        setCities(newCities);
        fetch(`/api/city?id=${id}`, {method: 'DELETE'})
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }

    function changeTheme() {
        setColorfulMode(!colorfulMode);
    }

    return (
        <div className={layoutStyles.mainContent}>
            <h1>Favorites</h1>
            <button className={styles.themeButton} onClick={changeTheme}><FontAwesomeIcon icon={faMagicWandSparkles} /></button>
            <div className={styles.cardListContainer}>
                {loading && <p>Loading your favorite cities...</p>}
                <ul className={styles.cardList}>
                    {cities.map((city) => (
                        <li key={city['id_api']}><Card
                            name={city['name']}
                            country={city['country']}
                            id={city['id_api']}
                            favoriteCity={favoriteCity}
                            colorfulMode={colorfulMode}
                            currentPage={'/favorites'}
                        /></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}