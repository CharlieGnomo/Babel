const express = require('express');

const router = express.Router();
const packagesCtrl = require('../controller/packages.controller');
const libCache = require('../lib/cache');

function getCachePackage(req, res, next) {
  libCache.getCache(req.params.name)
    .then((pack) => {
      if (pack) {
        console.log('cache');
        return res.json(pack);
      }
      return next();
    });
}

/* function setPackage(req,res, next) {
   libCache.
} */

router.route('/')
  .get(packagesCtrl.list)
  .post(packagesCtrl.create);

router.route('/:name')
  .get(getCachePackage, packagesCtrl.get);

module.exports = router;
