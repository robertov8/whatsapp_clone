import React from 'react';
import { View, Text, Button, Image } from 'react-native';

const backGround = require('../imgs/bg.png');
const logo = require('../imgs/logo.png');

export default props => (
    <Image style={{ flex: 1, width: null }} source={backGround}>
        <View style={{ flex: 1, padding: 15}}>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Seja Bem-Vindo</Text>
                <Image source={logo} />
            </View>

            <View style={{ flex: 1 }}>
                <Button
                    title='Fazer Login'
                    onPress={() => false}
                />
            </View>
        </View>
    </Image>
);
