import React from 'react';
import Navbar from '../Navbar';
import Icones from './Icones';
import Footer from '../Footer';

import fotoPerfil from '../../assets/foto_perfil.png';
import './style.css';

export default function Home() {
    return (
        <section id="home">
            <Navbar/>
            <header className='banner'>
                <h1 className='title'>Titulo</h1>
                <p className='subtitle'>Textinho blalba</p>
            </header>
            <main className='content'>
                <section className='section sobre'>
                    <div className='box-sobre'>
                        <img src={fotoPerfil} alt='Foto de Perfil'/> 
                    </div>

                    <div class='box-sobre'>
                        <h2 className='content-title'>Sobre mim</h2>
                        <p className='content-p'>Oasdikawj afokjsfkaj oajOasdikawj afokjsfkaj oajOasdikawj afokjsfkaj oajOasdikawj afokjsfkaj oajOasdikawj afokjsfkaj oajOasdikawj afokjsfkaj oajf</p>
                    </div>
                </section>

                <section className='section'>
                    <h2 className='content-title'>Um pouco das minha habilidades e linguagens.</h2>

                    <p className='content-p'>HTML, CSS, TypeScript e JavaScript. Conhecimento em Bootstrap e criação de formulários. Apto a desenvolver páginas web responsivas, funcionais e dinâmicas, com consulta à APIs.</p>

                    <p className='content-p'>
                    Banco de dados: Fundamentos e aplicações relacionais e não relacionais: MongoDB e PostgreSQL.
                    </p>

                    <p className='content-p'>
                        Construção de APIs em Node.js usando express.</p>

                    <p className='content-p'>Além disso, aprendendo e desenvolvendo competências comportamentais, como autoconhecimento, capacidade de dar e receber feedacks, trabalhar em equipes, etc.</p>
                </section>

                <section className='section'>
                    <h2 className='content-title'>Lista de ferramentas e linguagens</h2>
                    <Icones />
                </section>

            </main>

            <Footer />
        </section>
    )
}