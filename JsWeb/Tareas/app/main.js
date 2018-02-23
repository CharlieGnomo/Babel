/**
 * Las clases nunca se elevan, por lo quedeben ponerse al principio y en orden
 * 
 * this.defineListeners.bind(this) --> asigna el this que internamente tenga defineListeners, sea el this que le pasamos,
 *  en nuestro caso el this que le pasamos es el this del objeto, de lo contrario seria el documento en sí
 */
class Main {

    constructor() {
        this.user = {
            nombre: ""
        };

        this.tarea = ""
        this.aTareas = [];
        this.view = {
            btnReg: document.querySelector("#btnRegistrar"),
            iNombre: document.querySelector("#nombre"),
            resultado: document.querySelector("#resultados"),
            iTarea: document.querySelector("#tarea"),
            btnAdd: document.querySelector("#btnAdd"),
            tareas: document.querySelector("#tareas")
        };
        this.view.btnReg.addEventListener("click", this.registrar.bind(this), false);
        this.view.btnAdd.addEventListener("click", this.anhadir.bind(this),false);
    }

    registrar() {
        this.user.nombre = this.view.iNombre.value;
        this.view.resultado.innerHTML = `<p>Hola ${this.user.nombre}</p>`;
        this.view.resultado.classList.toggle("rojo");
    }

    anhadir(){
        this.tarea = this.view.iTarea.value;
        this.aTareas.push(this.tarea);
        let lista = "<ul>";
        this.aTareas.forEach(item => lista += `<li>${item}</li>`);
        this.view.tareas.innerHTML = lista;
    }

}

(function () {
    document.addEventListener("DOMContentLoaded", () => new Main(), false);
})();