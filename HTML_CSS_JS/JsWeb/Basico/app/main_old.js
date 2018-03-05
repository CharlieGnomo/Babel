/**
 * La etiqueta script puede ponerse tanto abajo como arriba, lo único que si es
 * arriba es necesario encerrar el código js dentro de un evento 
 * que salta cuando el dom se ha construido por completo.
 * 
 * Eventos al cargar la página
 *  1. document -> DOMContentLoaded -->DOM
 *  2. window -> load --> BOM
 * 
 * Para lanzar al ocurrir un evento determinado--> addEventListener
 * 
 */

(function(){
    document.addEventListener("DOMContentLoaded", main, false);
    /* let x; */ // Al iniciarlo dentro de la función anónima, la variable ya no es global

})();

function main(){
    console.log("Documento cargado");
    console.dir(window);
    /* document.querySelector(""); //Accede al primer elemento encontrado con dicho selector
    document.querySelectorAll(""); */ //Accede a todos los elementos encontrados con dicho selector
    document.querySelector("#btnSaludar").addEventListener("click", saludar, false);
    document.querySelector("#btnRegistrar").addEventListener("click", registrar, false);
    document.querySelector("#btnGoogle").addEventListener("click", irGoogle, false);
    //console.log vs console.dir
    
};

function saludar(){
    alert("Hola");//Si no se pone window. el navegador sobreentiende que se refiere al BOM
}

function registrar(){
    let user = window.prompt("Dime tu nombre",);
    alert(`
        Usuario ${user} registrado
    `);
}

function irGoogle(){
    /* console.log(window.location.href); */
    window.location.href = "https://www.google.es";
}

/* (() =>{

})(); */

