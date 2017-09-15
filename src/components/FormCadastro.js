import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

class FormCadastro extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 10 }}>
                <View style={{ flex: 4, justifyContent: 'center' }}>
                    <TextInput value={this.props.nome} style={{ fontSize: 20, height: 45 }} placeholder='Nome' />
                    <TextInput value={this.props.email} style={{ fontSize: 20, height: 45 }} placeholder='E-mail' />
                    <TextInput value={this.props.senha} style={{ fontSize: 20, height: 45 }} placeholder='Senha' />
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

export default connect(mapStateToProps, null)(FormCadastro);
