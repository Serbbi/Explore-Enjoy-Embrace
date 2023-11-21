import Link from "next/link";
import {Providers} from "@/app/providers";
import {Flex} from "@chakra-ui/react";
import {Sidebar} from "@/app/sidebar";
import Footer from "@/app/footer";

export const metadata = {
    title: 'Explore Enjoy Embrace',
    description: 'Live laugh love',
}

export default function RootLayout({children}) {
    return (
        <html>
        <body>
        <Providers>
            <Flex
                flexDirection="row"
                height="100vh"
                width="100%"
            >
            <Sidebar />
            {children}
            {/*<Footer />*/}
            </Flex>
        </Providers>
        </body>
        </html>
    )
}
