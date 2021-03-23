export class DishModel {
  private _name: string;
  private _calories: number;
  private _price: number;
  private _imageUrl: string;

  constructor(name: string, calories: number, price: number, imageUrl: string) {
    this._name = name;
    this._calories = calories;
    this._price = price;
    this._imageUrl = imageUrl;
  }

  get name() {
    return this._name;
  }

  get imageUrl() {
    return this._imageUrl;
  }

  get calories() {
    return this._calories;
  }

  static createEmptyDish(): DishModel {
    return new DishModel("Zum auswählen klicken", 0, 0, '');
  }
}