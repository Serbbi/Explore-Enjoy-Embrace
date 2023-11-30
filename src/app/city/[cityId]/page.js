"use client";
import layoutStyles from '../../layout.module.css'
import {usePathname} from "next/navigation";

export default function City() {
    const pathname = usePathname()
    const cityId = pathname.split('/')[2].split('&')[1]
    const city = pathname.split('/')[2].split('&')[0]

    return (
        <div className={layoutStyles.mainContent}>
            <h1>{city}</h1>
        </div>
    )
}