import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, Image } from 'react-native';

const btnEnviar = require('../imgs/enviar_mensagem.png');

export default class Conversa extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#eee4dc', padding: 10 }}>
                <View style={{ flex: 1, paddingBottom: 20 }}></View>

                <View style={{ flexDirection: 'row', height: 60 }}>
                    <TextInput
                        style={{ flex: 4, backgroundColor: '#fff', fontSize: 18 }}
                    />

                    <TouchableHighlight
                        onPress={() => false}
                        underlayColor='#fff'
                    >
                        <Image source={btnEnviar} />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
