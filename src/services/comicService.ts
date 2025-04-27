import axios from "axios";
import dbConnect from "@/lib/mongodb";
import Comic from "@/models/Comic";

export const getAllComicsDb = async () => {
    await dbConnect();
    try {
        return await Comic.find();
    } catch (err) {
        console.error(err);
    }
}

export const getAllComics = async () => {
    const {data} = await axios.get('/api/comics');
    return data;
};