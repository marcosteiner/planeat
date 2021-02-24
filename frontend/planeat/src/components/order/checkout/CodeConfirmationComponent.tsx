import React from 'react';
import {TextField, Typography} from "@material-ui/core";

export default function CodeConfirmationComponent() {
  return <div>
    <Typography>Bestätige den dir per SMS zu gesandten code</Typography>
      <form noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Code" variant="outlined" />
      </form>
  </div>
}