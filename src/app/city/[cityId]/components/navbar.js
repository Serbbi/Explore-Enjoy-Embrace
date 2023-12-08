import styles from "@/app/city/[cityId]/city.module.css";

export default function Navbar({ toggleSection, activeButton }) {
    return (
        <nav className={styles.navbar}>
            <button
                onClick={() => toggleSection('weather')}
                className={`${styles.navButton} ${activeButton === 'weather' ? styles.activeButton : ''}`}
            >Weather</button>
            <button
                onClick={() => toggleSection('hotel')}
                className={`${styles.navButton} ${activeButton === 'hotel' ? styles.activeButton : ''}`}
            >Hotels</button>
            <button
                onClick={() => toggleSection('restaurant')}
                className={`${styles.navButton} ${activeButton === 'restaurant' ? styles.activeButton : ''}`}
            >Restaurant</button>
            <button
                onClick={() => toggleSection('cafe')}
                className={`${styles.navButton} ${activeButton === 'cafe' ? styles.activeButton : ''}`}
            >Cafes</button>
            <button
                onClick={() => toggleSection('museum')}
                className={`${styles.navButton} ${activeButton === 'museum' ? styles.activeButton : ''}`}
            >Museums</button>
            <button
                onClick={() => toggleSection('park')}
                className={`${styles.navButton} ${activeButton === 'park' ? styles.activeButton : ''}`}
            >Parks</button>
        </nav>
    )
}