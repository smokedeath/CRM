const express = require('express');
const controller = require('.././controllers/position');
const router = express.Router();
const passport = require('passport');

const jwt = passport.authenticate('jwt', {session: false});


router.get('/:category', jwt, controller.getByCategoryId);
router.post('/', jwt, controller.create);
router.patch('/:id', jwt, controller.update);
router.delete('/:id', jwt, controller.remove);

module.exports = router;
