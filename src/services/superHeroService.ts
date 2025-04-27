import axios from "axios";
import dbConnect from "@/lib/mongodb";
import SuperHero from "@/models/SuperHero";

export const getAllSuperHeroesDb = async () => {
    await dbConnect();
    try {
        return await SuperHero.find();
    } catch (err) {
        console.error(err);
    }
}

export const getSuperHeroes = async (page: number = 1, limit: number = 18) => {
    const {data} = await axios.get(`/api/superheroes?page=${page}&limit=${limit}`);
    return data;
}