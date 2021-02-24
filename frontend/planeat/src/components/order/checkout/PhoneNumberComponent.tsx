import React from 'react';
import {Button, Paper, TextField, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';

interface FormValues {
  phoneNumber: string;
}

interface OtherProps {
}

export default function PhoneNumberComponent() {
  return <Paper>
    <PhoneNumberForm/>
  </Paper>
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting } = props;
  return (
    <Form>
      <Typography>Bestätige deine Bestellung mit deiner Telefonnummer</Typography>
      <TextField name="phoneNumber" variant="outlined" placeholder="Telefonnummer" fullWidth/>
      {touched.phoneNumber && errors.phoneNumber && <div>{errors.phoneNumber}</div>}

      <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
        Bestätigungscode senden
      </Button>
    </Form>
  );
};

// The type of props MyForm receives
interface MyFormProps {
  initialPhoneNumber?: string;
}

const PhoneNumberForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      phoneNumber: props.initialPhoneNumber || '',
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Telefonnummer eingeben';
    }
    return errors;
  },

  handleSubmit: values => {
    // do submitting things
  },

})(InnerForm);