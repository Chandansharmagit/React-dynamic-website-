const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,

    },
    description: {
        type: String,

    },
    title1: {
        type: String
    },
    description1: {
        type: String
    },
    title2: {
        type: String
    },
    description2: {
        type: String
    },
    title3: {
        type: String
    },
    description3: {
        type: String
    },
    title4: {
        type: String
    },
    description4: {
        type: String
    },
    imageUrl: {
        type: String
    },
    imageUrl1: {
        type: String
    },
    imageUrl2: {
        type: String
    },
    imageUrl3: {
        type: String
    },
    imageUrl4: {
        type: String
    }

  
});


const event_change = mongoose.model('Events', eventSchema);
module.exports = event_change;