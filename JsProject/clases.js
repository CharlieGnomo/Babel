/**
 * Solo en ES6
 * Esto es de "mentirijilla"
 */

 class User{
     /* numUsers  */
     constructor (nombre, apellidos, edad, genero){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.genero = genero;
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre} y ya somos muchos 
        `);
    }
 }

oUser1 = new User("JUAN","LOPEZ",33,"H");
oUser1.saludar();
console.log(oUser1);

class Alumno extends User{
    constructor(nombre, apellidos,edad, genero, curso){
        super(nombre, apellidos,edad, genero);
        this.curso = curso;
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre} y ya somos muchos alumnos
        `);
    }
}

alumno1 = new Alumno("Julio", "Salinas",20,"H","Tercero");
alumno1.notas = [9,2,3,7,8];
alumno1.saludar();
console.log(alumno1);

alumno2 = new Alumno("Fer", "Salinas",12,"H","Quinto");
alumno2.notas = [4,2,2,2,1];
alumno2.saludar();
console.log(alumno2);