const express = require('express');
const controller = require('.././controllers/category');
const passport = require('passport');
const upload = require('./../middleware/upload');
const router = express.Router();

const jwt = passport.authenticate('jwt', {session: false});

router.get('/', jwt, controller.getAll);
router.get('/:id', jwt, controller.getById);
router.delete('/:id', jwt, controller.remove);
router.post('/', jwt, upload.single('image'), controller.create);
router.patch('/:id', jwt, upload.single('image'), controller.update);

module.exports = router;
