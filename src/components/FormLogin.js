import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default props => (
    <View>
        <View>
            <Text>WhatsApp Clone</Text>
        </View>

        <View>
            <TextInput placeholder='E-mail' />
            <TextInput placeholder='Senha' />
        </View>

        <View>
            <Button title='Acessar' onPress={() => false}/>
        </View>
    </View>
)
