import styles from '../city.module.css';

export default function RestaurantContainer({ restaurants }) {
    const actualRestaurants = restaurants.filter((restaurant) => restaurant['address'] !== undefined);

    return (
        <div className={styles.listWrapper}>
            {actualRestaurants.length > 0 &&
                <ul>
                    {actualRestaurants.map((restaurant) => (
                        <li key={restaurant['name']}>
                            <h3>{restaurant['name']}</h3>
                            <p>{restaurant['address']}</p>
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}