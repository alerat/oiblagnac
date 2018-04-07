
const mongoose = require('mongoose');

import * as mongoDB from '../BaseMongoDB';
mongoDB.connexion();

import {Schema, Model, Document, model} from 'mongoose';


export interface IPhoto extends Document {
    name: string;
    footer: string;
    imageUrl: string;
}

export interface IPhotoModel {
    findAll(callback: Function): void;
}

const photoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    footer: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});

photoSchema.static('findAll', (callback: Function) => {
    Photo.find({}, callback);
});

export type PhotoModel = Model<IPhoto> & IPhotoModel & IPhoto;

export const Photo: PhotoModel = <PhotoModel>model<IPhoto>('', photoSchema);
