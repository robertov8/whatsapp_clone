import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    Image,
    ListView
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { modificaMensagem, enviarMensagem, conversaUsuarioFetch } from '../actions/AppActions';

const btnEnviar = require('../imgs/enviar_mensagem.png');

class Conversa extends Component {

    componentWillMount() {
        this.props.conversaUsuarioFetch(this.props.contatoEmail);
        this.criaFonteDeDados(this.props.conversa);
    }

    componentWillReceiveProps(nextProps) {
        this.criaFonteDeDados(nextProps.conversa);
    }

    criaFonteDeDados(conversa) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.dataSource = ds.cloneWithRows(conversa);
    }


    _enviarMensagem() {
        const { mensagem, contatoNome, contatoEmail } = this.props;

        this.props.enviarMensagem(mensagem, contatoNome, contatoEmail);
    }

    renderRow(texto) {
        return (
            <View>
                <Text>{texto.mensagem}</Text>
                <Text>{texto.tipo}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#eee4dc', padding: 10 }}>
                <View style={{ flex: 1, paddingBottom: 20 }}>
                    <ListView
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow={this.renderRow}
                    />
                </View>

                <View style={{ flexDirection: 'row', height: 60 }}>
                    <TextInput
                        value={this.props.mensagem}
                        onChangeText={texto => this.props.modificaMensagem(texto)}
                        style={{ flex: 4, backgroundColor: '#fff', fontSize: 18 }}
                    />

                    <TouchableHighlight
                        onPress={this._enviarMensagem.bind(this)}
                        underlayColor='#fff'
                    >
                        <Image source={btnEnviar} />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {

    const conversa = _.map(state.ListaConversaReducer, (val, uid) => {
        return { ...val, uid };
    });

    return ({
        conversa,
        mensagem: state.AppReducer.mensagem
    });
};

export default connect(mapStateToProps, { modificaMensagem, enviarMensagem, conversaUsuarioFetch })(Conversa);
