const fs = require('fs');
const util = require('util');
const fs_readFile = util.promisify(fs.readFile);
const path = require('path');


function getPackageJSON(nameFolder) {
    const file = `../node_modules/${nameFolder}/package.json`;
    return fs_readFile(file,'utf8')
    .then((data) => {
        /* console.log(data); */
        return JSON.parse(data);
    })
    .then(parserData)
    .then(console.log);
}

function parserData(data){
    return {
        name: data.name,
        description: data.description,
        version: data.version,
        license: data.license
    };
}

module.exports = getPackageJSON;

/* function leerFichero(fichero) {
    return new Promise((resolve, reject) => {
        fs.fs_readFile(fichero, 'utf8', (err, resultado) => {
            if (err) {
                return reject(err);
            }
            const arr = resultado.split(',');
            return resolve(arr);
        });
    });
}

leerFichero(file)
.then(console.log)
.catch(console.error); */