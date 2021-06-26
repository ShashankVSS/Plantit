const mongoose = require('mongoose');

const image_schema = new mongoose.Schema({
  data: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },  
  imagePath: {
    tpye: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Photos = mongoose.model('Photos', image_schema);
module.exports = Photos;