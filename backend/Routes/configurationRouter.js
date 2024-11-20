const express = require('express');
const { createConfigurationController, updateConfigurationController } = require('../Controller/configurationController');

const router = express.Router();

router.route('/create').post(createConfigurationController);

router.route('/update/:id').patch(updateConfigurationController);

module.exports = router;
