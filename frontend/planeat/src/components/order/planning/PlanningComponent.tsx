import React from 'react';
import { useHistory } from 'react-router-dom';
import {Button, ButtonGroup} from "@material-ui/core";
import DayListComponent from "./DayListComponent";

export default function PlanningComponent() {
  const history = useHistory();
  const handleClick = () => history.push('/phone-number');
  return <div>
    <DayListComponent/>
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      <Button>Standardauswahl</Button>
      <Button onClick={handleClick}>Checkout</Button>
    </ButtonGroup>
  </div>
}