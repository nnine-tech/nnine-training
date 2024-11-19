const mongoose = require("mongoose");

const attendenceSchema = new mongoose.Schema({

    studentsName: {
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

let Attendance = mongoose.model('Attendance', attendenceSchema);



module.exports = Attendance;