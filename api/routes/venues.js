const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { Venue } = require('../models/venues');


router.get('/', async (req, res) => {
  console.log('called venue /');
  const venues = await Venue.find().sort('name');
  res.send(venues);
});

router.get('/:name', async (req, res) => {
  console.log('called venue by name. name is' + req.params.name);
  const venue = await Venue.find({ "name": req.params.name });

  //FIXIT:: Implement error handling
  if (!venue) return res.status(404).send({'message': 'The venue with the given name was not found.'});
  else res.send(venue);
});

router.post('/', async (req, res) => {
  //TODO:: VALIDATION
  let venue = new Venue({
    name: req.body.name,
    rating: req.body.rating
  });

  venue = await venue.save();

  res.send(venue);
});

module.exports = router;