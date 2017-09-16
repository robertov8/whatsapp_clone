import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    ActivityIndicator
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

const backGround = require('../imgs/bg.png');

class FormLogin extends Component {

    _autenticarUsuario() {
        const { email, senha } = this.props;
        this.props.autenticarUsuario({ email, senha });
    }

    renderBtnAcessar() {
        if (this.props.loading_login) {
            return ( <ActivityIndicator size='large' /> );
        }
        return (
            <Button
                title='Acessar'
                color='#115E54'
                onPress={() => this._autenticarUsuario()}
            />
        );
    }

    render() {
        return (
            <Image style={{ flex: 1, width: null }} source={backGround}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 25, color: '#fff' }}>WhatsApp Clone</Text>
                    </View>

                    <View style={{ flex: 2 }}>
                        <TextInput
                            value={this.props.email}
                            style={{ fontSize: 20, height: 45 }}
                            placeholder='E-mail'
                            placeholderTextColor='#fff'
                            onChangeText={texto => this.props.modificaEmail(texto)}
                        />
                        <TextInput
                            value={this.props.senha}
                            style={{ fontSize: 20, height: 45 }}
                            placeholder='Senha'
                            placeholderTextColor='#fff'
                            onChangeText={texto => this.props.modificaSenha(texto)}
                            secureTextEntry
                        />

                        <Text style={{ color: '#ff0000', fontSize: 18 }}>{this.props.erroLogin}</Text>
                        <TouchableHighlight onPress={() => Actions.formCadastro()}>
                            <Text style={{ fontSize: 20, color: '#fff' }}>Ainda não tem cadastro? Cadastre-se</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={{ flex: 2 }}>
                        { this.renderBtnAcessar() }
                    </View>
                </View>
            </Image>
        );
    }
}

const mapStateToProps = state => ({
    email: state.AutenticaoReducer.email,
    senha: state.AutenticaoReducer.senha,
    erroLogin: state.AutenticaoReducer.erroLogin,
    loading_login: state.AutenticaoReducer.loading_login
});

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(FormLogin);
