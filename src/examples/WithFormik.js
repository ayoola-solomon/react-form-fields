import React from 'react';
import { Formik } from 'formik';

import FormFields from '../FormFields';
import { FormContainer, Container, TextField, Button } from './styles';

const getFields = ({ values, handleChange, handleBlur, errors, touched }) => [
  {
    container: Container,
    name: 'fullName',
    fields: [
      {
        type: 'firstName',
        name: 'firstName',
        component: TextField,
        placeholder: 'First Name',
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.firstName,
        error: errors.firstName && touched.firstName && errors.firstName
      },
      {
        type: 'lastName',
        name: 'lastName',
        component: TextField,
        placeholder: 'Last Name',
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.lastName,
        error: errors.lastName && touched.lastName && errors.lastName
      }
    ]
  },
  {
    container: Container,
    name: 'emailAndPassword',
    fields: [
      {
        type: 'email',
        name: 'email',
        component: TextField,
        placeholder: 'Email Address',
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.email,
        error: errors.email && touched.email && errors.email
      },
      {
        type: 'password',
        name: 'password',
        component: TextField,
        placeholder: 'Password',
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.password,
        error: errors.password && touched.password && errors.password
      }
    ]
  }
];

const WithFormik = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '', firstName: '', lastName: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => {
        const fields = getFields({
          values,
          errors,
          handleChange,
          handleBlur,
          touched
        });
        return (
          <FormContainer>
            <h1>Form Fields with Formik</h1>
            <form onSubmit={handleSubmit}>
              <FormFields fields={fields} />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </FormContainer>
        );
      }}
    </Formik>
  );
};

export default WithFormik;
