import {Flex} from "@chakra-ui/react";
import Link from "next/link";

export function Sidebar() {
    return (
        <Flex flexDirection="column"
              maxWidth="250px"
              backgroundColor="gray"
              height="100vh"
              flex="none" // Prevent this part from growing
        >
            <Link href={'/'}>go to home</Link>
            <Link href={'/search'}>go to search</Link>
            <Link href={'/favorites'}>go to favorites</Link>
        </Flex>
    )
}