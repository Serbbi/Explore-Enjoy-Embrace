import {useEffect, useState} from "react";
import styles from '../city.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons/faChevronDown";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons/faChevronUp";

export default function CityDetails({ cityName, cityId, setCoordinates }) {
    const [details, setDetails] = useState({});
    const [hideDetails, setHideDetails] = useState(true);

    useEffect( () => {
        async function searchCities() {
            const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`);
            const data = await response.json();
            if (data['results'] === undefined) {
                return;
            }
            const cityDetails = data['results'].filter((city) => city['id'].toString() === cityId);
            if (cityDetails.length === 0) {
                return;
            }
            setDetails(cityDetails[0]);
            setCoordinates({
                latitude: cityDetails[0]['latitude'],
                longitude: cityDetails[0]['longitude']
            });
        }
        searchCities().then( () => {});
    }, [cityId, cityName]);


    function toggleHideDetails() {
        setHideDetails(!hideDetails);
    }

    return (
        <div className={styles.cityDetailsWrapper}>
            <button onClick={toggleHideDetails} className={styles.cityDetailsButton}>
                More info {hideDetails ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}
            </button>
            {!hideDetails &&
                <div>
                    <p><span className={styles.cityDetailsP}>Timezone:</span> {details['timezone'] !== undefined ? details['timezone'] : 'Not found'}</p>
                    <p><span className={styles.cityDetailsP}>Country:</span> {details['country'] !== undefined ? details['country'] : 'Not found'}</p>
                    <p><span className={styles.cityDetailsP}>Population:</span> {details['population'] !== undefined ? details['population'] : 'Not found'}</p>
                    <p>Click <a href={`https://www.youtube.com/results?search_query=${cityName}`} target="_blank">here</a> to visit {cityName}</p>
                </div>
            }
        </div>
    )
}