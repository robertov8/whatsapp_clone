import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import Routes from './Routes';
import reducers from './reducers';
import { config } from './firebase.js';

const store = createStore(reducers);

class App extends Component {

    componentWillMount() {
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
