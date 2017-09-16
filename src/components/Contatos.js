import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { contatosUsuarioFetch } from '../actions/AppActions';

class Contatos extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = { fonteDeDados: ds.cloneWithRows([
            'Registro 1',
            'Registro 2',
            'Registro 3',
            'Registro 4'
        ])};
    }

    componentWillMount() {
        this.props.contatosUsuarioFetch();
    }

    render() {
        return (
            <ListView
                dataSource={this.state.fonteDeDados}
                renderRow={data => <View><Text>{data}</Text></View>}
            />
        );
    }
}

const mapStateToProps = state => {
    const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
        return { ...val, uid };
    });
    console.log(contatos);
    return {}
};

export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos);
