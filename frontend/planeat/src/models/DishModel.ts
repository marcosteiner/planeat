export class DishModel {
  private _name: string;
  private _calories: Number;
  private _price: Number;
  private _imageUrl: string;

  constructor(name: string, calories: Number, price: Number, imageUrl: string) {
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

  static createEmptyDish(): DishModel {
    return new DishModel("Zum auswählen klicken", 0, 0, '');
  }
}