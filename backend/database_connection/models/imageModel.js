const mongoose = require('mongoose');

// Define Schema for Image
const imageSchema = new mongoose.Schema({
    title1: {
        type: String,
        required:true,

    },
    title2: {
        type: String,
        required:true,


    },
    paragraph: {
        type: String,
        required:true,

    },
    title3: {
        type: String,
        required:true,

    },
    url: {
        type: String,
        required: true,
    },
   


});

// Create Model for Image
const ImageModel = mongoose.model('Image', imageSchema);

module.exports = ImageModel;
