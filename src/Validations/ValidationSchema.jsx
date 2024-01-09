import * as Yup from 'yup';


export const SignupSchema = Yup.object().shape({
    username: Yup.string().min(3, 'Password is too short - should be 3 chars minimum.').required('username is Required'),
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password: Yup.string().min(6, 'Password is too short - should be 6 chars minimum.').required('Password is Required'),
});

export const LoginSchema = Yup.object().shape({
    username: Yup.string().min(3, 'Password is too short - should be 3 chars minimum.').required('username is Required'),
    password: Yup.string().min(6, 'Password is too short - should be 6 chars minimum.').required('Password is Required'),
});