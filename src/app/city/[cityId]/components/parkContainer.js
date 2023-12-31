import styles from '../city.module.css';

export default function ParkContainer({ parks }) {
    const actualParks = parks.filter((park) => park['address'] !== undefined);

    return (
        <div className={styles.listWrapper}>
            {actualParks.length > 0 &&
                <ul>
                    {actualParks.map((park) => (
                        <li key={park['name']}>
                            <h3>{park['name']}</h3>
                            <p>{park['address']}</p>
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}