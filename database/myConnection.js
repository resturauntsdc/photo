const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/restaurant_images';

const db = mongoose.connect(mongoUri);

module.exports = db;


