import axios from "axios";

const SUPERHERO_API_URL: string = process.env.NEXT_PUBLIC_SUPER_HERO_API ?? '';
const SUPER_HERO_TOKEN: string = process.env.NEXT_PUBLIC_SUPER_HERO_TOKEN ?? '';
const BAD_IMG_ARRAY = [
    51, 54, 74, 101, 113, 117, 124, 131, 133, 134,
    143, 164, 184, 205, 244, 283, 288, 290, 291,
    292, 362, 447, 453, 511, 512, 552, 553, 593,
    603, 629, 662, 682, 694, 698, 715, 721, 725
];
const getAllSuperHeroes = async () => {
    console.log(`Fetching superheroes from ${SUPERHERO_API_URL}`);
    axios.get(`${SUPERHERO_API_URL}/${SUPER_HERO_TOKEN}/search/spiderman`)
        .then((response) => {
            if (response.status === 200) {
                const data = response.data;
                console.log("Superheroes data:", data);
                return data;
            } else {
                console.error("Error fetching superheroes:", response.statusText);
                return [];
            }
        }).catch((error) => {
            console.log(error);
    });
};

export {getAllSuperHeroes};
