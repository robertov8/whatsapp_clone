import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';

export default props => (
    <Router>
        <Stack key='root'>
            <Scene key='formLogin' component={FormLogin} title='Login' />
            <Scene key='formCadastro' component={FormCadastro} title='Cadastro' />
            <Scene key='boasVindas' component={BoasVindas} title='Bem-Vindo' />
            <Scene key='principal' component={Principal} title='Principal' />
        </Stack>
    </Router>
);
