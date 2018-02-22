const user = {
    nombre : "Pepe",
    apellido : "Perez",
    edad : 23
};

//user.genero = "H";

//ponemos const para evitar que sobreescribamos el valor de mostrarA quitando así la función.
const mostrarA = data1 => {
    data1.genero = "H";
    console.log(data1);
}

//let clon = Object.assign(user);

mostrarA(user);
/**
 * Para crear una copia exacta de un objeto pero sin tocar el original
 */
mostrarA(Object.assign({},user));
mostrarA(JSON.parse(JSON.stringify(user)));
//mostrarA(clon);

/* JSON.stringify(user); // devuelve el string JSON de un objeto

JSON.parse(string_tipo_JSON); */ //devuelve el objeto a partir de un string JSON



console.log(user);




