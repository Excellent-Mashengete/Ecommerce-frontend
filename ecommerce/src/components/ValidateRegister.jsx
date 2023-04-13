import { Schema} from 'rsuite';
const { StringType, NumberType } = Schema.Types;

export const Model = Schema.Model({
  name: StringType().isRequired('Name is required.'),
  email: StringType().isEmail('Please enter a valid email address.').isRequired('Email is required.'),
  phone: StringType().isRequired('Contact is required.'),
  password: StringType().isRequired('Password is required.'),
  verifyPassword: StringType()
    .addRule((value, data) => {
      console.log(data);

      if (value !== data.password) {
        return false;
      }

      return true;
    }, 'The two passwords do not match')
    .isRequired('Confirm Password is required.')
});
