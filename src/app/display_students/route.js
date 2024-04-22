import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import Student from "../../../models/students";

export async function GET() {
    try {
        await connectMongoDB();
        const allStudents = await Student.findOne();
        return NextResponse.json(allStudents, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "An error occured while fetching all students." }, { status: 500 });
    }
}
