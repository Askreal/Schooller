const { MongoClient } = require('mongodb');
import { connectMongoDB } from '../lib/mongodb';


// Define the schema
export const StudentSchema = {
    name: {
        type: "string",
        required: true  
    },
    student_id: {
        type: "number",
        required: true
    },
    number: {
        type: "number",
        required: true
    },
    birthday: {
        type: "date",
        required: true
    },
    classroom: {
        type: "string",
        required: true
    },
    email: {
        type: "string",
        required: true
    },
    profile: {
        type: "string",
        required: true
    },
    weight: {
        type: "number",
        required: true
    },
    height: {
        type: "number",
        required: true
    },
    hobbie: {
        type: ["string"],
        required: true
    },
    fav_subject: {
        type: ["string"],
        required: true
    }
};

// // Function to insert a new student document
// export async function insertStudent(studentData) {
//     try {
        
//         const db = client.db('student_detail');
//         const collection = db.collection('students');
//         const result = await collection.insertOne(studentData);

//         console.log("Inserted student:", result.insertedId);
//     } catch (error) {
//         console.error("Error inserting student:", error);
//     }
// }

