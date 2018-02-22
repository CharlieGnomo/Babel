const user = {
    nombre : "Pepe",
    apellido : "Perez",
    edad : 23,
    genero: "H",
    saludar : function(){
        console.log(`HOLA, SOY ${this.nombre}
        `);
    }
};

//Función constructora
function User (nombre, apellidos, edad, genero){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.genero = genero;
    ++User.prototype.numUsers;
}

//guardamos los métodos dentro del prototipo del objeto para evitar crear la función una y otra vez
User.prototype.saludar = function(){
    console.log(`Hola, soy ${this.nombre} y ya somos ${this.numUsers}
    `);
}

User.prototype.numUsers = 0;

var mostrar = data => console.log(this);

//mostrar();
//console.log(this);

user.saludar();

oUser1 = new User("JUAN","LOPEZ",33,"H");
oUser1.saludar();

oUser2 = new User("RAQUEL","LOPEZ",31,"M");
oUser2.saludar();



/**
 * En JS hay 4 métodos de invocación
 * 
 * mostrar()
 * console.log()
 * new User()
 * call/apply
 * 
 */