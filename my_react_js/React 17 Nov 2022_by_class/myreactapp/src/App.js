import './App.css';
import React from 'react';

function App() {
  return (
    <div className='container'>
    <Header/>
    <Nav/>
      <div className='content'>
        <Main/>
        <Sidebar/>
      </div>
    <Footer/>
    </div>
  );

  function Header()
    {
      return (
        <div className='header'>
          <h1>Header</h1>
        </div>
      );

    }

    function Nav()
    {
      return (
        <div className='nav'>
          <h1>Navigation</h1>
        </div>
      )
    }

    function Main()
    {
      return(
        <div className='main'>
          <h1>Main Content</h1>
        </div>
      )
    }

    function Sidebar()
    {
      return(
        <div className='sidebar'>
          <h1>Sidebar</h1>
        </div>
      )
    }

    function Footer()
    {
      return(
      <div className='footer'>
        <h1>Footer</h1>
      </div>
      )
    }
}

export default App;
