import axios from "axios";

export const getAllComics = async () => {
    const {data} = await axios.get('/api/comics');
    return data;
};