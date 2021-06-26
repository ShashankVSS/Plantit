const mongoose = require('mongoose');

const party_schema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    }],
    photos: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Photos',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Party = mongoose.model('Party', party_schema);
module.exports = Party;