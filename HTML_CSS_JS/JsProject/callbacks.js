//CALLBACK es una función que se pasa por parámetro

function main(mostrar){
    const user = {
        nombre : "Pepe",
        apellido : "Perez",
        edad : 23
    };
    //Salida usando template string
    mostrar(`
        El usuario es 
        ${user.nombre} ${user.apellido}
        `);
}

//Con parámetros por defecto
function enMayusculas(data = "No sé tu nombre"){
    //typeof data === string ? data : "No sé tu nombre";
    console.log(data.toUpperCase());
}

function enMinusculas(data){
    console.log(data.toLowerCase());
}

/* main(enMayusculas);
main(enMinusculas); */

//Combinación de función directamente como callback y función tipo ARROW
main(data => console.log(data.toUpperCase()));