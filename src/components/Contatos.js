import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { contatosUsuarioFetch } from '../actions/AppActions';

class Contatos extends Component {

    componentWillMount() {
        this.props.contatosUsuarioFetch();
    }

    render() {
        return (
            <View>
                <Text>Contatos</Text>
            </View>
        );
    }
}

export default connect(null, { contatosUsuarioFetch })(Contatos);
