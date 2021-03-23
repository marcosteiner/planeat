import React from 'react';
import {DayModel} from "../../../models/DayModel";
import {Box, Card, makeStyles, Paper, Typography} from "@material-ui/core";
import {DishModel} from "../../../models/DishModel";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
  dayCard: {
    marginBottom: '5px',
    padding: '5px'
  },
  mealPaper: {
    marginBottom: '5px'
  }
});

export default function DayComponent(props: {day: DayModel}) {
  const classes = useStyles();
  let day = props.day
  return <>
    <Card className={classes.dayCard}>
      <Typography variant="h6">{day.name}</Typography>
      <Meal mealName={"Morgenessen"} dish={day.breakfast}/>
      <Meal mealName={"Mittagessen"} dish={day.lunch}/>
      <Meal mealName={"Abendessen"} dish={day.dinner}/>
    </Card>
  </>
}

function Meal(props: {mealName: string, dish: DishModel}) {
  const history = useHistory();
  const handleClick = () => history.push('/dishes');
  let dish = props.dish;
  let mealName = props.mealName;
  const classes = useStyles();
  return <Paper elevation={1} className={classes.mealPaper} onClick={handleClick} >
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <Typography variant="body1">{mealName}</Typography>
      <Typography variant="body2">{dish.name}</Typography>
    </Box>
  </Paper>;
}
