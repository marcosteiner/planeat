import React from 'react';
import {DayModel} from "../../../models/DayModel";
import {Card, makeStyles, Typography} from "@material-ui/core";

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
      <Typography>{day.name}</Typography>
      <Typography>Morgen:</Typography>
      <Typography>{day.breakfast.name}</Typography>
      <Typography>Mittag:</Typography>
      <Typography>{day.lunch.name}</Typography>
      <Typography>Abend:</Typography>
      <Typography>{day.dinner.name}</Typography>
    </Card>
  </>
}