// const valida_senha = (senha) =>  {

//     if ( senha.length >= 10 ){
//         return true;
//     } else {
//         return false;
//     }

// }

// export default valida_senha;

// const verifica_data_range = (data, data_inicio, data_fim, tipo_comparacao) => {

//     if ( tipo_comparacao == "and" ){
//         return (data >= data_inicio && data <= data_fim);
//     } else if( tipo_comparacao == "or" ){
//         return (data >= data_inicio || data <= data_fim);
//     }

// }

// const retorna_signo = (signos, data) => {

//     let ano = data.getFullYear();

//     for ( const signo of signos ){

//         let data_inicio_signo = new Date(ano + "-" + signo["DataInicio"] + " 00:00:00");
//         let data_fim_signo = new Date(ano + "-" + signo["DataFim"] + " 23:59:59");

//         let tipo_comparacao = signo["DataInicio"] == "12-22" ? "or" : "and";

//         if (verifica_data_range(data, data_inicio_signo, data_fim_signo, tipo_comparacao)){
//             return signo["Nome"];
//         }

//     }

// }

// export default retorna_signo;

// const retorna_media = (nota_1, nota_2) => {

//     let media = (nota_1 + nota_2) / 2;
//     return media;

// }

// export default retorna_media;

const verifica_data_range = (data, data_inicio, data_fim, tipo_comparacao) => {

    if ( tipo_comparacao == "and" ){
        return (data >= data_inicio && data <= data_fim);
    } else if( tipo_comparacao == "or" ){
        return (data >= data_inicio || data <= data_fim);
    }

}

const retorna_signo = (signos, data) => {

    let ano = data.getFullYear();

    for ( const signo of signos ){

        let data_inicio_signo = new Date(ano + "-" + signo["DataInicio"] + " 00:00:00");
        let data_fim_signo = new Date(ano + "-" + signo["DataFim"] + " 23:59:59");

        let tipo_comparacao = signo["DataInicio"] == "12-22" ? "or" : "and";

        if (verifica_data_range(data, data_inicio_signo, data_fim_signo, tipo_comparacao)){
            return signo["Nome"];
        }

    }

}

export default retorna_signo;