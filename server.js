// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;
require('dotenv').config();

// Environment variables
const uri = process.env.MONGODB_URI;
const PORT = process.env.PORT;

// Controllers
const bookmarksController = require('./controllers/bookmarks')

// ... other imports
const path = require('path');

// Connect to Mongo
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true },  () => {
  console.log(`MongoDB connection established: ${uri}`);
});

// Error / Disconnection
db.on('error', (err) => console.log(err.message + ' is Mondog not running?'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware
app.use(express.static(path.join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
// app.get('/', (req, res) => {
//   res.send('Hi, the route is working fine.')
// })
app.use('/bookmarks', bookmarksController);

app.get('*', (req, res) => {
  res.status(404).json('Sorry, page does not exist!');
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));