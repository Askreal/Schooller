import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import Student from "../../../models/students";

export async function GET() {
    try {
        // Connect to the MongoDB database using connection pooling
        await connectMongoDB();

        // Specify projection to only retrieve necessary fields
        const allStudents = await Student.find({}, { _id: 0, name: 1, age: 1 });

        // Return response with status 200 and JSON data
        return Response.json(allStudents, { status: 200 });
    } catch (error) {
        // Return error response with status 500 if an error occurs
        return NextResponse.json({ message: "An error occurred while fetching all students." }, { status: 500 });
    }
}
