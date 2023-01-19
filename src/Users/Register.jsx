import React from 'react'
import { ValidateUser } from '../ValidationSchema/Validateusercr'
import { useFormik } from 'formik'

function Register() {

    let initialValues = {
        name: '', username: '', email: "", password: '', confirmpass: ""
    }

    let { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: ValidateUser,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <>
            <div><p>Kindly enter the correct credentials to login </p></div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" value={values.name} onBlur={handleBlur} onChange={handleChange} placeholder='Enter the name' />
                        {errors.name && touched.name ? <p style={{ color: 'red' }}>&nbsp;*{errors.name}</p> : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">User Name</label>
                        <input type="text" className="form-control" id="username" value={values.username} onBlur={handleBlur} onChange={handleChange} placeholder='Enter the username' />
                        {errors.username && touched.username ? <p style={{ color: 'red' }}>&nbsp;*{errors.username}</p> : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" value={values.email} onBlur={handleBlur} onChange={handleChange} placeholder='Enter the email' />
                        {errors.email && touched.email ? <p style={{ color: 'red' }}>&nbsp;*{errors.email}</p> : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" value={values.password} onBlur={handleBlur} onChange={handleChange} placeholder='Enter the Password' />
                        {errors.password && touched.password ? <p style={{ color: 'red' }}>&nbsp;*{errors.password}</p> : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmpass" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmpass" value={values.confirmpass} onBlur={handleBlur} onChange={handleChange} placeholder='Re-enter the password again' />
                        {errors.confirmpass && touched.confirmpass ? <p style={{ color: 'red' }}>&nbsp;*{errors.confirmpass}</p> : null}
                    </div>
                    <button type="submit" className="btn btn-primary mx-3">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Register