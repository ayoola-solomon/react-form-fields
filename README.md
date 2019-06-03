# React-Form-Fields

> React Form Fields rendering engine

React-Form-Fields is a component that easily lets you render form fields into rows and column which you can drop it into your existing project.

It's a plug and play component that'll fit in your workflow if your using standalone React/Formik/Redux-Form.

It also gives you the benefit of rendering form fields conditional as seen in this example.

Features include

- Rendering form fields conditionally
- Rendering form fields in rows and columns

## Installation and usage

```js
yarn add react-form-fields
```

```js
import React from 'react';
import FormFields from 'react-form-fields';

const fields = [
  {
    type: 'text',
    name: 'firstName',
    component: TextField,
    placeholder: 'First Name',
    value: 'John'
  },
  {
    type: 'text',
    name: 'lastName',
    component: TextField,
    placeholder: 'Last Name',
    value: 'Doe'
  }
];

const Form = () => (
  <form>
    <FormFields fields={fields} />
  </form>
);
```

### Props

- `fields` - specify the fields that needs to be rendered
