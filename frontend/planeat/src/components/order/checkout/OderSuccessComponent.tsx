import React from 'react';
import {Typography} from "@material-ui/core";

export default function OrderSuccessComponent() {
  return <>
    <Typography>
      Bestellung Erfolgreich!
      Du kannst dein essen noch bis 18:00 Uhr absagen.
      Wir benachritigen dich per SMS sobald wir beginnen und wann du es abholen kannst.
    </Typography>
  </>
}