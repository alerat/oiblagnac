'use strict';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as compress from 'compression';
import * as session from 'express-session';
import * as logger from 'morgan';
import * as expressValidator from 'express-validator';
import {ErrorHandler} from './utils/ErrorHandler';
import {SampleSecurityController} from './controllers/SampleSecurityController';
import {GalleryController} from './controllers/GalleryController';
import * as BaseMongoDB from './base/BaseMongoDB';
import {GalleriesController} from './controllers/galleries.controller';

const errorHandler = new ErrorHandler();
BaseMongoDB.connexionDatabase();

const app = express();
const port = process.env.PORT || 8080;

const environment = process.env.NODE_ENV;
const api = '/api/';
const apiPrivate = api + 'private/';
const apiPublic = api + 'public/';

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(compress());
app.use(logger('dev'));
app.use(errorHandler.init);
app.use(session({
  cookie: {secure: true},
  saveUninitialized: false,
  resave: false,
  secret: 'secure label for security'
}));

app.use(api + 'galleries', GalleryController);
app.use('/sample', SampleSecurityController);
app.use(apiPublic + 'galleries', GalleriesController);

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

app.get('/ping', function (req, res, next) {
  console.log(req.body);
  res.send('pong');
});
switch (environment) {
  case 'production':
    console.log('prod node');
    app.use(express.static('./dist/'));
    app.use('/*', express.static('./dist/index.html'));
    break;
  default:
    console.log('dev node');
}


app.listen(port, function () {
  console.log('Express server listening on port ' + port);
  console.log('env = ' + app.get('env') +
    '\n__dirname = ' + __dirname +
    '\nprocess.cwd = ' + process.cwd());
});



