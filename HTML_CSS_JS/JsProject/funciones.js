function mostrar(data){
        /* console.log(data); */
        var localEdad = 20;
        console.log(nombre);
        if(true){
            var localEdad = 20;
            let localEdad2 = 23;
            const AÑO = 2018;
           /*  AÑO++; */ //ERROR ya que es una constante y no puede modificarse
            console.log(AÑO);
        }
        console.log(localEdad); // Aquí sí lo muestra ya que <<var>> sube la variable al principio de la función ya que el ámbito es la función
        /* console.log(localEdad2); */ //ERROR ya que let mantiene la declaración en el mismo sitio por lo que al declararse dentro del if no lo encuentra fuera
        //console.log(AÑO); ERROR TMBN YA QUE IGUAL QUE ANTES LA DECLARACIÓN ES DENTRO DEL IF
}

//Equivalentes
/* var oDatos = new Object();
var oDatos2 = {}; */
///////////////

var nombre= "Pepe";
var apellidos = "Perez Lopez";
mostrar(nombre, apellidos);

//Equivalentes
var mostrar2 = new Function();
//
var mostrar3 = function(data1, data2){
    console.log(data1,data2);
    //console.log(localEdad); ERROR porque esta variable en concreto es de ámbito local en la función mostrar()
}
///////////////

//ARROW function (ES6)
var mostrarA1 = (data1)=>{ //*
    console.log(data1);
}

var mostrarA1 = data1 => console.log(data1); //* Equivalentes pero esta sólo se pone así en caso de que sea en una línea y tenga un único parámetro

var mostrarA2 = (data1,data2)=>{
    console.log(data1,data2);
}

mostrar3(nombre, apellidos);

