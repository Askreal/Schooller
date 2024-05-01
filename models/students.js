
// Define the schema
const StudentSchema = {
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

export default StudentSchema