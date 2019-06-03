import React from 'react';
import { mount } from 'enzyme';

import FormFields from './FormFields';
import { TextField } from '../examples/styles';

const fields = [
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

describe('FormFields', () => {
  it('should render properly', () => {
    const component = mount(<FormFields fields={fields} />);
    expect(component).toMatchSnapshot();
  });

  it('should throw an error fields is not available', () => {
    expect(() => mount(<FormFields />)).toThrowError(
      'You are calling FormFields with an undefined fields'
    );
  });
});
