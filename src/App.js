import React,{ } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contactus from './Components/Contactus';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import StudentList from './Students/StudentList';
import CreateStudent from './Students/CreateStudent';
import EditStudents from './Students/EditStudents';
import PagenotFound from './Components/PagenotFound';
import Login from './Users/Login';
import Register from './Users/Register';
import ContextState from './Context/ContextState';

function App() {

  return (
    <ContextState>
    <BrowserRouter >
    <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/contactus' element={<Contactus />}  />
          <Route path='/students' element={<StudentList />}  />
          <Route path='/create' element={<CreateStudent />}  />
          <Route path='/edit/students/:indexs' element={<EditStudents />}  />
          <Route path='/contactus' element={ <Contactus />}  />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />



          <Route path='*' element={<PagenotFound  />} />
        </Routes>

      </div>
    </BrowserRouter>
    </ContextState>
  );
}

export default App;
