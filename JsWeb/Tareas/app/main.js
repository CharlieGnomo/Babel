/**
 * Las clases nunca se elevan, por lo quedeben ponerse al principio y en orden
 * 
 * this.defineListeners.bind(this) --> asigna el this que internamente tenga defineListeners, sea el this que le pasamos,
 *  en nuestro caso el this que le pasamos es el this del objeto, de lo contrario seria el documento en sí
 */
class Main {

    constructor() {
        this.user = {
            nombre: localStorage.getItem('nombre')
        };

        this.tarea = ""
        this.aTareas = JSON.parse(localStorage.getItem("tareas")) ? JSON.parse(localStorage.getItem("tareas")) : []; //PARA EVITAR QUE SE DEVUELVA UN NULL EN EL PRIMER CASO
        this.view = {
            btnReg: document.querySelector("#btnRegistrar"),
            iNombre: document.querySelector("#nombre"),
            resultado: document.querySelector("#resultados"),
            iTarea: document.querySelector("#tarea"),
            btnAdd: document.querySelector("#btnAdd"),
            tareas: document.querySelector("#tareas")
        };
        this.view.btnReg.addEventListener("click", this.registrar.bind(this), false);
        this.view.btnAdd.addEventListener("click", this.anhadir.bind(this), false);
        this.mostrarNombre();
        //this.aTareas.length ? this.mostrarTareas() : null
        this.mostrarTareas();
    }


    registrar() {
        this.user.nombre = this.view.iNombre.value;
        localStorage.setItem('nombre', this.user.nombre);
        this.mostrarNombre();
    }

    mostrarNombre() {
        if (this.user.nombre) {
            this.view.resultado.innerHTML = `<p>Hola ${this.user.nombre}</p>`;
            this.view.resultado.classList.toggle("rojo");
        }
    }

    mostrarTareas() {
        if (this.aTareas.length) {
            let lista = "<ul>";
            this.aTareas.forEach(item => lista += `<li>${item}</li>`);
            this.view.tareas.innerHTML = lista;
        }
    }

    anhadir() {
        this.tarea = this.view.iTarea.value;
        this.aTareas.push(this.tarea);
        localStorage.setItem("tareas", JSON.stringify(this.aTareas));
        this.mostrarTareas();
    }

}

(function () {
    document.addEventListener("DOMContentLoaded", () => new Main(), false);
})();