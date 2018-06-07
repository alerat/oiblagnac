import {Model, model, Schema} from 'mongoose';

// ------------------------------------- Photo Model
export interface IPhoto {
  label: string;
  author: string;
  idFlickr: number;
}

const PhotoSchema = new Schema({
  label: {
    type: String
  },
  author: {
    type: String
  },
  idFlickr: {
    type: Number
  }
});

// ------------------------------------- Gallery Model
export interface IGallery {
  label: string;
  year: number;
  photos: Array<IPhoto>;
}

const GallerySchema = new Schema({
  label: {
    type: String
  },
  year: {
    type: Number
  },
  photos: {
    type: [PhotoSchema]
  }
});


export type PhotoPOModel = Model<IPhoto>;
export type GalleryPOModel = Model<IGallery>;

export const PhotoPO: PhotoPOModel = <PhotoPOModel>model<IPhoto>('Photo', PhotoSchema);
export const GalleryPO: GalleryPOModel = <GalleryPOModel>model<IGallery>('NewGallery', GallerySchema);
