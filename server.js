const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const seats = require('./routes/api/seats');
// initialize express
const app = express();

// body parser middleware
app.use(bodyParser.json());

// DB config 
const db = require('./config/keys').mongoURI;

// Connect to MongoDB 
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes 
app.use('/api/seats', seats);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on Port ${port}`));