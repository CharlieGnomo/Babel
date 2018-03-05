/**
 * Las clases nunca se elevan, por lo quedeben ponerse al principio y en orden
 * 
 * this.defineListeners.bind(this) --> asigna el this que internamente tenga defineListeners, sea el this que le pasamos,
 *  en nuestro caso el this que le pasamos es el this del objeto, de lo contrario seria el documento en sí
 */
export class Main {

    constructor() {
        console.log();
        this.view = {
            aBtnsMenu: document.querySelectorAll('a'),
            eArticle:document.querySelector('article')
        };
        this.view.aBtnsMenu.forEach(item=>{item.addEventListener("click", this.menuItems.bind(this), false);});
        this.view.eArticle.innerHTML="<h2>INICIO</h2>";
    }


    menuItems(oEv) {
        oEv.preventDefault();
        console.log(`Pulsado ${oEv.target.id}`);
        console.dir(oEv.target.id);
        this.view.eArticle.innerHTML=`<h2>${oEv.target.id}</h2>`;
    }
}