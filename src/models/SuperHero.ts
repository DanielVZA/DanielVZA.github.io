import mongoose, {Model, Schema} from "mongoose";
import {SuperHero as SuperHeroType} from "@/types/SuperHero";

const SuperHeroSchema: Schema<SuperHeroType> = new Schema({
    name: {type: String, required: true},
    slug: {type: String, required: true}
}, {collection: "superheroes"});

const SuperHero: Model<SuperHeroType> = mongoose.models?.SuperHero ?? mongoose.model<SuperHeroType>('SuperHero', SuperHeroSchema);

export default SuperHero;