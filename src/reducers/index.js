import { combineReducers } from 'redux';

import AutenticaoReducer from './AutenticaoReducer';
import AppReducer from './AppReducer';
import ListaContatosReducer from './ListaContatosReducer'
import ListaConversaReducer from './ListaConversaReducer';
import ListaConversasReducer from './ListaConversasReducer';

export default combineReducers({
    AutenticaoReducer,
    AppReducer,
    ListaContatosReducer,
    ListaConversaReducer,
    ListaConversasReducer
});
