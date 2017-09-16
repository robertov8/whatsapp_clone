const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroLogin: ''
}
import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO
} from '../actions/types';

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type) {
        case MODIFICA_NOME:
            return { ...state, nome: action.payload };
            break;
        case MODIFICA_EMAIL:
            return { ...state, email: action.payload };
            break;
        case MODIFICA_SENHA:
            return { ...state, senha: action.payload };
            break;
        case CADASTRO_USUARIO_ERRO:
            return { ...state, erroCadastro: action.payload };
            break;
        case CADASTRO_USUARIO_SUCESSO:
            return { ...state, nome: '', senha: '' };
            break;
        case LOGIN_USUARIO_ERRO:
            return { ...state, erroLogin: action.payload };
            break;

        default:
            return state;
    }
}
