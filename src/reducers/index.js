import { combineReducers } from 'redux';

import AutenticaoReducer from './AutenticaoReducer';
import AppReducer from './AppReducer';

export default combineReducers({
    AutenticaoReducer,
    AppReducer
});
