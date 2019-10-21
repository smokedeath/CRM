module.exports.getByCategoryId = function (req, res) {
    res.status(200).json({
        getByCategoryId: 'from controller'
    });
};

module.exports.create = function (req, res) {
    res.status(200).json({
        create: 'from controller'
    });
};

module.exports.remove = function (req, res) {
    res.status(200).json({
        remove: 'from controller'
    });
};

module.exports.update = function (req, res) {
    res.status(200).json({
        update: 'from controller'
    });
};
