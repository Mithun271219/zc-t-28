import * as val from 'yup';
import React, { useState, useEffect, useContext } from 'react';
import contexts from '../Context/Contexts';

// let { userlink, users, getdata } = useContext(contexts)

// useEffect(() => {
//     getdata();
// }, [])

// console.table(users)

export const ValidateLogin = val.object({
    username: val.string().min(4).max(10).required('user name is required to login'),
    password: val.string().min(5).required('Password is required to Login')
})