import React, { useContext } from 'react'
import { Formik, useFormik } from 'formik'
import { ValidateLogin } from '../ValidationSchema/ValidateLogin';
import { useNavigate } from 'react-router-dom'
import contexts from '../Context/Contexts';

function Login() {

    let navigate = useNavigate();
    let { users, setIsLogin, isLogin } = useContext(contexts)

    const initialValues = {
        username: '', password: ''
    }

    let { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: ValidateLogin,
        onSubmit: (values) => {
            //console.log('isloged in: ', isLogin)
            console.table(values)
        }
    })


    return (
        <>
            <div><p>Kindly enter the correct credentials to login </p></div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">User Name</label>
                        <input type="text" className="form-control" id="username" value={values.username} onChange={handleChange} onBlur={handleBlur} placeholder='Enter the username' />
                        <div id="emailHelp" className="form-text">We'll never share your details with anyone else.</div>
                        {errors.username && touched.username ? <p style={{ color: 'red' }}>&nbsp;* {errors.username}</p> : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder='Enter the Password' />
                        {errors.password && touched.password ? <p style={{ color: 'red' }}>&nbsp;* {errors.password}</p> : null}
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <div className='my-3'><span>If you are new user click on register button <button className='btn btn-primary' onClick={() => { navigate('/register') }}>Register</button></span></div>
            </div>
        </>
    )
}

export default Login