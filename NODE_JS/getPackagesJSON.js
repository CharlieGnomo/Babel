const fs = require('fs');
const util = require('util');
const fs_readDir = util.promisify(fs.readdir);
const getPackageJSON = require('./getPackage');
const path = require('path');
const folder = '../node_modules';

function getPackagesJSON() {
    return getListFolders()
    .then(getPackagesFromList)
    .then(getPackageJSON)
    .then((data) => {
        console.log(data);
    });
    /* return fs_readDir(folder,'utf8')
    .then((data) => {
        console.log(data);
        /* return JSON.parse(data);
    }) */
    /* .then(parserData) */
    /* .then(console.log); */
}

function getPackagesFromList(list) {
    console.log(list);
    const result = [];
    list.forEach(element => {
        getPackageJSON(element,i)
        .then((packInfo) => {
            result.push(packInfo);
            count = i;
        })
    });
    if(count === list.length){
        return result;
    }
}

function getListFolders() {
    return fs_readDir(folder);
}

function parserData(data){
    /* return {
        name: data.name,
        description: data.description,
        version: data.version,
        license: data.license
    }; */
}

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