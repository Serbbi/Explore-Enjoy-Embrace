import layoutStyles from '../layout.module.css'
import styles from './about.module.css'

export default function About() {
    return (
        <div className={layoutStyles.mainContent}>
            <div className={styles.contentWrapper}>
                <h1>About</h1>
                <h5 className={styles.questionText}>What is Explore-Enjoy-Embrace?</h5>
                <p className={styles.text}>It is a &apos; of a kind &apos; website where you can search for cities around the world and pick your favorites.</p>

                <hr className={styles.horizontalLine}/>
                <h5 className={styles.questionText}>What does Explore-Enjoy-Embrace mean?</h5>
                <p className={styles.text}>Based on the &quot; Live, Laugh, Love &quot; energy, it is a reincarnation of that much beloved feeling.</p>

                <hr className={styles.horizontalLine}/>
                <h5 className={styles.questionText}>How do I use this website?</h5>
                <p className={styles.text}>Just lose yourself in the atmosphere.</p>
            </div>
        </div>
    )
}