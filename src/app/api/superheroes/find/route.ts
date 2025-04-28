import {NextRequest, NextResponse} from "next/server";
import {findSuperHeroByNameDb} from "@/services/superHeroService";

export const GET = async (request: NextRequest) => {
    const {searchParams} = new URL(request.url);
    const name: string = searchParams.get("name") ?? "";

    console.log("Executing query for superheroes by name");
    const heroes = await findSuperHeroByNameDb(name);

    if (heroes) {
        return NextResponse.json({heroes});
    }

    return NextResponse.json({heroes: []});
}