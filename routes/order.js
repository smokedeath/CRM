const express = require('express');
const controller = require('.././controllers/order');
const router = express.Router();
const passport = require('passport');

const jwt = passport.authenticate('jwt', {session: false});


router.get('/', jwt, controller.getAll);
router.post('/', jwt, controller.create);

module.exports = router;
