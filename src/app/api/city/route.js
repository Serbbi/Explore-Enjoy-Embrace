import {connectToDatabase} from "@/utils/db";
import City from "@/models/city";
import {NextResponse} from "next/server";

export async function POST(req, res) {
    const {name, country, id_api} = await req.json();
    try {
        await connectToDatabase();
        await City.create({name, country, id_api});
        return NextResponse.json({message: "City added to favorites!"});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Database connection failed!"});
    }
}

export async function GET(req, res) {
    try {
        await connectToDatabase();
        const cities = await City.find({});
        return NextResponse.json(cities);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Database connection failed!"});
    }
}

export async function DELETE(req, res) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    try {
        await connectToDatabase();
        await City.deleteOne({id_api: id});
        return NextResponse.json({message: "City deleted from favorites!"});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Database connection failed!"});
    }
}