import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import adicionarContato from './components/AdicionarContato';
import Conversa from './components/Conversa';

export default props => (
    <Router
        navigationBarStyle={{ backgroundColor: '#115E54' }}
        titleStyle={{ color: '#fff'}}
    >
        <Stack key='root'>
            <Scene key='formLogin' component={FormLogin} title='Login' hideNavBar={true} />
            <Scene key='formCadastro' component={FormCadastro} title='Cadastro' hideNavBar={false} />
            <Scene key='boasVindas' component={BoasVindas} title='Bem-Vindo' hideNavBar={true} />
            <Scene key='principal' component={Principal} title='Principal' hideNavBar={true} />
            <Scene key='adicionarContato' component={adicionarContato} title='Adicionar Contato' hideNavBar={false} />
            <Scene key='conversa' component={Conversa} title='Adicionar Contato' hideNavBar={false} />
        </Stack>
    </Router>
);
