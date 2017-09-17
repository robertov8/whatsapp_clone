import {
    MODIFICA_ADICIONA_CONTATO_EMAIL,
    ADICIONA_CONTATO_ERRO,
    ADICIONA_CONTATO_SUCESSO,
    MODIFICA_MENSAGEM
} from '../actions/types';

const INITIAL_STATE = {
    adiciona_contato_email: '',
    cadastro_resultado_txt_erro: '',
    cadastro_resultado_inclusao: false,
    mensagem: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action.type);
    switch(action.type) {
        case MODIFICA_ADICIONA_CONTATO_EMAIL:
            return { ...state, adiciona_contato_email: action.payload };
            break;
        case ADICIONA_CONTATO_ERRO:
            return { ...state, cadastro_resultado_txt_erro: action.payload };
            break;
        case ADICIONA_CONTATO_SUCESSO:
            return { ...state, cadastro_resultado_inclusao: action.payload, adiciona_contato_email: '' };
            break;
        case MODIFICA_MENSAGEM:
            return { ...state, mensagem: action.payload };
            break;

        default:
            return state;
    }
}
