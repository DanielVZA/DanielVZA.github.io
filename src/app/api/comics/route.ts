import {NextResponse} from "next/server";
import {getAllComicsDb} from "@/services/comicService";

export const GET = async () => {
    try{
        const comics = await getAllComicsDb();
        return NextResponse.json(comics);
    }catch(err){
        console.error(err);
        return NextResponse.json({error: "Failed to fetch comics"}, {status: 500});
    }
}