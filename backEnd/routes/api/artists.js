const express = require('express');
const router = express.Router();

//Item Model, for making querys
const Artist = require('../../models/Artist');

// @route   GET api/Artists
// @desc    Get All Artists
// @access  Public
router.get('/', (request, response) =>{
    //sorted by date
    Artist.find()
        .sort({ date: -1 })
        .then(artists => response.json(artists))
}); 

// @route   POST api/artists
// @desc    Create A Post
// @access  Public
router.post('/', (request, response)=>{
    // Create new Artist 
    const newArtist = new Artist({
        //get name of new artist from form??(body-parser)
            //date is retrieved automatically
        name: request.body.name
    });
    //Save Artist
    newArtist.save().then(artist => response.json(artist));
});

// @route   DELETE api/artists/:id
// @desc    Delete An Artist
// @access  Public
router.delete('/:id', (request, response)=>{
    Artist.findById(request.params.id)
        .then(artist => artist.remove().then(()=> response.json({success: true})))
        .catch(err => response.status(404).json({success:false}));
});

module.exports = router;