export class ErrorHandler {

  public init(err, req, res, next) {
    const status = err.statusCode || 500;
    if (err.message) {
      res.send(status, err.message);
    } else {
      res.send(status, err);
    }
    next();
  }

  public logErrors(err, req, res, next) {
    const status = err.statusCode || 500;
    console.error(status + ' ' + (err.message ? err.message : err));
    if (err.stack) {
      console.error(err.stack);
    }
    next(err);
  }
}
