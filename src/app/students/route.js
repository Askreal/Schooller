import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import Student from "../../../models/students";

export async function POST(req) {
    try {
        const { name, student_id, number, birthday, classroom, email, profile, weight, height, hobbie, fav_subject } = await req.json();

        console.log("already get data");

        await connectMongoDB();
        await Student.create({
            name, student_id, number, birthday, classroom, email, profile, weight, height, hobbie, fav_subject 
        });

        return NextResponse.json(
            { message: "User registered." },
            { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "An error occured while registranting the user." }, { status: 500 })
    }
}

export async function GET() {
    try {
        await connectMongoDB();
        const allStudents = await Student.find({});
        return NextResponse.json(allStudents, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "An error occured while fetching all students." }, { status: 500 });
    }
}

// {
//     "name": "John Doe",
//         "student_id": 123456,
//             "number": 789,
//                 "birthday": "1990-01-01",
//                     "classroom": "A",
//                         "email": "john@example.com",
//                             "profile": "Student profile",
//                                 "weight": 70,
//                                     "height": 175,
//                                         "hobbie": ["play game", "coding"],
//                                             "fav_subject": ["Computer", "Math"]
// }