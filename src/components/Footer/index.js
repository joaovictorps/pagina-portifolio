import React from 'react';
import { Link } from 'react-router-dom';

import logoLinkedin from '../../assets/icones/linkedin.svg';
import logoGithub from '../../assets/icones/github.svg';

import './style.css';

export default function Footer() {
    return (
        <footer id='footer'>
            <adress className='footer-adress'>
                <p className='footer-p'>Jandira - SP</p>
                <p className='footer-p'>
                    Email: <a href='mailto:victorps.joao@gmail.com'>victorps.joao@gmail.com</a>
                </p>

            </adress>

            <nav className='footer-navbar'>
                <Link to='/'>Home</Link>
                <Link to='/Portifolio' >Portifolio</Link>
                <Link to='/contato' >Contato e redes sociais</Link>
            </nav>

            <div className='footer-redes'>
                <a href='' target='_blank'>
                    <img src={logoGithub} alt='GitHub' title='GitHub' />
                </a>
                <a href='' target='_blank'>
                    < img src={logoLinkedin} alt='LinkedIn' title='LinkedIn'/>
                </a>
            </div>
        </footer>
    );
}