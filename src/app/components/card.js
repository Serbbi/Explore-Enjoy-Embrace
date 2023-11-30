"use client";
import styles from './card.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faXmark} from "@fortawesome/free-solid-svg-icons";

export default function Card({ name, country, id, deleteCity, favoriteCity }) {
    const currentPage = window.location.pathname;
    const goToCityPage = () => {
        window.location.href = `/city/${name}&${id}`;
    }

    const handleDeleteClick = (event) => {
        event.stopPropagation();
        deleteCity(id);
    };

    const handleFavoriteClick = (event) => {
        event.stopPropagation();
        favoriteCity(id);
    }

    return (
        <div className={styles.card} onClick={goToCityPage}>
            <FontAwesomeIcon icon={faHeart}
                             className={`${currentPage === '/favorites' ? styles.heartSpecial : styles.heart}`}
                             onClick={handleFavoriteClick}/>
            <FontAwesomeIcon icon={faXmark}
                             className={`${currentPage === '/favorites' ? styles.xmarkSpecial : styles.xmark}`}
                             onClick={handleDeleteClick}/>
            <h3 className={styles.cityName}>{name}</h3>
            <p className={styles.cityCountry}>{country}</p>
        </div>
    )
}