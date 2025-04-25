import axios from "axios";

export const getSuperHeroes = async (page: number = 1, limit: number = 12
) => {
    const {data} = await axios.get(`/api/superheroes?page=${page}&limit=${limit}`);
    return data;
}