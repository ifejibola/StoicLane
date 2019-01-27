//Template Structure for db schema 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ArtistSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Artist = mongoose.model('artist', ArtistSchema);