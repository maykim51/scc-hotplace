const mongoose = require('mongoose');
const express = require('express');
const app = express();
const venues = require('./routes/venues');

mongoose.connect('mongodb://localhost/scc-hotplace')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/v1/venues', venues);

app.listen(3000, () => console.log('Listening on port 3000...'));