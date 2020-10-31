import React from 'react';

import typescript from '../../../assets/icones/typescript.svg';
import javascript from '../../../assets/icones/javascript.svg';
import html from '../../../assets/icones/html.svg';
import css from '../../../assets/icones/css.svg';
import react from '../../../assets/icones/react.svg';
import node from '../../../assets/icones/node.svg';
import git from '../../../assets/icones/git.svg';
import bootstrap from '../../../assets/icones/bootstrap.svg';
import postgresql from '../../../assets/icones/postgresql.svg';
import mongodb from '../../../assets/icones/mongodb.svg';


import './style.css';

export default function Icones() {

    return(
        <div id='icones'>
            <img className='redondos' src={javascript} alt='JavaScript' title='JavaScript'/>
            <img className='redondos' src={typescript} alt='TypeScript'title='TypeScript'/>
            <img src={html} alt='HTML' title='HTML'/>
            <img src={css} alt='CSS' title='CSS'/>
            <img src={react} alt='ReactJS' title='ReactJS'/>
            <img src={react} alt='React Native' title='React Native'/>
            <img src={bootstrap} alt='Bootstrap' title='Bootstrap'/>
            <img src={node} alt='NodeJS' title='NodeJS'/>
            <img src={git} alt='Git' title='Git'/>
            <img src={mongodb} alt='MongoDB' title='MongoDB'/>
            <img src={postgresql} alt='PostgreSQL' title='PostgreSQL'/>
        </div>
    )
}