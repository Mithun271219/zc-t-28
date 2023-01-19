import React, { useState, useContext } from 'react'
import { useFormik } from 'formik'
import { VlaidateCreate } from '../ValidationSchema/ValidateCreate'
import { useNavigate, useParams } from 'react-router-dom'
import contexts from '../Context/Contexts'
import axios from 'axios'
import { useEffect } from 'react'

function EditStudents() {

    let { stulink } = useContext(contexts)
    let navigate = useNavigate();
    let { indexs } = useParams();

    const [initialValues, setInitialValues] = useState({
        name: '', age: '', email: '', gender: '',
    })

    let getformfilled = async () => {
        let res = await axios.get(`${stulink}/${indexs}`)
        setInitialValues(res.data)
    }

    useEffect(() => {
        getformfilled();
    }, [])

    let { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: VlaidateCreate,
        onSubmit: async (values) => {
            let res = await axios.put(`${stulink}/${indexs}`, values)
            navigate('/students')
            console.log(values)
        }
    })

    return (
        <>
            <h2>Edit the Student Details</h2>
            <div className="container my-2">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:&nbsp;</label>
                        <input type="text" name="name" id="name" onChange={handleChange} value={values.name} placeholder={initialValues.name} onBlur={handleBlur} />
                        {errors.name && touched.name ? <p style={{ color: 'red' }}>&nbsp;* {errors.name}</p> : null}
                    </div><br />
                    <div>
                        <label htmlFor="age">Age:&nbsp;</label>
                        <input type="number" name="age" id="age" onChange={handleChange} value={values.age} placeholder={initialValues.age} onBlur={handleBlur} />
                        {errors.age && touched.age ? <p style={{ color: 'red' }}>&nbsp;* {errors.age}</p> : null}
                    </div><br />
                    <div>
                        <label htmlFor="email">Email:&nbsp;</label>
                        <input type="text" name="email" id="email" onChange={handleChange} value={values.email} placeholder={initialValues.email} onBlur={handleBlur} />
                        {errors.email && touched.email ? <p style={{ color: 'red' }}>&nbsp;* {errors.email}</p> : null}
                    </div><br />
                    <div>
                        <label htmlFor="">Gender:&nbsp;</label>
                        <input type="radio" name="gender" id="male" value={'male'} onChange={handleChange} onBlur={handleBlur} />
                        <label htmlFor="male">Male&nbsp;</label>
                        <input type="radio" name="gender" id="female" value='female' onChange={handleChange} onBlur={handleBlur} />
                        <label htmlFor="female">feMale&nbsp;</label>
                        <input type="radio" name="gender" id="other" value='others' onChange={handleChange} onBlur={handleBlur} />
                        <label htmlFor="other">Others&nbsp;</label>
                        {errors.gender && touched.gender ? <p style={{ color: 'red' }}>&nbsp;* {errors.gender}</p> : null}
                    </div><br />
                    <div>
                        <button type="submit" className='btn btn-warning mx-3'>Update</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default EditStudents

