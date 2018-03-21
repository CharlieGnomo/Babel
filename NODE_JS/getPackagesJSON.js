const fs = require('fs');
const util = require('util');

const fsReadDir = util.promisify(fs.readdir);
const getPackageJSON = require('./getPackage');
/* const path = require('path'); */

const FOLDER = '../node_modules';
const _ = require('lodash');

function getListFolders() {
  return fsReadDir(FOLDER);
}

function resolveVersion(carpeta) {
  return getPackageJSON(carpeta)
    .then(pack => pack);
}

function getPackagesFromList(list) {
  const promises = [];
  list.forEach((element) => {
    promises.push(resolveVersion(element));
    /*
        .then((packInfo) => {
            result.push(packInfo);
        }) */
  });
  return Promise.all(promises);
}

function filterPackagesNull(array) {
  return _.filter(array, element => element !== null);
}

function getPackagesJSON() {
  return getListFolders()
    .then(getPackagesFromList)
  /* .then((data) => {
            console.log(data);
        }) */
    .then(filterPackagesNull)
    .then(console.log)
    .catch(console.error);
  /* return fsReadDir(folder,'utf8')
    .then((data) => {
        console.log(data);
        /* return JSON.parse(data);
    }) */
  /* .then(parserData) */
  /* .then(console.log); */
}


/* function parserData(data) {
     return {
        name: data.name,
        description: data.description,
        version: data.version,
        license: data.license
    };
} */

/* function leerFichero(fichero) {
    return new Promise((resolve, reject) => {
        fs.fsReadDir(fichero, 'utf8', (err, resultado) => {
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
