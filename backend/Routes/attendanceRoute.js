const express = require('express');
const { createAttendanceController,
    readAllStudentsAttendance,
    updateAttendance,
    readSpecificAttendance } = require('../Controller/attendanceController.js');



const router = express.Router()

router.route('/').post(createAttendanceController);
router.route('/').get(readAllStudentsAttendance);
router.route('/:id').patch(updateAttendance)
router.route('/:id').get(readSpecificAttendance)



module.exports = router;