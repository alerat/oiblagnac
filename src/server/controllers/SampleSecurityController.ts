import {NotFoundHandler} from '../utils/404';
import {JsonParser} from '../utils/json-parser';
import * as uuid from 'uuid';
import {Request, Response, Router} from 'express';

const uuidV4 = uuid.v4;

const api = '/api/';
const apiPrivate = api + 'private/';
const data = '../data/';

const router: Router = Router();

router.post(api + 'connect', connectUserXSRF);
router.get(apiPrivate + 'formation/:id', getFormation);
router.post(apiPrivate + 'formations', postSecuredFormation);
router.get(apiPrivate + 'formations', getFormations);
// router.post(apiPrivate + 'logout', logout);

router.get(api + '*', NotFoundHandler.notFoundMiddleware);

function connectUserXSRF(req: Request, res: Response): void {
  _generateXSRFToken(req, res);
  const user = JsonParser.getJsonFromFile(data + 'auth.json');
  req.session.connectedUser = user;
  res.send(user);
}

function postSecuredFormation(req: Request, res: Response): void {
  if (req.session.connectedUser) {
    // Nous devons avoir le header XSRF positionné par Angular (DefaultXSRFStrategy - HEADER_NAME)
    const headerXsrf = req.header('X-CSRF-TOKEN');
    const tokenSessionXsrf = req.session.tokenXsrf;

    // Le token en session doit être le même que le header fourni
    if (headerXsrf === tokenSessionXsrf) {
      // On génère un nouveau token
      _generateXSRFToken(req, res);
      res.status(201).send({});
    } else {
      res.status(403).send({});
    }
  } else {
    res.status(401).send({});
  }
}

function getFormation(req: Request, res: Response): void {
  const id = req.params.id;
  const msg: string = 'customer id ' + id + ' not found. ';
  try {
    const json = JsonParser.getJsonFromFile(data + 'formations.json');
    const customer = json.filter(function (c) {
      return c.id === parseInt(id, 10);
    });
    if (customer && customer[0]) {
      res.send(customer[0]);
    } else {
      NotFoundHandler.send404(req, res, msg);
    }
  } catch (ex) {
    NotFoundHandler.send404(req, res, msg + ex.message);
  }
}

function getFormations(req: Request, res: Response): void {
  const msg = 'Formations not found. ';
  if (req.session.connectedUser) {
    try {
      const json: string = JsonParser.getJsonFromFile(data + 'formations.json');
      if (json) {
        res.send(json);
      } else {
        NotFoundHandler.send404(req, res, msg);
      }
    } catch (ex) {
      NotFoundHandler.send404(req, res, msg + ex.message);
    }
  } else {
    res.status(401).send();
  }
}

/*function logout(req: Request, res: Response) {
  req.session.destroy();
  res.send({});
}*/

function _generateXSRFToken(req: Request, res: Response) {
  const tokenXsrf = uuidV4();
  req.session.tokenXsrf = tokenXsrf;
  // Le nom du cookie récupéré par Angular (DefaultXSRFStrategy - COOKIE_NAME)
  res.cookie('CSRF-TOKEN', tokenXsrf, {
    httpOnly: false,
    path: '/'
  });
}

export const SampleSecurityController: Router = router;
