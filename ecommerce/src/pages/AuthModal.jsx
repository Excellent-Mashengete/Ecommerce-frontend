import React  from 'react';
import { Modal, FlexboxGrid, Form , Schema, Button, ButtonToolbar} from 'rsuite';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';
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

function AuthModal(props) {
    const {open, access, handleClose } = props;
    return (
        <>
            <Modal open={open} keyboard={false} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>{access}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <RegisterForm />
                </Modal.Body>

                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AuthModal;