import React from 'react'
import './Header.css';

 function Header() {
  return (
    <div>

<nav className='navbar navbar-expand-md'>
                <a className='navbar-brand' href='#'><h3>BR Architects</h3></a>
                <button className='navbar-toggler navbar-dark' type='button' data-toggle="collapse" data-target="#main-navigation">
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div class="collapse navbar-collapse" id="main-navigation">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a class="nav-link" href="#"><h4>Home</h4></a>
                        </li>
                        <li className="nav-item">
                        <a class="nav-link" href="#"><h4>About</h4></a>
                        </li>
                    </ul>
                    <button class="button btn-dark ms-3">Login</button>
                </div>
            </nav>

    </div>
  );
};

export default Header;