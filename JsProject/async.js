/**
 * Asincronía
 *  -En los eventos del usuario
 *  -Llamadas al servidor
 *  -Temporización --> provocar la asincronía aposta
 *      *setInterval() --> PAR: callback , tiempo --> se repite
 *      *setTimeout() --> PAR: callback , tiempo --> NO BLOQUEANTE
 * 
 * 
 * Promise
 *  then --> recoger datos en caso de bien
 *  catch --> recoger datos en caso de mal
 */

//setInterval();
let x = 12;
setTimeout(() => {
    console.log("HOLA ASÍNCRONO");
    x = 2 * x;
},
    3000);
console.log(x);

//EN ES6
const consulta = function(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {resolve("Todo ok")},2000);
    });
}

let resultados = 
consulta()
.then((res)=>{console.log(res)});