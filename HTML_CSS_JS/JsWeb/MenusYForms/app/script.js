function main(){
    /* oFormulario = {
        oDatos : {},

        recogeDatos: function(oE){
            this.getTextos();
            this.getRadioButtons();
            this.getCheckBox();
            this.getSelectOptions();
            this.escribeDatos();
            oE.preventDefault();
        }
    };

    document.getElementById("submit").onclick = oFormulario.recogeDatos.bind(oFormulario); */

    this.aLibros = [];
    //fetch devuelve una promesa --> then si la promesa se cumple y catch en caso de error.
    fetch(url)
    .then((response => {
        return response.json();
        //.blow() es otra opción pero no equivalente
    })).then((response) => {
        //aquí se recibe la promesa enviada por el primer then en formato JSON
        response.items.array.forEach(element => {
            this.aLibros.push(element.volumeInfo.title);
        });
    });
}

document.addEventListener("DOMContentLoaded",main,false);