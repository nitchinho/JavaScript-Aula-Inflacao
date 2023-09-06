// import valida_senha from './funcoes.js';

// let senha = "minhaseaaha";

// if (valida_senha(senha)) {
//     console.log("A senha possui no mínimo 10 caracteres");
// } else {
//     console.log("A senha não possui o mínimo 10 caracteres");
// }

// import colecao_signos from './dados.js';
// import retorna_signo from './funcoes.js';

// let data_app = new Date();

// const nome_signo = retorna_signo(colecao_signos, data_app);

// console.log("O signo de hoje é: " + nome_signo);

// import {} from './funcoes.js';

// let nota_1 = 8;
// let nota_2 = 6;

// const media = retorna_media(nota_1, nota_2);
// console.log(media);

import colecao_signos from './dados.js';
import retorna_signo from './funcoes.js';

let data_app = new Date();

const nome_signo = retorna_signo(data_app, colecao_signos);

console.log("O signo de hoje é: " + nome_signo);