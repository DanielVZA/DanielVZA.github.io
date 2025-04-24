class SuperHero {
    id: number;
    name: string;
    powerStats: PowerStats;
    biography: Biography;
    appearance: Appearance;
    work: Work;
    image: string;

    constructor(id: number, name: string, powerStats: PowerStats, biography: Biography, appearance: Appearance, work: Work, image: string) {
        this.id = id;
        this.name = name;
        this.powerStats = powerStats;
        this.biography = biography;
        this.appearance = appearance;
        this.work = work;
        this.image = image;
    }
}

interface PowerStats {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
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

interface Appearance {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    eyeColor: string;
    hairColor: string;
}

interface Work {
    occupation: string;
    base: string;
}

interface Connection {
    groupAffiliation: string;
    relatives: string;
}