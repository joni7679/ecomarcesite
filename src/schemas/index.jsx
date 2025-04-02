import * as yup from 'yup';

export const Signupschema = yup.object({
  name: yup.string().min(3, 'Name must be at least 3 characters').max(25, 'Name cannot exceed 25 characters').required('Please enter your name'),
  email: yup.string().email('Invalid email format').required('Please enter your Email Id'),
  number: yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Please enter your phone number'),
  password: yup.string().min(8, 'Password must be at least 8 characters').max(15, 'Password cannot exceed 15 characters').required('Please enter your password'),
});

export const loginupschema = yup.object({
  name: yup.string().min(3, 'Name must be at least 3 characters').max(25, 'Name cannot exceed 25 characters').required('Please enter your name'),
  email: yup.string().email('Invalid email format').required('Please enter your Email Id'),
  number: yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Please enter your phone number'),
  password: yup.string().min(8, 'Password must be at least 8 characters').max(15, 'Password cannot exceed 15 characters').required('Please enter your password'),
});
