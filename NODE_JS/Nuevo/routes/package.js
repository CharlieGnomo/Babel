var express = require('express');
var router = express.Router();

const contrPack = require('../controllers/package.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
    contrPack.getPacks()
    .then((data) => {
        return res.json(data);
    })
    .catch(next);
});

router.post('/', function(req, res, next) {
    contrPack.createPack(req.body)
    .then((data) => {
        return res.json(data);
    })
    .catch(next);
});

module.exports = router;
