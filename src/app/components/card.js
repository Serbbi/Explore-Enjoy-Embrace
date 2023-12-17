import styles from './card.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faXmark} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Card({ name, country, id, deleteCity, favoriteCity, colorfulMode, currentPage }) {
    const colors = ['#c8e3ff', '#ffdede', '#d4ffd4', '#ffffd5', '#e6d4ff', '#ffd4d4', '#ffd4ff'];

    const handleDeleteClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        deleteCity(id);
    };

    const handleFavoriteClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        favoriteCity(id);
    }

    const backgroundColor = colorfulMode ? colors[Math.floor(Math.random() * colors.length)] : '';
    const fontColor = colorfulMode ? 'black' : '';

    return (
        <Link className={styles.card} style={{backgroundColor: backgroundColor, color: fontColor}} href={`/city/${name}&${id}`}>
            <FontAwesomeIcon icon={faHeart}
                             className={`${currentPage === '/favorites' ? styles.heartSpecial : styles.heart}`}
                             onClick={handleFavoriteClick}/>
            <FontAwesomeIcon icon={faXmark}
                             className={`${currentPage === '/favorites' ? styles.xmarkSpecial : styles.xmark}`}
                             onClick={handleDeleteClick}/>
            <h3 className={styles.cityName}>{name}</h3>
            <p className={styles.cityCountry}>{country}</p>
        </Link>
    )
}