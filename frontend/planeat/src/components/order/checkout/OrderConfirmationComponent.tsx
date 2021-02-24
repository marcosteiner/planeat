import React from 'react';
import {Button, Paper, TextField, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import { withFormik, FormikProps, FormikErrors, Form } from 'formik';

interface FormValues {
  code: string;
}

interface OtherProps {
}

export default function OrderConfirmationComponent() {
  return <Paper>
    <CodeForm/>
  </Paper>
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting } = props;
  const history = useHistory();
  const handleClick = () => history.push('/order-success');
  return (
    <Form>
      <Typography>Gib den per SMS erhaltenen Code ein.</Typography>
      <TextField name="code" label="code" variant="outlined" placeholder="Code" fullWidth/>
      {touched.code && errors.code && <div>{errors.code}</div>}

      <Button variant="contained" color="primary" type="submit" disabled={isSubmitting} onClick={handleClick}>
        Bestätigungscode senden
      </Button>
    </Form>
  );
};

// The type of props MyForm receives
interface MyFormProps {
  initialCode?: string;
}

const CodeForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      code: props.initialCode || '',
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.code) {
      errors.code = 'Telefonnummer eingeben';
    }
    return errors;
  },

  handleSubmit: values => {
    // do submitting things
  },

})(InnerForm);