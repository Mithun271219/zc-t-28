import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { VlaidateCreate } from '../ValidationSchema/ValidateCreate'
import axios from 'axios'
import contexts from '../Context/Contexts'
import { useNavigate } from 'react-router-dom'

function CreateStudent() {

    let navigate = useNavigate();
    let { stulink, students, setStudents } = useContext(contexts)

    let initialValues = {
        name: '', age: '', gender: '', email: ''
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: VlaidateCreate,
        onSubmit: async (values, clr) => {
            console.log(values)
            await axios.post(`${stulink}`, values)
            clr.resetForm();
            navigate('/students')
        }
    })

    return (
        <>
            <h2>Create Student details</h2>
            <div className="container my-3">
                <form onSubmit={handleSubmit}>
                    <p>Kindly fill the below details</p>
                    <div>
                        <label htmlFor="name">Name:&nbsp;</label>
                        <input type="text" name="name" id="name" onChange={handleChange} value={values.name} onBlur={handleBlur} />
                        {errors.name && touched.name ? <p style={{ color: 'red' }}>&nbsp;* {errors.name}</p> : null}
                    </div><br />
                    <div>
                        <label htmlFor="age">Age:&nbsp;</label>
                        <input type="number" name="age" id="age" onChange={handleChange} value={values.age} onBlur={handleBlur} />
                        {errors.age && touched.age ? <p style={{ color: 'red' }}>&nbsp;* {errors.age}</p> : null}
                    </div><br />
                    <div>
                        <label htmlFor="email">Email:&nbsp;</label>
                        <input type="email" name="email" id="email" onChange={handleChange} value={values.email} onBlur={handleBlur} />
                        {errors.email && touched.email ? <p style={{ color: 'red' }}>&nbsp;* {errors.email}</p> : null}
                    </div><br />
                    <div>
                        <label htmlFor="">Gender:&nbsp;</label>
                        <input type="radio" name="gender" id="male" value='male' onChange={handleChange} onBlur={handleBlur} />
                        <label htmlFor="male">Male &nbsp;</label>
                        <input type="radio" name="gender" id="female" value='female' onChange={handleChange} onBlur={handleBlur} />
                        <label htmlFor="female">Female &nbsp;</label>
                        <input type="radio" name="gender" id="other" value="others" onChange={handleChange} onBlur={handleBlur} />
                        <label htmlFor="other">Other&nbsp;</label>
                        {errors.gender && touched.gender ? <p style={{ color: 'red' }}>&nbsp;* {errors.gender}</p> : null}
                    </div><br />
                    <div>
                        <button type='submit' className='btn btn-primary mx-2'>Submit</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default CreateStudent