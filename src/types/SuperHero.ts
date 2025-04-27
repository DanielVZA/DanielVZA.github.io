export interface SuperHero {
    _id: number;
    id: number;
    name: string;
    slug: string;
    powerStats: PowerStats;
    appearance: Appearance;
    biography: Biography;
    work: Work;
    connections: Connection;
    images: Image;

}

export interface PowerStats {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
}

export interface Appearance {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    eyeColor: string;
    hairColor: string;
}

export interface Biography {
    fullName: string;
    alterEgos: string;
    aliases: string[];
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
    alignment: string;
}
export interface Work {
    occupation: string;
    base: string;
}

export interface Connection {
    groupAffiliation: string;
    relatives: string;
}

export interface Image {
    xs: string;
    sm: string;
    md: string;
    lg: string;
}