import Link from "next/link";
import styles from './sidebar.module.css'

export function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Link className={styles.listItem} href={'/'}>Home</Link>
            <Link className={styles.listItem} href={'/search'}>Search</Link>
            <Link className={styles.listItem} href={'/favorites'}>Favorites</Link>
        </div>
    );
}