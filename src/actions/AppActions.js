import { MODIFICA_ADICIONA_CONTATO_EMAIL } from './types';

export const modificaAdicionarContatoEmail = (texto) => {
    return {
        type: MODIFICA_ADICIONA_CONTATO_EMAIL,
        payload: texto
    };
}

export const adicionaContato = (email) => {
    console.log(email);
    return {
        type: ''
    }
}
