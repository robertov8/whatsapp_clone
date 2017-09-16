import { MODIFICA_ADICIONA_CONTATO_EMAIL } from '../actions/types';

const INITIAL_STATE = {
    adiciona_contato_email: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type) {
        case MODIFICA_ADICIONA_CONTATO_EMAIL:
            return { ...state, adiciona_contato_email: action.payload };
            break;

        default:
            return state;
    }
}
