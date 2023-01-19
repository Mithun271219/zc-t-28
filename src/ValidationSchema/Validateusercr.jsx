import * as val from 'yup';

export const ValidateUser = val.object({
    name: val.string().min(3).max(15).required('name is mandatory'),
    username: val.string().min(4).max(10).required('User name is required to create your account'),
    email: val.string().required('email is required'),
    password: val.string().min(5).required('password is mandatory'),
    confirmpass: val.string().required('Re-enter the password to register').oneOf([val.ref('password'), null], 'Password should match')
})