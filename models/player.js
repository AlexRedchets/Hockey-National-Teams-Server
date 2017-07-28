var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
    position: String,
    team: String,
    number: Number,
    birthdate: String,
    birthplace: String,
    imageUrl: String,
    height: Number,
    weight: Number,
    name: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Player = mongoose.model('player', playerSchema);

module.exports = Player;