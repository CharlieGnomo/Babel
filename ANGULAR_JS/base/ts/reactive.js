var Rx = require('rxjs/Rx')

/* import * as Rx from 'rxjs/Rx'; //Otra forma de hacerlo*/
let arr = [1, 2, 3, 4, 5, 6];

const observable = Rx.Observable.from(arr).map(x => x * x).filter(x => x>15);

/* const observador = Rx.Observable.create(
  function onNext(x) {
    console.log('Next: ', x)
  },
  function onError(err) {
    console.error(err)
  },
  function onCompleted() {
    consle.log('Completed')
  }
); */

//el observador es el que se suscribe al observable
observable.subscribe(function onNext(x) {
    console.log('Next: ', x)
  },
  function onError(err) {
    console.error(err)
  },
  function onCompleted() {
    console.log('Completed')
  });
