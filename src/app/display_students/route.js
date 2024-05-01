import { connectMongoDB } from "../../../lib/mongodb";

export async function GET() {
    try {
        const client = await connectMongoDB();
        const database = client.db('General_data');
        const collection = database.collection('students');

        const cursor = await collection.find().toArray();

        await client.close();

        return Response.json(cursor);
    }
    catch (error) {
        console.error("Error fetching students : " , error);
        return Response.error(500 , "Internal Server Error");
    }
}
