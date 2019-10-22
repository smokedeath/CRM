const express = require('express');
const controller = require('.././controllers/category');
const passport = require('passport');
const router = express.Router();

const jwt = passport.authenticate('jwt', {session: false});

router.get('/', jwt, controller.getAll);
router.get('/:id', jwt, controller.getById);
router.delete('/:id', jwt, controller.remove);
router.post('/', jwt, controller.create);
router.patch('/:id', jwt, controller.update);

module.exports = router;
