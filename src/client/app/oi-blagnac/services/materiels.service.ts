import { Injectable } from '@angular/core';
import { Materiel } from '../model/materiel';

@Injectable()
export class MaterielsService {
  materiels: Materiel[];
  constructor() {
    this.materiels = [
      new Materiel('de deux agrandisseurs', false),
      new Materiel('d\'un boitier moyen format avec ses optiques', true),
      new Materiel('d\'une chambre 4x5 Inches, de deux optiques et du trépied', true),
      new Materiel('d\'un video projecteur', true),
      new Materiel('d\'un PC et son écran DELL U2711 calibré', true),
      new Materiel('d\'une imprimante EPSON SC P 5000 profilée pour le papier Hahnemuhle 260 Photo Luster', true),
      new Materiel('d\'un scanner', false),
      new Materiel('d\'un camescope', true)
    ];
  }

  getMateriels(): Materiel[] {
    return this.materiels;
  }

}
