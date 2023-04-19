import React  from 'react';
import { Modal} from 'rsuite';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';

function AuthModal(props) {
  const {open, access, handleClose, } = props;
  return (
    <Modal open={open} keyboard={false} onClose={handleClose}>
      <Modal.Header>
        <Modal.Title  className='label-large'>{access }</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {access === 'Login'? <LoginForm /> : <RegisterForm />}      
      </Modal.Body>

      <Modal.Footer>

      </Modal.Footer>
    </Modal>
  )
}

export default AuthModal;