import React from 'react';
import DayComponent from "./DayComponent";
import {DayModel} from "../../../models/DayModel";
import {DishModel} from "../../../models/DishModel";

export default function DayListComponent() {
  let monday = new DayModel("Montag", new Date(), DishModel.createEmptyDish(), DishModel.createEmptyDish(), DishModel.createEmptyDish())
  let tuesday = new DayModel("Dienstag", new Date(), DishModel.createEmptyDish(), DishModel.createEmptyDish(), DishModel.createEmptyDish())
  let wendesday = new DayModel("Mittwoch", new Date(), DishModel.createEmptyDish(), DishModel.createEmptyDish(), DishModel.createEmptyDish())
  return (<div>
    <DayComponent day={monday}/>
    <DayComponent day={tuesday}/>
    <DayComponent day={wendesday}/>
  </div>)
}