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

export const findSuperHeroByNameDb = async (name: string) => {
    await dbConnect();
    try {
        return await SuperHero.find({name: RegExp(name, 'i')});
    } catch (err) {
        console.error(err);
    }
}

export const getSuperHeroes = async (page: number = 1, limit: number = 60) => {
    const {data} = await axios.get(`/api/superheroes?page=${page}&limit=${limit}`);
    return data;
}

export const findSuperHeroByName = async (name: string) => {
    const {data} = await axios.get(`/api/superheroes/find?name=${name}`);
    return data;
}