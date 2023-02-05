import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

//import Components
import Header from './HeaderComponent/Header';
import Nav from './NavComponent/Nav';
import Main from './MainComponent/Main';
import About from './AboutComponent/About';
import Contact from './ContactComponent/Contact';
import Service from './ServiceComponent/Service';
import Register from './RegisterComponent/Register';
import Login from './LoginComponent/Login';
import Sidebar from './SidebarComponent/Sidebar';
import Footer from './FooterComponent/Footer';

function App() {
  return (
    <div id='container'>
    <Header/>
    <Nav/>
      <div id='content'>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/service' element={<Service/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
        <Sidebar/>
      </div>
    <Footer/>
    </div>
  );
}

export default App;