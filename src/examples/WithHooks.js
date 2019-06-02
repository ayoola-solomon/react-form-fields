import React, { useState } from 'react';

import FormFields from '../FormFields';
import { FormContainer, Container, TextField, Button } from './styles';

const getFields = fields => [
  {
    container: Container,
    name: 'fullName',
    fields: [
      {
        type: 'firstName',
        name: 'firstName',
        component: TextField,
        placeholder: 'First Name',
        required: true,
        ...fields['firstName']
      },
      {
        type: 'lastName',
        name: 'lastName',
        component: TextField,
        placeholder: 'Last Name',
        required: true,
        ...fields['lastName']
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
        required: true,
        ...fields['email']
      },
      {
        type: 'password',
        name: 'password',
        component: TextField,
        placeholder: 'Password',
        required: true,
        ...fields['password']
      }
    ]
  }
];

const WithHooks = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const fields = getFields({
    email: {
      value: email,
      onChange: e => setEmail(e.target.value)
    },
    lastName: {
      value: lastName,
      onChange: e => setLastName(e.target.value)
    },
    password: {
      value: password,
      onChange: e => setPassword(e.target.value)
    },
    firstName: {
      value: firstName,
      onChange: e => setFirstName(e.target.value)
    }
  });

  const handleSubmit = e => {
    e.preventDefault();

    setIsSubmitting(true);

    const values = {
      email,
      password,
      lastName,
      firstName
    };

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <FormContainer>
      <h1>Form Fields with React Hooks</h1>
      <form onSubmit={handleSubmit}>
        <FormFields fields={fields} />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </FormContainer>
  );
};

export default WithHooks;
