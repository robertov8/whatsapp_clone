import React, { Component } from 'react';
import { View, TextInput, Button, Image } from 'react-native';
import { connect } from 'react-redux';

import { modificaNome, modificaEmail, modificaSenha } from '../actions/AutenticacaoActions';

const backGround = require('../imgs/bg.png');

class FormCadastro extends Component {
    render() {
        return (
            <Image style={{ flex: 1, width: null }} source={backGround}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 4, justifyContent: 'center' }}>
                        <TextInput
                            value={this.props.nome}
                            style={{ fontSize: 20, height: 45 }}
                            placeholder='Nome'
                            placeholderTextColor='#fff'
                            onChangeText={texto => this.props.modificaNome(texto)}
                        />
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
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button title='Cadastrar' color='#115E54' onPress={() => false } />
                    </View>
                </View>
            </Image>
        );
    }
}

const mapStateToProps = state => ({
    nome: state.AutenticaoReducer.nome,
    email: state.AutenticaoReducer.email,
    senha: state.AutenticaoReducer.senha
});

export default connect(mapStateToProps, { modificaNome, modificaEmail, modificaSenha })(FormCadastro);
