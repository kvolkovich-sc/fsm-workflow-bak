import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

export default function StringInput({ value, onChange, ...props }) {
  return (
    <FormControl
      {...props}
      type='text'
      value={value || ''}
      onChange={({ target: { value } }) => onChange(value)}
    />
  )
}

StringInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
}
