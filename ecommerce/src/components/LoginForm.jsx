import React from 'react';
import { Button, ButtonToolbar,  Form, FlexboxGrid } from 'rsuite';
// import { BsPerson } from "react-icons/bs";
import { InputText } from './InputText';
import { Model } from './ValidateRegister';

function LoginForm() {
  const formRef = React.useRef();
  const [formValue, setFormValue] = React.useState({email: '', password: ''});

  const handleSubmit = () => {
    if (!formRef.current.check()) {
      console.error('Form Error');
      return;
    }
    console.log(formValue, 'Form Value');
  };

  return (
    <FlexboxGrid justify='center'>
      <FlexboxGrid.Item colspan={12}>
        <Form fluid ref={formRef} onChange={setFormValue} formValue={formValue} model={Model}>
          <InputText name="email" label="Email" />
          <InputText name="password" label="Password" type="password" autoComplete="off" />

          <ButtonToolbar>
            <Button appearance="primary" onClick={handleSubmit}> Sign up </Button>                                
          </ButtonToolbar>

        </Form>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}

export default LoginForm