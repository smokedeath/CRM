const Order = require('../models/Order');
const errorHandler = require('../utils/errorHandler');''

module.exports.overview = function (req, res) {
    
};

module.exports.analytics = function (req, res) {
    res.status(200).json({
        analytics: 'from controller'
    });
};
