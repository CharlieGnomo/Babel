/*
    Tipos elementales de JS son 
        string
        number
        boolean

    Otros tipos  
        undefined (null)
        Object (null) *
            Arrays *
            String *
            Number *
            Boolean *
            Function
            Date
            Math
            JSON
            RegEx
            Error

            *Van en mayúscula porque son funciones constructoras de objetos
*/

var nombreAlumno =  "Pepe";
var oNombreAlumno = new String('Pepe');
var edad = 23;
var oEdadAlumno = new Number(23);
var isAlumno = true;
var oIsAlumno = new Boolean(true);

console.log('Hola '+nombreAlumno.toLowerCase());
console.log(typeof nombreAlumno);
console.log(typeof edad);
console.log(typeof isAlumno);
console.log(oNombreAlumno);
console.log(oEdadAlumno);
console.log(oIsAlumno);