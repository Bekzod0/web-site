import React from 'react';
import './App.css';
import { Mailer } from './Componet/Mailer/mailer';
import { Routes,Route,Link } from 'react-router-dom';
import { Pagoda } from './Componet/pages/Pagoda';
import {Home}from './Componet/pages/Home';


function App() {
  return (
    <div className="App">
   <div className='menu'>
<Link to='/'>Home</Link>
<Link to='Pagoda'>Pagoda</Link>
<Link to='Mailer'>Mailer</Link>
   </div>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Pagoda' element={<Pagoda/>}/>
    <Route path='/Mailer' element={<Mailer/>}/>
  </Routes>
    </div>
  );
}
export default App;
