const db = require('../db.js');
const APIError = require('../lib/apierror');
const packageModel = require('../models/packages.model');

function list(req, res, next) {
  return packageModel.list()
    .then(data => res.json(data))
    .catch(next);
}

function get(req, res, next) {
  return packageModel.get(req.params.name)
    .then(res.json)
    .catch(next);
  /* return res.json(_.find(db, {'name': req.params.name})); */
}

function create(req, res, next) {
  if (!req.body.name) {
    const error = new APIError('no name');
    return next(error);
  }
  db.push(req.body);
  return res.json(req.body);
}

module.exports = {
  list,
  get,
  create,
};
