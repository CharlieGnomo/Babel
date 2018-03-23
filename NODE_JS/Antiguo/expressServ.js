const express = require('express');

const app = express();
const bodyParser = require('body-parser');
/* const httpStatus = require('http-status'); */

const packagesRouter = require('./routes/packages.route');

app.use(bodyParser.json({ limit: '50mb' }));// aqui no hace falta poner un next ya que
// internamente al coger un middleware externo ya lo incorpora

/* app.use((req,res,next) => {
    /* console.log('use');
    next(); */
/* return res.send('fallo');

const promise = new Promise((resolve) => {
    resolve('hola');
})
promise.then((result) => {
    req.hola = 'hola';
    next();
})
}) */

/* function login(req,res, next){
    comprobarToken(req.headers.token);
    res.status(401).send('Login incorrrect');
} */

/* app.get('/users/:id', (req, res, next) => {
    console.log(req.params.id);
    return res.json({user:req.params.id});
}); */

app.use('/packages', packagesRouter);

/* app.get('/packages/', (req, res, next) => {
    return res.json(db);
});

app.get('/packages/:name', (req, res, next) => {
    const name = req.params.name;
    const dev = _.find(db, { 'name': name });
    return res.json(dev);
});
 */
/**
 * Añadir un paquete más en la bd
 */
/* app.post('/packages', (req, res, next) => {
    /* const name = req.body.name;
    const info = req.body.info;
    const vers = req.body.vers;
    const license = req.body.license;
    const obj = req.body;
    const dev = _.find(db, { 'name': name });
    if(!req.body.name){
        const error = new APIError('no name', httpStatus.BAD_REQUEST);
        return next(error);
        /* return res.status(httpStatus.BAD_REQUEST).json({error: 'No name'});
    }
    db.push(req.body);
    return res.json(req.body);
});

app.use((error,req,res,next) => {
    if(error instanceof APIError){
        res.status(error.status).json({msg: error.msg});
    }
    return next(error);
}) */

app.listen(3000, () => console.log('Escuchando en el puerto 3000'));
