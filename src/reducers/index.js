import { combineReducers } from 'redux';

import AutenticaoReducer from './AutenticaoReducer';
import AppReducer from './AppReducer';
import ListaContatosReducer from './ListaContatosReducer'
import ListaConversaReducer from './ListaConversaReducer';

export default combineReducers({
    AutenticaoReducer,
    AppReducer,
    ListaContatosReducer,
    ListaConversaReducer
});
