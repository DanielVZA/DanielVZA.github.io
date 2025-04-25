export interface SuperHero {
    id: number;
    name: string;
    slug: string;
    powerStats: PowerStats;
    appearance: Appearance;
    biography: Biography;
    work: Work;
    images: Image;

}

interface PowerStats {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
}

interface Appearance {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    eyeColor: string;
    hairColor: string;
}

interface Biography {
    fullName: string;
    alterEgos: string;
    aliases: string[];
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
    alignment: string;
}
interface Work {
    occupation: string;
    base: string;
}

interface Connection {
    groupAffiliation: string;
    relatives: string;
}

interface Image {
    xs: string;
    sm: string;
    md: string;
    lg: string;
}