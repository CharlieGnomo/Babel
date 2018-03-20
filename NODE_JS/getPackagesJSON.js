const fs = require('fs');
const util = require('util');
const fs_readDir = util.promisify(fs.readdir);
const getPackageJSON = require('./getPackage');
const path = require('path');
const folder = '../node_modules';
const _ = require('lodash');

function getPackagesJSON() {
    return getListFolders()
        .then(getPackagesFromList)
        /* .then((data) => {
            console.log(data);
        }) */
        .then(filterPackagesNull)
        .then(console.log)
        .catch(console.error);
    /* return fs_readDir(folder,'utf8')
    .then((data) => {
        console.log(data);
        /* return JSON.parse(data);
    }) */
    /* .then(parserData) */
    /* .then(console.log); */
}

function filterPackagesNull(array) {
    return _.filter(array, (element) => element !== null)
}

function getListFolders() {
    return fs_readDir(folder);
}

function getPackagesFromList(list) {
    const promises = [];
    list.forEach(element => {
        promises.push(resolveVersion(element));
        /* 
        .then((packInfo) => {
            result.push(packInfo);
        }) */
    });
    return Promise.all(promises);
}

function resolveVersion(folder) {
    return getPackageJSON(folder)
    .then((package) => {
        return _.get(package, 'version');
    })
}

/*function parserData(data) {
     return {
        name: data.name,
        description: data.description,
        version: data.version,
        license: data.license
    }; 
}*/

/* function leerFichero(fichero) {
    return new Promise((resolve, reject) => {
        fs.fs_readDir(fichero, 'utf8', (err, resultado) => {
            if (err) {
                return reject(err);
            }
            const arr = resultado.split(',');
            return resolve(arr);
        });
    });
}



leerFichero(folder)
.then(console.log)
.catch(console.error); */
getPackagesJSON();