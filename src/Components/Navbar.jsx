import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {

    let navigate = useNavigate();

    return (
        <>
            <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#e3f2fd' }}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/'>Home</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/students'>Studnets List</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/create'>Create </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/contactus'>Contact Us </NavLink>
                            </li>
                        </ul>
                        <div>
                            <button className='btn btn-primary' onClick={() => navigate('/login')} >Login/ Register</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar