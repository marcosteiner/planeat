import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {Button, ButtonGroup} from "@material-ui/core";
import DayListComponent from "./DayListComponent";
import MealPlanModel from "../../../models/MealPlanModel";
import {DayModel} from "../../../models/DayModel";
import {DishModel} from "../../../models/DishModel";

export default function PlanningComponent() {
  const history = useHistory();
  const handleClick = () => history.push('/phone-number');
  const [mealPlan] = useState<MealPlanModel>(new MealPlanModel(
      [
        new DayModel("Montag", new Date(), DishModel.createEmptyDish(), DishModel.createEmptyDish(), DishModel.createEmptyDish()),
        new DayModel("Dienstag", new Date(), DishModel.createEmptyDish(), DishModel.createEmptyDish(), DishModel.createEmptyDish()),
        new DayModel("Mittwoch", new Date(), DishModel.createEmptyDish(), DishModel.createEmptyDish(), DishModel.createEmptyDish())
      ]));
  return <div>
    <DayListComponent mealPlan={mealPlan}/>
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      <Button>Standardauswahl</Button>
      <Button onClick={handleClick}>Checkout</Button>
    </ButtonGroup>
  </div>
}