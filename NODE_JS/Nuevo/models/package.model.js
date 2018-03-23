const mongoose = require('mongoose');

const Package = mongoose.model('Package',
    {
        name: String,
        description: String,
        version: String,
        license: String,
    },
    /* {strict: false}  */// determina que se pueden guardar todos los campos puestos en el modelo mas los que metamos extra
                    //si es true se ajusta estrictamente al esquema del modelo
);

function getPacks() {
    return Package.find({});
    /* return new Promise((res) => {
        const dev = Package.find({});
        res(dev);
    }); */
}

function createPack(pkg) {
    const packageModel = new Package(pkg);
    return packageModel.save();
}

module.exports = {
    getPacks,
    createPack,
}