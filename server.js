const express = require('express');
const app= express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
require('dotenv/config');

app.use(bodyParser.json());
app.use(cors());
//Routing
const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute);

//Routes
app.get('/', (req,res) => {
    res.send('We are Alive');
});


app.listen(PORT, () => console.log('Listening on {$PORT}'));
//connect to database
mongoose.connect(process.env.DATABASE_URL,
{ useNewUrlParser: true }, () => console.log('Connected to DB!'));

