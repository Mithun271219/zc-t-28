import React, { useState, useEffect } from "react";
import axios from 'axios'
import contexts from "./Contexts";

const ContextState = (props) => {

    let stulink = "http://localhost:3001/students";
    let userlink = 'http://localhost:3001/users';

    const [students, setStudents] = useState([])
    let [users, setUsers] = useState([])
    let [isLogin, setIsLogin] = useState(false)

    let getdata = async () => {
        let userres = await axios.get(userlink)
        let stures = await axios.get(stulink)
        setStudents(stures.data)
        setUsers(userres.data)
    }

    return (
        <contexts.Provider value={{ stulink, userlink, students, users, getdata, isLogin, setIsLogin }}>
            {props.children}
        </contexts.Provider>
    )
}

export default ContextState;