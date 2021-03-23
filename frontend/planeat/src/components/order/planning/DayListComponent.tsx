import React from 'react';
import DayComponent from "./DayComponent";
import MealPlanModel from "../../../models/MealPlanModel";

export default function DayListComponent(props: {mealPlan: MealPlanModel}) {
  const mealPlan = props.mealPlan;
  let days = mealPlan.dayModels.map((day) => <DayComponent day={day}/>)
  return (<div>
    {days}
  </div>)
}