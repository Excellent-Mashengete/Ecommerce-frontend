import { TextField } from '@mui/material';
import React from 'react';
import { Form } from 'rsuite';

export const InputText = React.forwardRef((props, ref) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-4`} ref={ref}>
      <Form.ControlLabel >{label} </Form.ControlLabel>
      <Form.Control size="lg"  varrient={'filled'} name={name} accepter={accepter} {...rest} />
    </Form.Group>
  )
});

