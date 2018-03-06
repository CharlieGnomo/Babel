

interface FullName {
    nombre: string;
    apellidos: string;
}

class FullNameCl {
    constructor(public nombre: string, public apellidos: string) {}
}

/* class User implements FullName { */
class User {
     /* numUsers  */

   /*  public nombre: string;
    public apellidos: string;
    protected edad: number;
    private genero: any;

constructor(nombre, apellidos, edad, genero) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.genero = genero;
} */

/**
    ESTA FORMA EQUIVALE A LA DE ARRIBA
                  |
                  V
*/
/* constructor(public nombre: string, public apellidos: string, private edad: number, private genero: any) {} */
 constructor(
    public fullName: FullName,
    public fullNameCl: FullNameCl,
    private edad: number | string, /**Puede ser de tipo number o string*/
    private genero: any,
    private cursos: string[],
    private aficiones: Array<string>
) {}




/* saludar() {
    console.log(`Hola, soy ${this.nombre} y ya somos muchos
        `);
}
 } */

 saludar() {
    console.log(`Hola, soy ${this.fullName.nombre} y ya somos muchos
        `);
}
 }

/* let oUser1 = new User('JUAN', 'LOPEZ', 33, 'H'); */
/* let oUser1 = new User({nombre: 'Juan', apellidos: 'Lopez'}, 33, 'H'); */
/* let oUser1 = new User({nombre: 'Juan', apellidos: 'Lopez'}, {nombre: 'Juan', apellidos: 'Lopez'}, 33, 'H'); */
let oUser1 = new User(new FullNameCl('Juan', 'Lopez'), {nombre: 'Juan', apellidos: 'Lopez'}, 33, 'H', [ ], []);
oUser1.saludar();
console.log(oUser1);


/* class Alumno extends User {
    curso;
    constructor(nombre, apellidos, edad, genero, curso) {
        super(nombre, apellidos, edad, genero);
        this.curso = curso;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y ya somos muchos alumnos
        `);
    }
} */
