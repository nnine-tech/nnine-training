
const express = require('express')
const {
    createAttendenceController,
    readAllStudentsAttendence,
    readSpecificAttendence,
    updateAttendence } = require('../Controller/attendenceController')


const router = express.Router()

router.route('/create').post(createAttendenceController);
router.route('/readAll').get(readAllStudentsAttendence);
router.route('/:id').patch(updateAttendence)
router.route('/:id').get(readSpecificAttendence)

module.exports = router;