import styles from './card.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faXmark} from "@fortawesome/free-solid-svg-icons";

export default function Card({ name, country, id, deleteCity }) {
    const goToCityPage = () => {
        window.location.href = `/city/${name}&${id}`;
    }

    return (
        <div className={styles.card} onClick={goToCityPage}>
            <FontAwesomeIcon icon={faHeart} className={styles.heart}/>
            <FontAwesomeIcon icon={faXmark} className={styles.xmark} onClick={() => deleteCity(name)}/>
            <h3 className={styles.cityName}>{name}</h3>
            <p className={styles.cityCountry}>{country}</p>
        </div>
    )
}