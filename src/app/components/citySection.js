import Card from "@/app/components/card";
import styles from "./citySection.module.css";

export default function CitySection({ nameOfSection, cities }) {
    return (
        <div>
            <h3 className={styles.sectionName}>{nameOfSection}</h3>
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
    )
}