const { MongoClient } = require('mongodb');

export const connectMongoDB = async () => {
    try {
        const uri = process.env.MONGODB_URI
        if (!uri) {
            throw new Error("MONGODB_URI environment variable is not defined");
        }
        const client = new MongoClient(uri);

        await client.connect();

        console.log("Connecting database successfully");

        return client;
    } catch (error) {
        console.log("Error connecting to MongoDB From mongodb lib: ", error);
        throw error;
    }
}
