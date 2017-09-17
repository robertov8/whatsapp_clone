import b64 from 'base-64';
import firebase from 'firebase';
import _ from 'lodash';

import {
    MODIFICA_ADICIONA_CONTATO_EMAIL,
    ADICIONA_CONTATO_ERRO,
    ADICIONA_CONTATO_SUCESSO,
    LISTA_CONTATO_USUARIO,
    MODIFICA_MENSAGEM,
    LISTA_CONVERSA_USUARIO,
    ENVIA_MENSAGEM_SUCESSO
} from './types';

export const modificaAdicionarContatoEmail = (texto) => {
    return {
        type: MODIFICA_ADICIONA_CONTATO_EMAIL,
        payload: texto
    };
}

export const adicionaContato = (email) => {

    return dispatch => {
        let emailB64 = b64.encode(email);

        firebase.database().ref(`/contatos/${emailB64}`)
        .once('value')
        .then((snapshot) => {
            if (snapshot.val()) {
                // email do contato que queremos adicionar
                const dadosUsuario = _.first(_.values(snapshot.val()));
                console.log(dadosUsuario);

                // email do usuário autenticado.
                const { currentUser } = firebase.auth();
                let emailUsuarioB64 = b64.encode(currentUser.email);

                firebase.database()
                    .ref(`/usuario_contatos/${emailUsuarioB64}`)
                    .push({ email, nome: dadosUsuario.nome })
                    .then(() => adicionaContatoSucesso(dispatch))
                    .catch(erro => adicionaContatoErro(erro.message, dispatch));
            } else {
                dispatch({
                    type: ADICIONA_CONTATO_ERRO,
                    payload: 'E-mail informado não corresponde a um usuário válido!'
                });
            }
        });
    }
}

const adicionaContatoErro = (erro, dispatch) => {
    dispatch({
        type: ADICIONA_CONTATO_ERRO,
        payload: erro
    });
};

const adicionaContatoSucesso = (dispatch) => {
    dispatch({ type: ADICIONA_CONTATO_SUCESSO, payload: true });
}

export const habilitaInclusaoContato = () => ({
    type: ADICIONA_CONTATO_SUCESSO,
    payload: false
});

export const contatosUsuarioFetch = () => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        let emailUsuarioB64 = b64.encode(currentUser.email);

        firebase.database()
            .ref(`/usuario_contatos/${emailUsuarioB64}`)
            .on('value', snapshot => {
                dispatch({ type: LISTA_CONTATO_USUARIO, payload: snapshot.val() });
            });
    }
}

export const modificaMensagem = (texto) => {
    return ({ type: MODIFICA_MENSAGEM, payload: texto });
}

export const enviarMensagem = (mensagem, contatoNome, contatoEmail) => {

    // dados do usuário (email)
    const { currentUser } = firebase.auth();
    const usuarioEmail = currentUser.email;

    return dispatch => {

        // Conversão para base 64
        const usuarioEmail64 = b64.encode(usuarioEmail);
        const contatoEmail64 = b64.encode(contatoEmail);

        firebase.database()
            .ref(`/mensagens/${usuarioEmail64}/${contatoEmail64}`)
            .push({ mensagem, tipo: 'e' })
            .then(() => {

                firebase.database()
                    .ref(`/mensagens/${contatoEmail64}/${usuarioEmail64}`)
                    .push({ mensagem, tipo: 'r' })
                    .then(() => dispatch({ type: ENVIA_MENSAGEM_SUCESSO }));
            })
            .then(() => {
                // armazenar os cabeçalho de conversa do usuário autenticado
                firebase.database()
                    .ref(`/usuario_conversas/${usuarioEmail64}/${contatoEmail64}`)
                    .set({ nome: contatoNome, email: contatoEmail });
            })
            .then(() => {
                // armazenar o cabeçalho de covnersa do contato.
                firebase.database()
                    .ref(`/contatos/${usuarioEmail64}`)
                    .once('value')
                    .then(snapshot => {

                        const dadosUsuario = _.first(_.values(snapshot.val()));

                        firebase.database()
                        .ref(`/usuario_conversas/${contatoEmail64}/${usuarioEmail64}`)
                        .set({ nome: dadosUsuario.nome, email: usuarioEmail });
                    })
            });
    }
}

export const conversaUsuarioFetch = (contatoEmail) => {

    const { currentUser } = firebase.auth();

    // compor os emails na base64
    let usuarioEmail64 = b64.encode(currentUser.email);
    let contatoEmail64 = b64.encode(contatoEmail);

    return dispatch => {
        firebase.database()
            .ref(`/mensagens/${usuarioEmail64}/${contatoEmail64}`)
            .on('value', snapshot => {
                dispatch({ type: LISTA_CONVERSA_USUARIO, payload: snapshot.val() });
            })
    }
}
