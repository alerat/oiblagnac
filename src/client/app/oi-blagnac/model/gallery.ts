import { PhotoMensuelleService } from './../services/photo-mensuelle.service';
import { Photo } from './photo';
import { TypeGallery } from './typeGallery';

export class Gallery {
    numero: number;
    nom: string;
    photos: Array<Photo>;
    annee: number;
    type: string;
    constructor ( numero?: number,
        nom?: string,
        photos?: Array<Photo>,
        annee?: number,
        type?: TypeGallery) {
            this.numero =  numero;
            this.nom = nom;
            this.photos = photos;
            this.annee = annee;
            this.type = type;

    }
}
