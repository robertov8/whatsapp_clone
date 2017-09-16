const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: ''
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type) {
        case 'modifica_nome':
            return { ...state, nome: action.payload };
            break;
        case 'modifica_email':
            return { ...state, email: action.payload };
            break;
        case 'modifica_senha':
            return { ...state, senha: action.payload };
            break;
        case 'cadastro_usuario_erro':
            return { ...state, erroCadastro: action.payload };
            break;
        case 'cadastro_usuario_sucesso':
            return { ...state, nome: '', senha: '' }
        default:
            return state;
    }
    return state;
}
