import {Sidebar} from "@/app/components/sidebar";
import Footer from "@/app/components/footer";
import './global.css'
import styles from './layout.module.css'
import { Montserrat } from "next/font/google";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
    title: 'Explore Enjoy Embrace',
    description: 'Live laugh love',
}


config.autoAddCss = false; // for icons to not flash huge on the screen

export default function RootLayout({children}) {
    return (
        <html>
        <body className={montserrat.className}>
            <Sidebar />
            {children}
            {/*<Footer />*/}
        </body>
        </html>
    )
}
