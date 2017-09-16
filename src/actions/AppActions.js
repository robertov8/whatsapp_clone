import { MODIFICA_ADICIONA_CONTATO_EMAIL } from './types';

export const modificaAdicionarContatoEmail = (texto) => {
    console.log('Chegamos aqui');
    console.log(texto);
    return {
        type: MODIFICA_ADICIONA_CONTATO_EMAIL,
        payload: texto
    };
}
