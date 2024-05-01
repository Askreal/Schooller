import { connectMongoDB } from "../../../lib/mongodb";


export async function POST(req) {
    const { name, student_id, number, birthday, classroom, email, profile, weight, height, hobbie, fav_subject } = await req.json();

    // return Response.json({
    //     name: name,
    //     student_id: student_id,
    //     number: number,
    //     birthday: birthday,
    //     classroom: classroom,
    //     email: email,
    //     profile: profile,
    //     weight: weight,
    //     height: height,
    //     hobbie: hobbie,
    //     fav_subject: fav_subject
    // })

    const client = await connectMongoDB();
    const database = client.db('General_data');
    const collection = database.collection('students');

    const result = await collection.insertOne({
            name: name,
            student_id: student_id,
            number: number,
            birthday: birthday,
            classroom: classroom,
            email: email,
            profile: profile,
            weight: weight,
            height: height,
            hobbie: hobbie,
            fav_subject: fav_subject
    });

    return Response.json(result , {status : 200})
}

// {
//     "name": "Jane Doe",
//         "student_id": 482,
//             "number": 976,
//                 "birthday": "1995-06-17",
//                     "classroom": "Mathematics",
//                         "email": "jane.doe@example.com",
//                             "profile": "http://placeimg.com/640/480/people",
//                                 "weight": 67,
//                                     "height": 175,
//                                         "hobbie": ["Reading", "Cooking"],
//                                             "fav_subject": ["Math", "Science"]
// }
