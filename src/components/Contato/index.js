import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

import './style.css';

import logoWhatsapp from '../../assets/icones/whatsapp-contato.svg';
import logoLinkedin from '../../assets/icones/linkedin-contato.svg';
import logoGithub from '../../assets/icones/github-contato.svg';
import phone from '../../assets/icones/phone.svg';
import mail from '../../assets/icones/mail.svg';

export default function Contato() {

    const redirecionar= () => {
        window.open('https://api.whatsapp.com/send?l=pt_BR&phone=5511940078725');
    }

    return (
        <>
            <Navbar />

            <h1 className='title-contato'>Contato</h1>

            <div id='contato'>

                <adress className='box-contato-adress'>
                    <p><img src={phone} alt='Phone' />Telefone: <a href='tel:XXXXXX'> (11) 4553-2XXX</a></p>
                    
                    <p><img src={mail} alt='Email' />Email: <a href='mailto:victorps.joao@gmail.com'> victorps.joao@gmail.com</a></p>
                </adress>

                <div className='box-contato'>

                    <div className='redes'>
                        <a href='' target='_blank'>
                            <img src={logoLinkedin} alt='Linkedin' title='Linkedin' />
                        </a>

                        <a href='' target='_blank'>
                            <img src={logoGithub} alt='GitHub' title='GitHub' />
                        </a>
                    </div>

                    <div className='botao-whatsapp'>
                        <p>Envie uma mensagem pra mim no whatsapp.</p>
                        <button onClick={redirecionar}>Enviar mensagem <img src={logoWhatsapp} /></button>
                    </div>
                </div>
            </div>

            <Footer className='contato-bottom' />
        </>
    )
}