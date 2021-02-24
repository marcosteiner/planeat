import React from 'react';
import {TextField, Typography} from "@material-ui/core";

export default function PhoneNumberComponent() {
  return <div>
    <Typography>Bestätige deine Bestellung mit deiner Telefonnummer</Typography>
    <form noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Telefonnummer" variant="outlined" />
    </form>
  </div>
}