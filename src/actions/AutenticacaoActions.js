import firebase from 'firebase';

export const modificaNome = (texto) => {
    return {
        type: 'modifica_nome',
        payload: texto
    };
};

export const modificaEmail = (texto) => {
    return {
        type: 'modifica_email',
        payload: texto
    };
};

export const modificaSenha = (texto) => {
    return {
        type: 'modifica_senha',
        payload: texto
    };
};

export const cadastraUsuario = ({ nome, email, senha }) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(user => cadastroUsuarioSucesso(dispatch))
        .catch(erro => cadastroUsuarioErro(erro, dispatch));
    };
};

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch ({ type: 'sucesso' });
};

const cadastroUsuarioErro = (erro, dispatch) => {
    dispatch ({ type: 'erro' });
};
