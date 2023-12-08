import styles from './home.module.css';
import layoutStyle from './layout.module.css';


export default function Home() {

    return (
        <div className={layoutStyle.mainContent}>
            <div className={styles.homeBody}>
                <div className={styles.bgimg1}>
                    <div className={styles.caption}>
                        <span className={styles.border}>Explore</span>
                    </div>
                </div>
                <div className={styles.inBetweenText}>
                    <h3 className={styles.header}>Super cool</h3>
                    <p>There&apos;s an undeniable thrill in stepping into the unknown, each street a new chapter waiting to be discovered. Cities are labyrinths of culture, history, and surprises. Every corner turned reveals a hidden gem, a breathtaking vista, or an unexpected tale. Exploring isn&apos;t just about navigating maps; it&apos;s about embracing the unfamiliar and finding wonder in every avenue and alleyway.</p>
                </div>
                <div className={styles.bgimg2}>
                    <div className={styles.caption}>
                        <span className={styles.border}>Enjoy</span>
                    </div>
                </div>
                <div className={styles.inBetweenText}>
                    <h3 className={styles.header}>Cringe</h3>
                    <p>Amidst the hustle and bustle of urban life, there&apos;s an art to relishing the small moments. It&apos;s sipping on coffee at a cozy café, exchanging stories with strangers, or admiring the artistry of street performers. The beauty of city life lies not only in grand landmarks but in the simple joys found in a laughter-filled conversation or a serene park bench amidst skyscrapers. Enjoying the city isn&apos;t about rushing—it&apos;s about savoring each moment, allowing its vibrant pulse to invigorate your spirit.</p>
                </div>
                <div className={styles.bgimg3}>
                    <div className={styles.caption}>
                        <span className={styles.border}>Embrace</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
