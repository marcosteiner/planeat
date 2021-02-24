import React from 'react';
import {DayModel} from "../../../models/DayModel";
import {Box, Card, makeStyles, Typography} from "@material-ui/core";
import {DishModel} from "../../../models/DishModel";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
  dayCard: {
    marginBottom: '5px',
  },
});

export default function DayComponent(props: {day: DayModel}) {
  const classes = useStyles();
  let day = props.day
  return <>
    <Card className={classes.dayCard}>
      <Meal mealName={"Morgenessen:"} dish={day.breakfast}/>
      <Meal mealName={"Mittagessen:"} dish={day.lunch}/>
      <Meal mealName={"Abendessen:"} dish={day.dinner}/>
    </Card>
  </>
}

function Meal(props: {mealName: string, dish: DishModel}) {
  const history = useHistory();
  const handleClick = () => history.push('/dishes');
  let dish = props.dish;
  let mealName = props.mealName;
  return <Box display="flex" flexDirection="row" flexWrap="nowrap">
    <Typography>{mealName}</Typography>
    <Typography onClick={handleClick}>{dish.name}</Typography>
  </Box>;
}
