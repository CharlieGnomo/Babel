const httpStatus = require('http-status');

class ExtendableError extends Error {
  constructor(msg, status) {
    super(msg);
    this.msg = msg;
    this.status = status;
    Error.captureStackTrace(this, this.constructor.name);
  }
}

class APIError extends ExtendableError {
  constructor(msg, status = httpStatus.INTERNAL_SERVER_ERROR) {
    super(msg, status);
  }
}


module.exports = APIError;
