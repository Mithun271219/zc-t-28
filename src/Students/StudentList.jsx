import React, { useContext, useEffect } from 'react'
import contexts from '../Context/Contexts'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function StudentList() {

    let navigate = useNavigate();
    let { indexs } = useParams();
    let { getdata, students, stulink } = useContext(contexts)

    let deletedata = async (id) => {
        let res = await axios.delete(`${stulink}/${id}`)
        getdata();
    }

    useEffect(() => {
        getdata();
    }, [])

    return (
        <>
            <h2>Students List</h2>
            <table className='table table-hover'>
                <thead className='table-dark'>
                    <tr>
                        <th># ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((ele) => {
                            return (
                                <tr key={ele.id}>
                                    <th>{ele.id}</th>
                                    <td>{ele.name}</td>
                                    <td>{ele.age}</td>
                                    <td>{ele.gender}</td>
                                    <td>{ele.email}</td>
                                    <td><button className='btn btn-warning' onClick={() => { navigate(`/edit/students/${ele.id}`) }}>Edit</button></td>
                                    <td><button className='btn btn-danger' onClick={() => { deletedata(ele.id) }}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default StudentList