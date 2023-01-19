import React from 'react'
import { useNavigate } from 'react-router-dom'

function PagenotFound() {

    let nav = useNavigate();

    return (
        <>
            <h2>Page not fount ;-(</h2>
            <div>
                <p>Click the below button and you will be redirected to home page</p>
                <button className='btn btn-warning' onClick={() => nav('/')} >Home</button>
            </div>
        </>
    )
}

export default PagenotFound