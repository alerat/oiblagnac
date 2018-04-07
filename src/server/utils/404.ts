import { NextFunction, Request, Response } from 'express';

export class NotFoundHandler {

  private static api = '/api/';

  static send404(req: Request, res: Response, description: string): void {
    const data = {
      status: 404,
      message: 'Not Found',
      description: description,
      url: req.url
    };
    res.status(404).send(data).end();
  }

  static notFoundMiddleware(req: Request, res: Response, next: NextFunction): void {
    NotFoundHandler.send404(req, res, 'API endpoint not found');
  }
}
