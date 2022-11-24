import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container-fluid'>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    
    <Link class="navbar-brand mx-4 fs-4" to='/'>M-A</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav position-absolute  start-50  ">
        <li class="nav-item mx-5 ">
          
          <Link to='/'>Home</Link>
        </li>
        <li class="nav-item mx-5">
          <Link to='/about'>About</Link>
      
        </li>
        <li class="nav-item mx-5">
        <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar