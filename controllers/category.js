module.exports.getAll = function (req, res) {
    res.status(200).json({
        getAll: 'from controller'
    });
};

module.exports.getById = function (req, res) {
    res.status(200).json({
        getById: 'from controller'
    });
};

module.exports.remove = function (req, res) {
    res.status(200).json({
        remove: 'from controller'
    });
};

module.exports.create = function (req, res) {
    res.status(200).json({
        create: 'from controller'
    });
};

module.exports.update = function (req, res) {
    res.status(200).json({
        update: 'from controller'
    });
};
