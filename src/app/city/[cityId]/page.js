"use client";
import {useEffect, useRef, useState} from 'react';
import layoutStyles from '../../layout.module.css';
import { usePathname } from 'next/navigation';
import Chart from 'chart.js/auto';
import styles from './city.module.css';
import {setAndReturnChartConfig} from "./utils/chartConfig";
import forecast from "./utils/forecast.json";
import hotels from "./utils/brasov-hotel.json";
import restaurants from "./utils/brasov-restaurant.json";
import cafes from "./utils/brasov-coffee.json";
import museums from "./utils/brasov-museum.json";
import parks from "./utils/brasov-park.json";
import descriptions from "./utils/descriptions.json";
import HotelContainer from "@/app/city/[cityId]/components/hotelContainer";
import RestaurantContainer from "@/app/city/[cityId]/components/restaurantContainer";
import CafeContainer from "@/app/city/[cityId]/components/cafeContainer";
import MuseumContainer from "@/app/city/[cityId]/components/museumContainer";
import ParkContainer from "@/app/city/[cityId]/components/parkContainer";
import Navbar from "@/app/city/[cityId]/components/navbar";

export default function City() {
    const pathname = usePathname();
    const cityId = pathname.split('/')[2].split('&')[1];
    const city = pathname.split('/')[2].split('&')[0];

    const [isChartVisible, setIsChartVisible] = useState(false);
    const [isHotelVisible, setIsHotelVisible] = useState(false);
    const [isRestaurantVisible, setIsRestaurantVisible] = useState(false);
    const [isCafeVisible, setIsCafeVisible] = useState(false);
    const [isMuseumVisible, setIsMuseumVisible] = useState(false);
    const [isParkVisible, setIsParkVisible] = useState(false);
    const [activeButton, setActiveButton] = useState(null);

    const chartRef = useRef(null);

    useEffect(() => {
        const weatherChart = document.getElementById('weatherChart');
        if (!weatherChart) {
            return;
        }
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        chartRef.current = new Chart(weatherChart, setAndReturnChartConfig(forecast));

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [isChartVisible]);

    const toggleVisibility = (sectionName) => {
        setIsChartVisible(false);
        setIsHotelVisible(false);
        setIsRestaurantVisible(false);
        setIsCafeVisible(false);
        setIsMuseumVisible(false);
        setIsParkVisible(false);

        switch (sectionName) {
            case 'weather':
                setIsChartVisible(!isChartVisible);
                break;
            case 'hotel':
                setIsHotelVisible(!isHotelVisible);
                break;
            case 'restaurant':
                setIsRestaurantVisible(!isRestaurantVisible);
                break;
            case 'cafe':
                setIsCafeVisible(!isCafeVisible);
                break;
            case 'museum':
                setIsMuseumVisible(!isMuseumVisible);
                break;
            case 'park':
                setIsParkVisible(!isParkVisible);
                break;
            default:
                break;
        }

        setActiveButton(sectionName === activeButton ? null : sectionName);
    };

    const toggleSection = (sectionName) => {
        toggleVisibility(sectionName);
    };

    return (
        <div className={layoutStyles.mainContent}>
            <h1>{city}</h1>
            {/*<p>{description}</p>*/}
            <Navbar toggleSection={toggleSection} activeButton={activeButton}/>
            <div className={styles.weatherChart}>
                {isChartVisible && <canvas id="weatherChart"></canvas>}
                {isHotelVisible && <HotelContainer hotels={hotels.suggestions}/>}
                {isRestaurantVisible && <RestaurantContainer restaurants={restaurants.suggestions}/>}
                {isCafeVisible && <CafeContainer cafes={cafes.suggestions}/>}
                {isMuseumVisible && <MuseumContainer museums={museums.suggestions}/>}
                {isParkVisible && <ParkContainer parks={parks.suggestions}/>}
            </div>
        </div>
    );
}
