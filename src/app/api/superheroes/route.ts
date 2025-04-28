import {NextRequest, NextResponse} from "next/server";
import {getAllSuperHeroesDb} from "@/services/superHeroService";

export const GET = async (request: NextRequest) => {
    const {searchParams} = new URL(request.url);
    const page: number = parseInt(searchParams.get("page") ?? "1");
    const limit: number = parseInt(searchParams.get("limit") ?? "60");

    console.log("Executing query for superheroes");
    const heroes = await getAllSuperHeroesDb();

    if (heroes) {
        const start: number = (page - 1) * limit;
        const paginated = heroes.slice(start, start + limit);
        return NextResponse.json({heroes: paginated, hasMore: start + limit < heroes.length});
    }

    return NextResponse.json({heroes: [], hasMore: false});
}