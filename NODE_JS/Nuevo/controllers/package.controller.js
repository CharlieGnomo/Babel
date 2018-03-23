const modelPack = require('../models/package.model');

function getPacks() {
    return modelPack.getPacks();
}

function createPack(pkg) {
    return modelPack.createPack(pkg);
}

module.exports = {
    getPacks,
    createPack,
}