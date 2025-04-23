import Comic from "@/app/models/Comic";

const COMICS: Comic[] = [
    new Comic(1, 'Avengers 1', '/images/avenger1.png', 12000, 5),
    new Comic(2, 'Era de Ultron', '/images/avengereradeultron.png', 13000, 7),
    new Comic(3, 'Deadpool', '/images/dead_pool_matandoparavivir.png', 12000, 2),
    new Comic(4, 'Secret War', '/images/secretwar.png', 12000, 7),
    new Comic(5, 'Spiderman Back', '/images/spiderman1.png', 12000, 1),
    new Comic(6, 'Stranger Things', '/images/stranger_things.png', 13000, 3),
    new Comic(7, 'Thanos Vence', '/images/thanosvence1.png', 12000, 4),
    new Comic(8, 'Infinity Gauntlet', '/images/infinitygauntlet.png', 12000, 3)
]

const getAllComics = async () => (COMICS);

export { getAllComics };