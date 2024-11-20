const mongoose = require("mongoose");



const configurationSchema = new mongoose.Schema({
    //     first name
    // last naem 
    // psition
    // address

    firstName: {
        type: String,
        required: [true, "firstName is required"],

    },
    lastName: {
        type: String,
        required: [true, "lastName is required"],
    },
    position: {
        type: String,
        required: [true, "position is required"],
    },
    address: {
        type: String,
        required: [true, "address is required"],
    },
    image: {
        type: String,
        required: [true, "image is required"]
    }
});



let Configuration = mongoose.model("Configuration", configurationSchema);

module.exports = Configuration;