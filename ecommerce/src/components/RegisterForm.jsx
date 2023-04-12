import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button, ButtonToolbar, Placeholder } from 'rsuite';
import { Form, FlexboxGrid } from 'rsuite';
import { Schema, Panel } from 'rsuite';
import { BsPerson } from "react-icons/bs";


// import JSONTree from 'react-json-tree';

const JSONView = ({ formValue, formError }) => (
  <div style={{ marginBottom: 10 }}>
   
  </div>
);

const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
  name: StringType().isRequired('This field is required.'),
  email: StringType()
    .isEmail('Please enter a valid email address.')
    .isRequired('This field is required.'),
  phone: NumberType().range(10,10,
    'Please enter a number from 10 to 10'
  )
  .isRequired('This field is required.'),
  password: StringType().isRequired('This field is required.'),
  verifyPassword: StringType()
    .addRule((value, data) => {
      console.log(data);

      if (value !== data.password) {
        return false;
      }

      return true;
    }, 'The two passwords do not match')
    .isRequired('This field is required.')
});

const TextField = React.forwardRef((props, ref) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-4`} ref={ref}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

function registerForm() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formRef = React.useRef();
  const [formError, setFormError] = React.useState({});
  const [formValue, setFormValue] = React.useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    verifyPassword: ''
  });

  const handleSubmit = () => {
    if (!formRef.current.check()) {
      console.error('Form Error');
      return;
    }
    console.log(formValue, 'Form Value');
  };

  const handleCheckEmail = () => {
    formRef.current.checkForField('email', checkResult => {
      console.log(checkResult);
    });
  };


  return (
    <>
    <ButtonToolbar>
      <Button onClick={handleOpen}> Register</Button>
    </ButtonToolbar>

    <Modal open={open} onClose={handleClose}>
      <Modal.Header>
        <Modal.Title>Sign up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
        

      </Modal.Body>
    </Modal>


    <FlexboxGrid >
      <FlexboxGrid.Item colspan={12} style={{}}>
        <Form
          ref={formRef}
          onChange={setFormValue}
          onCheck={setFormError}
          formValue={formValue}
          model={model}
          
        >
         
          <TextField name="name" label="Username"  /> 
          <TextField name="email" label="Email" />
          <TextField name="phone" label="Phone" />
          <TextField name="password" label="Password" type="password" autoComplete="off" />
          <TextField
            name="verifyPassword"
            label="Verify password"
            type="password"
            autoComplete="off"
          />

          <ButtonToolbar>
            <Button appearance="primary" onClick={handleSubmit}>
              Sign up
            </Button>

            <Button onClick={handleCheckEmail}>Check Email</Button>
          </ButtonToolbar>

          <p className="forgotPassword">Already have an account?<a href="/login">Login</a></p>

        </Form>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={12}>
        <JSONView formValue={formValue} formError={formError} />
      </FlexboxGrid.Item>
    </FlexboxGrid>

  </>
  
  )
}

export default registerForm