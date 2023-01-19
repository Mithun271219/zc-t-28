import * as val from 'yup';

export const VlaidateCreate = val.object({
    name: val.string().min(3).max(15).required('name is required'),
    age: val.number().min(18).required('age is mandatory'),
    gender: val.string().required('Gender is required'),
    email: val.string().required('email is mandatory')
})