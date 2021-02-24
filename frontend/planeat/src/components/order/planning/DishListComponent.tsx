import React from 'react';
import DishComponent from "./DishComponent";
import {DishModel} from "../../../models/DishModel";

export default function DishListComponent() {
  let dish = new DishModel('Acai Bowl', 200, 10.00, '/static/images/acai_bowl.jpg')
  return <>
    <DishComponent dish={dish}/>
    <DishComponent dish={dish}/>
    <DishComponent dish={dish}/>
    <DishComponent dish={dish}/>
    <DishComponent dish={dish}/>
  </>
}