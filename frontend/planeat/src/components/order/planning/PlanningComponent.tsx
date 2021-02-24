import React from 'react';
import {Button, ButtonGroup} from "@material-ui/core";
import DayListComponent from "./DayListComponent";

export default function PlanningComponent() {
  return <div>
    <DayListComponent/>
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      <Button>Standardauswahl</Button>
      <Button>Checkout</Button>
    </ButtonGroup>
  </div>
}