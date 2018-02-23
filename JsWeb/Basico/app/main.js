/**
 * Las clases nunca se elevan, por lo quedeben ponerse al principio y en orden
 * 
 * this.defineListeners.bind(this) --> asigna el this que internamente tenga defineListeners, sea el this que le pasamos,
 *  en nuestro caso el this que le pasamos es el this del objeto, de lo contrario seria el documento en sí
 */
class Main {

    constructor() {
        //document.addEventListener("DOMContentLoaded", () => {this.defineListeners()}, false); ** Equivalente al de abajo
        document.addEventListener("DOMContentLoaded", this.defineListeners.bind(this), false);
    }

    defineListeners() {
        console.log("Documento cargado");
        console.dir(window);
        console.log(this);
        document.querySelector("#btnSaludar").addEventListener("click", this.saludar, false);
        document.querySelector("#btnRegistrar").addEventListener("click", this.registrar, false);
        document.querySelector("#btnGoogle").addEventListener("click", this.irGoogle, false);
    }

    saludar() {
        alert("Hola");
    }

    registrar() {
        let user = window.prompt("Dime tu nombre", );
        alert(`
            Usuario ${user} registrado
        `);
    }

    irGoogle() {
        window.location.href = "https://www.google.es";
    }

}

(function () {
    let oMain = new Main();
})();



