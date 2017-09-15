import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

import { modificaNome, modificaEmail, modificaSenha } from '../actions/AutenticacaoActions';

class FormCadastro extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 10 }}>
                <View style={{ flex: 4, justifyContent: 'center' }}>
                    <TextInput
                        value={this.props.nome}
                        style={{ fontSize: 20, height: 45 }}
                        placeholder='Nome'
                        onChangeText={texto => this.props.modificaNome(texto)}
                    />
                    <TextInput
                        value={this.props.email}
                        style={{ fontSize: 20, height: 45 }}
                        placeholder='E-mail'
                        onChangeText={texto => this.props.modificaEmail(texto)}
                    />
                    <TextInput
                        value={this.props.senha}
                        style={{ fontSize: 20, height: 45 }}
                        placeholder='Senha'
                        onChangeText={texto => this.props.modificaSenha(texto)}
                        secureTextEntry
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Button title='Cadastrar' color='#115E54' onPress={() => false } />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    nome: state.AutenticaoReducer.nome,
    email: state.AutenticaoReducer.email,
    senha: state.AutenticaoReducer.senha
});

export default connect(mapStateToProps, { modificaNome, modificaEmail, modificaSenha })(FormCadastro);
