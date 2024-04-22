import mongoose, { Schema } from "mongoose";



const StudentSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        student_id: {
            type: Number,
            required: true
        },
        number: {
            type: Number,
            required: true
        },
        birthday: {
            type: Date,
            required: true
        },
        classroom: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        profile: {
            type: String,
            required: true
        },
        weight: {
            type: Number,
            required: true
        },
        height: {
            type: Number,
            required: true
        },
        hobbie: {
            type: [String],
            required: true
        },
        fav_subject: {
            type: [String],
            required: true
        }
    },
    { timestamps: true }
);

const Student = mongoose.models.Student || mongoose.model("Student", StudentSchema);
export default Student;
