import mongoose from "mongoose";

declare global {
    var _mongoose: {
        conn: any,
        promise: Promise<any> | null
    };
}

const MONGODB_URI = `mongodb+srv://${process.env.MONGOUSER}:${process.env.PASSWORD}@${process.env.CLUSTER_URI}/${process.env.DBNAME}?retryWrites=true&w=majority&appName=${process.env.CLUSTER_APP_NAME}`;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

let cached = global._mongoose;
cached ??= global._mongoose = {conn: null, promise: null};

async function dbConnect() {
    console.log("Connecting to MongoDB...");
    if (cached.conn) {
        console.log("Cached connection found, returning cached connection.");
        return cached.conn
    }

    cached.promise ??= mongoose.connect(MONGODB_URI).then((mongooseInstance) => mongooseInstance);

    cached.conn = await cached.promise;
    console.log("Connected to MongoDB");
    return cached.conn;
}

export default dbConnect;