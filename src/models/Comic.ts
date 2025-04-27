import mongoose, {Schema, Model} from "mongoose";
import {Comic as ComicType} from "@/types/Comic";


const ComicSchema: Schema<ComicType> = new Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
});

const Comic: Model<ComicType> =
    mongoose.models?.Comic ?? mongoose.model<ComicType>('Comic', ComicSchema);

export default Comic;