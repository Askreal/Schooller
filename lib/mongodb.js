const { MongoClient } = require('mongodb');

export const connectMongoDB = async () => {
    try {

        const uri = process.env.MONGODB_URI

        const client = new MongoClient(uri, { useUnifiedTopology: true });

        await client.connect();

        console.log("Connecting database successfully");

        return client;
    } catch (error) {
        console.log("Error connecting to MongoDB From mongodb lib: ", error);
        throw error; // Re-throw the error
    }
}
