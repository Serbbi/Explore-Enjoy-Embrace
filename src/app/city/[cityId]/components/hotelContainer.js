import styles from '../city.module.css';

export default function HotelContainer({ hotels }) {
    const actualHotels = hotels.filter((hotel) => hotel['address'] !== undefined);

    return (
        <div className={styles.listWrapper}>
            {actualHotels.length > 0 &&
                <ul>
                    {actualHotels.map((hotel) => (
                        <li key={hotel['name']}>
                            <h3>{hotel['name']}</h3>
                            <p>{hotel['address']}</p>
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}