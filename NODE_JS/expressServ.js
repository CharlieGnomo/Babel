const express = require('express');
const app = express();

app.use((req,res,next) => {
    /* console.log('use');
    next(); */
    /* return res.send('fallo'); */

    const promise = new Promise((resolve) => {
        resolve('hola');
    })
    promise.then((result) => {
        req.hola = 'hola';
        next();
    })
})

function login(req,res, next){
    comprobarToken(req.headers.token);
    res.status(401).send('Login incorrrect');
}

app.get('/users/:id', (req, res, next) => {
    console.log(req.params.id);
    return res.json({user:req.params.id});
});
app.listen(3000, () => console.log('Escuchando en el puerto 3000'));