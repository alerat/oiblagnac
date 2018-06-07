import { Gallery, GalleryModel } from '../base/model/gallery';
import { NextFunction, Request, Response, Router } from 'express';
import { NotFoundHandler } from '../utils/404';
import * as uuid from 'uuid';
import * as mongoDB from '../base/BaseMongoDB';
import { PhotoModel, Photo } from '../base/model/photo';
import * as multer from 'multer';
import * as fs from 'fs';
import * as path from 'path';
import { PhotoM } from '../base/model/photomodel';
const uuidV4 = uuid.v4;
const api = '/api/';
const apiPrivate = api + 'private/';
const data = '../data/';

const router: Router = Router();

router.route('/').get(function(req, res) {
  console.log('route /galleries/');
  Gallery.find({}, function(err, gallery) {
      if (err) {
       res.send(err);
      } else {
        res.json(gallery);
      }
   });
});
router.route('/:numero')
.get(function(req, res) {
  console.log('get route /galleries/' + req.params.numero);
  Gallery.find({'numero': req.params.numero}, function(err, galleries) {
      if (err) {
       res.send(err);
      }
      if (galleries && galleries.length > 0) {
        res.json(galleries[0]);
      } else {
        res.json({});
      }
   });
}).post(function(req, res) {
  console.log('post route /galleries/' + req.params.numero);
  Gallery.createGallery(req, res);
})
.patch(function(req, res) {
  console.log('patch route /galleries/' + req.params.numero);
  Gallery.createGallery(req, res);
});


router.route('/gallery/last')
.get(function(req, res) {
  console.log('post route /test/');
  Gallery.findMaxNumber(function(err, galleries) {
    if (err) {
     res.send(err);
    }
    if (galleries && galleries.length > 0) {
      res.json(galleries[0]);
    } else {
      res.json({});
    }
 });

});
router.route('/:numero/filterPhoto').get(function(req, res) {
  console.log('route /galleries/' + req.params.numero);
  Gallery.find({'numero': req.params.numero}, function(err, galleries) {
      if (err) {
       res.send(err);
      }
      if (galleries && galleries.length > 0) {
        res.json(galleries[0]);
      } else {
        res.json({});
      }
   });
});

router.route('/types/:type').get(function(req, res) {
  console.log('route /gallery/types/' + req.params.type);
  Gallery.findByType(req.params.type, function(err, gallery) {
    if (err) {
      console.log(err);
     res.send(err);
    } else {
      console.log('liste des galleries :' + gallery.length);
      res.json(gallery);
    }
 });
 // req.params.type;
});
router.route('/types/:type/annees').get(function(req, res) {
  console.log('route /gallery/types/' + req.params.type + '/annees');
  Gallery.find({'type': req.params.type}, function(err, gallery) {
    if (err) {
      console.error('err: ' + err);
     res.send(err);
    }
    let listAnnee = [];
    listAnnee = gallery.map(g => g.annee)
          .filter((value, index, self) => self.indexOf(value) === index) ;
    res.json(listAnnee);
 });
 // req.params.type;
});
router.route('/types/:type/annees/:annee').get(function(req, res) {
  console.log('route /gallery/types/' + req.params.type + '/annees/' + req.params.annee);
  Gallery.find({'type': req.params.type, 'annee': req.params.annee}, function(err, gallery) {
    if (err) {
     res.send(err);
    }
    res.json(gallery);
  });
});

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
    const chemin =  req.params.chemin;
    cb(null, chemin);
    },

  filename: function (req, file, cb) {
    Gallery.findOne({'numero': req.params.numero}, function(err, gallery) {
      const p = new Photo();
      p.name = req.query.name;
      p.footer = req.query.footer;
      p.imageUrl = req.params.chemin + req.params.name;
      console.log(p);

      gallery.photos.push( p);
      console.log( gallery.photos);
      gallery.save(function(err2) {
        console.log('retour save');
        if (err) {
          console.log('retour save : ' + err);
        }
      });
    });
    // faire l'enregistrement dans la gallerie
    cb(null, req.params.name);
  }
});


const upload = multer({ storage: storage}).single('photo');

router.route('/:numero/photos/:name').post(validatePhoto, upload,  function(req, res) {
  res.send('image enregistrée');
});

function validatePhoto(req, res, next) {
  Gallery.find({'numero': req.params.numero}, function(err, galleries) {
    const errors = [];
    if (err) {
      console.log(err);
      errors.push(err);
    }
    if (galleries && galleries.length > 0) {
      const nbPhoto = galleries[0].photos.length + 1;
      console.log('nbPhoto : ' + nbPhoto);
      let nomPhoto = '';
      if (nbPhoto < 10) {
        nomPhoto = '0' + nbPhoto  + '.jpg';
      } else {
        nomPhoto =  nbPhoto  + '.jpg';
      }
      req.params.name = nomPhoto;
      let chemin = './assets/gallerie/';
      mkdir(chemin);
      chemin = chemin + galleries[0].nom ;
      mkdir(chemin);
      chemin = chemin + '/' + galleries[0].annee + '/';
      mkdir(chemin);
      req.params.chemin = chemin;
    } else {
      errors.push('pas de gallerie');
    }
    if (errors && errors.length > 0) {
        const response = { errors: [] };
        errors.forEach(function(err2) {
          response.errors.push(err2.msg);
        });
        res.statusCode = 400;
        return res.json(response);
    }
    return next();
 });
 }

 function mkdir(dirPath) {
  try {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    } else {
      console.log('existe deja! ' + dirPath);
    }
  } catch (err) {
    if (err.code !== 'EEXIST') {
      throw err;
    }
  }
}

export const GalleryController: Router = router;
