import layoutStyles from '../layout.module.css'
import styles from './contact.module.css'

export default function Contact() {
    return (
        <div className={layoutStyles.mainContent}>
            <div className={styles.contentWrapper}>
                <h1>Contact</h1>
                <p>For more information, please contact us on <a href="mailto: exejem@lll.com">Email</a>.</p>
                <p>We would love to hear from you!</p>
            </div>
        </div>
    )
}