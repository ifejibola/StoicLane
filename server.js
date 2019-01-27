//Require dependecies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const artists = require('./backEnd/routes/api/artists');

//Initialize express into app
const app = express();
//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config key
const db = require('./backEnd/config/keys').mongoURI;

// Connect to mongo
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(()=> console.log('MongoDB Connection Established..'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/artists', artists);

//Server port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));