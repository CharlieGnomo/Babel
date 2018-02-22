let datos = new Array(13,34,35,23,34);
let nombres = ["Pepe", "Juan","Lorena","Lucas"];

console.log(datos);
console.log(nombres);

//datos.push(65);
console.log(datos);

//Procesamiento imperativo

let sum = 0;

/* for (let i = 0; i < datos.length; i++) {
    sum += datos[i];
} */ //*1

//equivalente al for de arriba *1
datos.forEach(i => sum += i);

//La función map permite modificar el array mapeándolo defieniendo una determinada función
let mapDatos = datos.map(item => ++item); // Importante ++item para que sume antes de devolver, sino devuelve lo mismo

let filterDatos = datos.filter(item => {return item%2==0;});

console.log(mapDatos);
console.log(filterDatos);
console.log(sum);