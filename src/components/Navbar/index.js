import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

export default function Navbar() {
    return(
        <header className='navbar'>
            <h1 className='navbar-name'>João <span>Victor</span></h1>

            <nav className='navbar-items'>
                <Link to='/'>Home</Link>
                <Link to='/Portifolio' >Portifolio</Link>
                <Link to='/contato' >Contato</Link>
            </nav>
        </header>
    )
}