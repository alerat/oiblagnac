import {PhotoModel} from './photo.model';

export class GalleryModel {

  private _label: string;
  private _year: number;
  private photos: Array<PhotoModel>;

  get label(): string {
    return this._label;
  }

  get year(): number {
    return this._year;
  }


  set label(value: string) {
    this._label = value;
  }

  set year(value: number) {
    this._year = value;
  }
}
