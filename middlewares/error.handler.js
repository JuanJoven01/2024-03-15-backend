function errorLogger (error, req, res, next) {
    console.error(error.stack, 'is this the error');
    
    next(error);
    }

function boomErrorHandler (error, req, res, next) {
  if (error.isBoom) {
    const { output } = error;
    res.status(output.statusCode).json(output.payload);
  }else{
  next(error);
  }
}

function errorHandler (error, req, res, next) {
  res.status(500).json({ 
        message: error.message,
        stack: error.stack
    });
}

module.exports = {errorHandler, errorLogger, boomErrorHandler};