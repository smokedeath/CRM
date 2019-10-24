const express = require('express');
const controller = require('.././controllers/analytics');
const passport = require('passport');
const router = express.Router();

const jwt = passport.authenticate('jwt', {session: false});

router.get('/overview', jwt, controller.overview);
router.get('/analytics', jwt, controller.analytics);

module.exports = router;
