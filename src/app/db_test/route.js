import { connectMongoDB } from "../../../lib/mongodb";

export async function GET(){
    try {
        await connectMongoDB();

        return Response.json({
            message : "Test db"
        })

    } catch (error) {
        // Return error response with status 500 if an error occurs
        return NextResponse.json({ message: "An error occurred while fetching all students." }, { status: 500 });
    }
}