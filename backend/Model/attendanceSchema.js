const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({


    students_id: {
        type: String,
        required: [true, "studentsName is required"],

    },
    checkedIn: {
        type: String,
        required: [true, "checkedIn is required"],
    },
    checkout: {
        type: String,
        required: [true, "checkout is required"],
    },

    status: {
        type: Boolean,
        required: [true, "status is required"]

    },
    date: {
        type: Date,
        default: Date.now()
    }


});

let Attendance = mongoose.model('Attendance', attendanceSchema);



module.exports = Attendance;