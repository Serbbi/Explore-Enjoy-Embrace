import styles from '../city.module.css';

export default function MuseumContainer({ museums }) {
    const actualMuseums = museums.filter((museum) => museum['address'] !== undefined);

    return (
        <div className={styles.listWrapper}>
            {actualMuseums.length > 0 &&
                <ul>
                    {actualMuseums.map((museum) => (
                        <li key={museum['name']}>
                            <h3>{museum['name']}</h3>
                            <p>{museum['address']}</p>
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}