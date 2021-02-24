import React from 'react';
import DishComponent from "./DishComponent";
import {DishModel} from "../../../models/DishModel";

export default function DishListComponent() {
  let dish1 = new DishModel('Acai Bowl', 200, 10.00, '/static/images/acai_bowl.jpg')
  let dish2 = new DishModel('Früchte Bowl', 200, 10.00, '/static/images/fruit_bowl.jpg')
  let dish3 = new DishModel('Massman Curry', 200, 10.00, '/static/images/massman_curry.jpg')
  let dish4 = new DishModel('Rotes Thai Curry', 200, 10.00, '/static/images/red_thai_curry.jpg')
  let dish5 = new DishModel('Tofu Stir Fry', 200, 10.00, '/static/images/tofu_stir_fry.jpg')
  return <>
    <DishComponent dish={dish1}/>
    <DishComponent dish={dish2}/>
    <DishComponent dish={dish3}/>
    <DishComponent dish={dish4}/>
    <DishComponent dish={dish5}/>
  </>
}