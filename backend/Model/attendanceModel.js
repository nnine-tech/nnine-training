const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({

    students_id: {
        type: String,
        required: [true, "studentsName is required"],

    },
    courseId: {
        type: String,
        required: [true, "checkedIn is required"],
    },

    date: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: Boolean,
        required: [true, "status is required"]
    },



});

let Attendance = mongoose.model('Attendance', attendanceSchema);



module.exports = Attendance;