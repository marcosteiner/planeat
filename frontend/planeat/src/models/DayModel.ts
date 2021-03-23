import {DishModel} from "./DishModel";

export class DayModel {
  private _name: string;
  private _date: Date;
  private _breakfast: DishModel;
  private _lunch: DishModel;
  private _dinner: DishModel;

  constructor(name: string, date: Date, breakfast: DishModel, lunch: DishModel, dinner: DishModel){
    this._name = name;
    this._date = date;
    this._breakfast = breakfast;
    this._lunch = lunch;
    this._dinner = dinner;
  }

  get name() {
    return this._name;
  }

  get breakfast() {
    return this._breakfast;
  }

  get lunch() {
    return this._lunch;
  }

  get dinner() {
    return this._dinner;
  }

  get calories() {
    return this._lunch.calories + this._breakfast.calories + this._dinner.calories;
  }
}