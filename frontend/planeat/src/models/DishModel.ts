export class DishModel {
  private _name: String;
  private _calories: Number;
  private _price: Number;

  constructor(name: String, calories: Number, price: Number) {
    this._name = name;
    this._calories = calories;
    this._price = price;
  }

  get name() {
    return this._name;
  }

  static createEmptyDish(): DishModel {
    return new DishModel("Zum auswählen klicken", 0, 0);
  }
}