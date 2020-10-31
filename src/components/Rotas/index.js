import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../Home';
import Contato from '../Contato';
import Portifolio from '../Portifolio';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/portifolio' component={Portifolio}/>
                <Route path='/contato' component={Contato}/>
            </Switch>
        </BrowserRouter>
    )
}