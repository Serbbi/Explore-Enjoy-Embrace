import {Sidebar} from "@/app/components/sidebar";
import Footer from "@/app/components/footer";
import './global.css'
import styles from './layout.module.css'
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
    title: 'Explore Enjoy Embrace',
    description: 'Live laugh love',
}

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
