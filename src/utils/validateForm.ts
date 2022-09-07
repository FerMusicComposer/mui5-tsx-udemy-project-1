import * as yup from 'yup';

export const LoginValidate = yup.object().shape({
    email: yup.string().trim().required('Email is required for login'),
    pwd: yup.string().trim().required('Please enter your password'),
});
