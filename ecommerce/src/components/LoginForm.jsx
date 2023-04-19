import React from 'react';
import { ButtonToolbar,  Form, FlexboxGrid, Row, Divider } from 'rsuite';
import { InputText } from './InputText';
import { Model } from './ValidateRegister';
import Mybutton from './Button';

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

  const HandleRegister = () => {
    console.log('Close login form and open register'); 
  }

  return (
    <>
      <FlexboxGrid justify='center'>
        <FlexboxGrid.Item colspan={24}>
          <Form fluid ref={formRef} onChange={setFormValue} formValue={formValue} model={Model}>
            <InputText name="email" label="Email" />
            <InputText name="password" label="Password" type="password" autoComplete="off" />

            <ButtonToolbar>
              <Row>
                <Mybutton handle={handleSubmit} label={'Forgot Password?'} appearance={'link'} block={false} /> 
              </Row>
            
              <Mybutton handle={handleSubmit} label={'Sign in'} appearance={'primary'} mybtn={'mybtn'} block={true} />  
            </ButtonToolbar>
            
            <Divider>OR</Divider>   

            <ButtonToolbar>
              <Mybutton handle={handleSubmit} label={'Login with Google'} appearance={'ghost'} mybtn={'mybtn'} block={true} />  
            </ButtonToolbar>

            <Divider></Divider>  
            <p >Don't have an account<Mybutton mybtn={'links'} appearance={"link"} handle={HandleRegister} label={'register!'} /></p>
          </Form>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </>
  );
}

export default LoginForm