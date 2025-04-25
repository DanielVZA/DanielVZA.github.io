import {promises as fs} from "fs";
import path from "path";
import {NextResponse} from "next/server";
import {Comic} from "@/types/Comic";

export const GET = async () => {
    const filePath: string = path.join(process.cwd(), "data", "comics.json");
    const jsonData: string = await fs.readFile(filePath, "utf-8");
    const comics: Comic[] = JSON.parse(jsonData);

    return NextResponse.json(comics);
}