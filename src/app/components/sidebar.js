import Link from "next/link";
import styles from './sidebar.module.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons/faHouse";
import {faHeart, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons/faCircleInfo";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";

library.add(faHouse, faHeart, faMagnifyingGlass);

export function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.topItems}>
                <Link className={styles.listItem} href={'/'}><FontAwesomeIcon icon={faHouse} /> Home</Link>
                <Link className={styles.listItem} href={'/search'}><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</Link>
                <Link className={styles.listItem} href={'/favorites'}><FontAwesomeIcon icon={faHeart} /> Favorites</Link>
            </div>
            <div className={styles.bottomItems}>
                <Link className={styles.listItem} href={'/about'}><FontAwesomeIcon icon={faCircleInfo} /> About</Link>
                <Link className={styles.listItem} href={'/contact'}><FontAwesomeIcon icon={faPhone} /> Contact</Link>
                <Link className={styles.listItem} href={'https://github.com/Serbbi/Eggcyclopedia'} passHref={true} target="_blank"> Egg?</Link>
            </div>
        </div>
    );
}