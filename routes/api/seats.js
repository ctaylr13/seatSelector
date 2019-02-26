const express = require('express');
const router = express.Router();

// Seat Model 
const Seat = require("../../models/Seat");

// @route GET api/seats
// @desc GET All seats 
// @access Public 
router.get('/', (req, res) => {
    Seat.find()
        .sort({ row: 1})
        .then(seats => res.json(seats))
});

// @route POST api/seats
// @desc create a seat 
// @access Public 
router.post('/', (req, res) => {
    const newSeat = new Seat({
        seat: req.body.seat,
        row: req.body.row,
        class: req.body.class,
        occupied: req.body.occupied
    });

    newSeat.save().then(seat => res.json(seat));
});

module.exports = router; 