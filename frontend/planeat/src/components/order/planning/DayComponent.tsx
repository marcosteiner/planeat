import React from 'react';
import {DayModel} from "../../../models/DayModel";
import {Typography} from "@material-ui/core";

export default function DayComponent(props: {day: DayModel}) {
  let day = props.day
  return <>
    <Typography>{day.name}</Typography>
    <Typography>Morgen:</Typography>
    <Typography>{day.breakfast.name}</Typography>
    <Typography>Mittag:</Typography>
    <Typography>{day.lunch.name}</Typography>
    <Typography>Abend:</Typography>
    <Typography>{day.dinner.name}</Typography>
  </>
}