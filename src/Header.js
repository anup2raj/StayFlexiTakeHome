import React from 'react';
import logo from './logo.svg';

function Header(){
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark px-3">
            <a className="navbar-brand" href="#">
                <img src={logo} width="30" height="30" alt=""/>
                <span className="px-3">Navbar</span>
            </a>
            </nav>
        </header>
    );
}

export default Header;