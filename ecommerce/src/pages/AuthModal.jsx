import React  from 'react';
import { Modal} from 'rsuite';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';

function AuthModal(props) {
  const {open, access, handleClose, } = props;
  return (
    <Modal open={open} keyboard={false} onClose={handleClose}>
      <Modal.Header>
        <Modal.Title>{access }</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {access === 'Login'? <LoginForm Close={handleClose} access={access} /> : <RegisterForm />}      
      </Modal.Body>

      <Modal.Footer>

      </Modal.Footer>
    </Modal>
  )
}

export default AuthModal;