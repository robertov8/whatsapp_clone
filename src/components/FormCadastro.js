import React from 'react';
import { View, TextInput, Button } from 'react-native';

export default props => (
    <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 4, justifyContent: 'center' }}>
            <TextInput style={{ fontSize: 20, height: 45 }} placeholder='Nome' />
            <TextInput style={{ fontSize: 20, height: 45 }} placeholder='E-mail' />
            <TextInput style={{ fontSize: 20, height: 45 }} placeholder='Senha' />
        </View>
        <View style={{ flex: 1 }}>
            <Button title='Cadastrar' color='#115E54' onPress={() => false} />
        </View>
    </View>
);
