var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var countrySchema = new Schema({
    name: String,
    flag: String,
    head_coach: String,
    captain: String,
    header_pic: String
});

var Country = mongoose.model('country', countrySchema);

module.exports = Country;