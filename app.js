const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const cameraRoutes = require('./routes/camera');
const teddyRoutes = require('./routes/teddy');
const furnitureRoutes = require('./routes/furniture');
require('dotenv').config();
const app = express();

mongoose.connect(process.env.MONGODB_URI,

  { useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname + '/public/pages')));
app.use(express.static(path.join(__dirname + '/public/css')));
app.use(express.static(path.join(__dirname + '/public/scripts')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(bodyParser.json());

app.use('/api/cameras', cameraRoutes);
app.use('/api/teddies', teddyRoutes);
app.use('/api/furniture', furnitureRoutes);

module.exports = app;