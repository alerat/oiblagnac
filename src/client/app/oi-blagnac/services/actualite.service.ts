import { Injectable } from '@angular/core';
import { Actualite } from '../model/actualite';

@Injectable()
export class ActualiteService {

  private dataStore: {
    actualitePhoto: Actualite[];
    actualiteVideo: Actualite[];
  };

  getActualites(): Actualite[] {
    return this.dataStore.actualitePhoto;
  }

  getActualitesVideo(): Actualite[] {
    return this.dataStore.actualiteVideo;
  }
  constructor() {

    const actuPhoto: Actualite[] = [
      new Actualite(
        'La photo du mois de fevrier:',
        'Marée haute',
        undefined,
        'par Corinne Galand',
        './assets/Galand.jpg',
        undefined
      ),
      new Actualite(
        'Prochaines réunions adhérents:',
        undefined,
        '22 janvier 2018 à 12h 45 pièce N023',
        undefined,
        './assets/Banniere.jpg',
        undefined
      ),
      new Actualite(
        'Prochaines réunions vidéo:',
        undefined,
        '29 janvier 2018 à 12h 45 pièce N023',
        undefined,
        './assets/Banniere.jpg',
        undefined
      ),
      new Actualite(
        'Exposition dans le hall des photos du thème :',
        undefined,
        'Chaussures, la galerie est visible via ce lien: Chaussures.',
        undefined,
        './assets/Banniere.jpg',
        undefined
      ),
      new Actualite(
        'Exposition à la cafétéria:',
        undefined,
        `Sur notre sortie sur le thème de la pose longue aux Hospices de France.
          La galerie est visible ici: Hospices de France`,
        undefined,
        './assets/Banniere.jpg',
        undefined
      ),
      new Actualite('Le concours de Fronton:',
        undefined,
        `A la suite de votre vote, le bureau a effectué la sélection finale
          pour tenir compte de la contrainte de 3 photos maximum par auteur.
          Les deux galeries sont visibles en cliquant sur les liens libre et Occitanie.
          Les photos sélectionnées sont en tête des galeries`,
        undefined,
        './assets/Banniere.jpg',
        undefined
      ),
      new Actualite('Le prochain thème porte sur "Le Photo montage".',
        undefined,
        'Nous attendons vos photos pour mi février 2018',
        undefined,
        './assets/Banniere.jpg',
        undefined
      )];

    const actuVideo: Actualite[] = [new Actualite(
      'Rue de l\'abbaye',
      '2017-projet collectif',
      'film d\'animation',
      'réalisation collective',
      undefined,
      'https://www.youtube.com/embed/qFJA9DRWdmo',
    ), new Actualite('Gratuit le dimanche',
      '2017 - projet personnel',
      'Nomination au grand prix du jury aux Rencontres Nationales Vidéo 2017 de Nantes',
      'réalisation Pierre Chanteux',
      undefined,
      'https://www.youtube.com/embed/bKNG0pNcf7M'
    ), new Actualite('Lolbenco',
      '2017 - projet personnel',
      '(une version longue est disponible sur le PC du labo)',
      'réalisation Daniel Mezergues',
      undefined,
      'https://www.youtube.com/embed/S18MVYrctfY'
    ), new Actualite(' Banc public',
      '2016 - projet collectif',
      'Prix spécial du jury aux Rencontres Nationales Vidéo 2016 de Quimper',
      'réalisation Pierre Chanteux',
      undefined,
      'https://www.youtube.com/embed/iMVis3E7sJU'
    ), new Actualite('La chabuleuse aventure de Clémentine',
      '2015 - projet collectif',
      undefined,
      'réalisation Sandrine Garcia',
      undefined,
      'https://www.youtube.com/embed/R2Zqs2a4NPA'
    )];

    this.dataStore = {
      actualitePhoto: actuPhoto,
      actualiteVideo: actuVideo
    };
  }
}
