import React from 'react';
import { Button, ButtonToolbar,  Form, FlexboxGrid } from 'rsuite';
import { InputText } from './InputText';
import { Model } from './ValidateRegister';

function RegisterForm() {
  const formRef = React.useRef();
  const [formValue, setFormValue] = React.useState({name: '', email: '', phone: '', password: '',  verifyPassword: ''});

  const handleSubmit = () => {
    if (!formRef.current.check()) {
      console.error('Form Error');
      return;
    }
    console.log(formValue, 'Form Value');
  };

  return (
    <FlexboxGrid >
      <FlexboxGrid.Item colspan={24}>
        <Form fluid ref={formRef} onChange={setFormValue} formValue={formValue} model={Model}>
          <InputText name="name" label="Name" />
          <InputText name="email" label="Email" />
          <InputText name="phone" label="Phone" />
          <InputText name="password" label="Password" type="password" autoComplete="off" />
          <InputText name="verifyPassword" label="Verify password" type="password" autoComplete="off" />

          <ButtonToolbar>
            <Button appearance="primary" onClick={handleSubmit}> Sign up </Button>                                
          </ButtonToolbar>

        </Form>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}

export default RegisterForm