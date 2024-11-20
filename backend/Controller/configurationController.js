const Configuration = require("../Model/configurationSchema")



exports.createConfigurationController = async (req, res, nejxt) => {
    try {
        let result = await Configuration.create(req.body);

        res.status(201).json({
            success: true,
            message: "Configuration created successfully",
            data: result
        });
    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message

        })

    }
}

exports.updateConfigurationController = async (req, res, next) => {
    try {

        let result = await Configuration.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json({
            success: true,
            message: "Configuration updated successfully",
            data: result
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}