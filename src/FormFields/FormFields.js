import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const addPropsToFields = fields => {
  const fieldsWithProps = [];

  fields.forEach(field => {
    if (field.container && field.fields) {
      const { container, fields, ...props } = field;
      fieldsWithProps.push({
        Container: container,
        fields: addPropsToFields(fields),
        ...props
      });
    } else if (field.component) {
      const { component, ...props } = field;
      fieldsWithProps.push({
        ...props,
        Component: component
      });
    }
  });

  return fieldsWithProps;
};

const FormFields = ({ fields }) => {
  const fieldsWithProps = addPropsToFields(fields);

  const renderFields = fieldsToBeRendered =>
    fieldsToBeRendered.map(field => {
      if (field.Container && field.fields) {
        const { Container, fields, ...props } = field;
        return (
          <Container key={field.name} {...props}>
            {renderFields(fields)}
          </Container>
        );
      }

      const { Component, ...props } = field;
      return (
        <Fragment key={props.name}>
          <Component {...props} />
        </Fragment>
      );
    });

  return renderFields(fieldsWithProps);
};

FormFields.propType = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      component: PropTypes.element.isRequired
    })
  ).isRequired
};

export default FormFields;
