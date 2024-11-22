
const Attendance = require("../Model/attendanceSchema.js");




exports.createAttendanceController = async (req, res, next) => {

    try {
        let result = await Attendance.create(req.body)
        res.status(200).json({
            success: true,
            mesage: "Attendence created successfully",
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            data: null,

        })
    }

}


exports.readAllStudentsAttendance = async (req, res, next) => {
    try {

        let result = await Attendance.find({})
        res.status(200).json({
            success: true,
            mesage: "All Attendance fetched successfully",
            data: result,
        })


    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            data: null,
        })

    }
}


exports.readSpecificAttendance = async (req, res, next) => {
    try {
        let result = await Attendance.findById(req.params.id);
        res.status(200).json({
            success: true,
            mesage: "Attendence fetched successfully",
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            data: null,
        })

    }
}

exports.updateAttendance = async (req, res, next) => {
    try {
        let result = await Attendance.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(201).json({
            success: true,
            mesage: "Attendance updated successfully",
            data: result,
        })


    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            data: null,
        })

    }
}