import b64 from 'base-64';
import firebase from 'firebase';

import {
    MODIFICA_ADICIONA_CONTATO_EMAIL,
    ADICIONA_CONTATO_ERRO
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
                console.log(snapshot.val());

                // email do usuário autenticado.
                const { currentUser } = firebase.auth();
                let emailUsuarioB64 = b64.encode(currentUser.email);

                firebase.database()
                    .ref(`/usuario_contatos/${emailUsuarioB64}`)
                    .push({ email, nome: 'Nome do contato' })
                    .then(() => console.log('Sucesso'))
                    .catch(erro => console.log(erro.message));
            } else {
                dispatch({
                    type: ADICIONA_CONTATO_ERRO,
                    payload: 'E-mail informado não corresponde a um usuário válido!'
                });
            }
        });
    }
}
