
import {Schema, Model, Document, model} from 'mongoose';
import { PhotoM } from './photomodel';
import { IPhoto } from './photo';


export interface IGallery extends Document {
    numero: Number;
    nom: String;
    photos:  [ IPhoto ];
    annee: Number;
    type: String;
}

export interface IGalleryModel {
    createGallery(req, res): void;
    findAll(callback: Function): void;
    findMaxNumber(callback: Function): void;
}

const gallerySchema = new Schema({
    numero: {
        type: Number,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    photos: {
        type: [Schema.Types.Photo],
        required: true
    },
    annee: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

gallerySchema.static('findAll', (callback: Function) => {
    Gallery.find({}, callback);
});
gallerySchema.static('findMaxNumber', ( callback: Function) => {
    Gallery.find({}).sort({numero : -1}).limit(1).exec(callback);
});

gallerySchema.static('findByType', (type, callback: Function) => {
    Gallery.find({'type': type}).sort({numero : -1}).exec(callback);
});

gallerySchema.static('createGallery', (req, res) => {
    Gallery.findOne({'numero': req.params.numero}, function(err, gallery) {
    if (err) {
     res.send(err);
    }
    if (!gallery) {
      gallery = new Gallery();
    }
    console.log('gallery: ' + gallery);
    gallery.numero = req.params.numero;
    gallery.nom = req.body.nom;
    gallery.photos = req.body.photos;
    gallery.annee = req.body.annee;
    gallery.type = req.body.type;
    gallery.save(function(err2) {
      console.log('retour save');
      if (err) {
        console.log('retour save : ' + err);
      res.send(err2);
      } else {
        res.json('ok');
      }
    });
 });
});

export type GalleryModel = Model<IGallery> & IGalleryModel & IGallery;

export const Gallery: GalleryModel = <GalleryModel>model<IGallery>('Gallery', gallerySchema);
