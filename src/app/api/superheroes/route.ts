import {promises as fs} from "fs";
import path from "path";
import {NextResponse} from "next/server";
import {SuperHero} from "@/types/SuperHero";

export const GET = async (request: Request) => {
    const {searchParams} = new URL(request.url);
    const page: number = parseInt(searchParams.get("page") ?? "1");
    const limit: number = parseInt(searchParams.get("limit") ?? "12");

    const filePath: string = path.join(process.cwd(), "data", "superHeroes.json");
    const jsonData: string = await fs.readFile(filePath, "utf-8");
    const heroes: SuperHero[] = JSON.parse(jsonData);

    const start: number = (page - 1) * limit;
    const paginated: SuperHero[] = heroes.slice(start, start + limit);

    return NextResponse.json({heroes: paginated, hasMore: start + limit < heroes.length});
}