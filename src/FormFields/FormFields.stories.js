import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

import FormFields from '.';
import WithFormik from '../examples/WithFormik';
import WithHooks from '../examples/WithHooks';
import { Container, TextField, FormContainer } from '../examples/styles';

import readme from '../../README.md';

const defaultFields = [
  {
    type: 'text',
    name: 'firstName',
    component: TextField,
    placeholder: 'First Name'
  },
  {
    type: 'text',
    name: 'lastName',
    component: TextField,
    placeholder: 'Last Name'
  }
];

const rowFields = [
  {
    container: Container,
    name: 'emailAndPassword',
    fields: [
      {
        ...defaultFields[0],
        placeholder: 'Email',
        type: 'email'
      },
      {
        type: 'password',
        name: 'password',
        component: TextField,
        placeholder: 'Password',
        type: 'pasword'
      }
    ]
  }
];

storiesOf('Form Fields', module)
  .addParameters({
    notes: { markdown: readme }
  })
  .addDecorator(centered)
  .add('Default', () => (
    <FormContainer>
      <h1>Default</h1>
      <FormFields fields={defaultFields} />
    </FormContainer>
  ))
  .add('In a Row', () => (
    <FormContainer>
      <h1>In a Row</h1>
      <FormFields fields={rowFields} />
    </FormContainer>
  ))
  .add('With Formik', () => <WithFormik />)
  .add('With React Hooks', () => <WithHooks />);
