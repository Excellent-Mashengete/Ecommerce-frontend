import { Schema} from 'rsuite';
const { StringType} = Schema.Types;

export const Model = Schema.Model({
  email: StringType().isEmail('Please enter a valid email address.').isRequired('Email is required.'),
  password: StringType().isRequired('Password is required.'),
});
