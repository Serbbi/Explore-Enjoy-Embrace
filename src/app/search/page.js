import Link from "next/link";
import {Input, ListItem, UnorderedList} from '@chakra-ui/react'

export default function Search() {
    return (
        <div>
            <h1>Search</h1>
            <Input placeholder="Search for cities..." />
            <UnorderedList>
                <ListItem><Link href={'/city/brasov'}>Brasov</Link></ListItem>
                <ListItem><Link href={'/city/timisoara'}>Timisoara</Link></ListItem>
                <ListItem><Link href={'/city/satu mare'}>Satu Mare</Link></ListItem>
            </UnorderedList>
        </div>
    )
}