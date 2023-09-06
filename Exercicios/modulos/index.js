// // Questão #5450
// // Selecionando parte da string
// // Preencha lacuna para que o código possa imprimir a substring "aprendendo":

// // OBS.: Utilize o método substring() e não use índices negativos

// let string = "Estou aprendendo JavaScript na DevMedia";

// let resultado = string.substring(6,16);

// console.log(resultado);

// // Questão #5416
// // Problema no arquivo
// // Observe o código abaixo e analise qual das alternativas o identifica corretamente:

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

// // Verificando tamanho de string
// // A função "verifica_tamanho_login" deve verificar se o tamanho da string de um login informado é maior que 0. Complete as partes do
// // código abaixo exportando a função como recurso padrão do módulo.
// // OBS.: Use a sintaxe "arrow function" para criar a função.

// const verifica_tamanho_login = (login) => {    

//     if( login.length > 0 ){
//         return true;
//     } else {
//         return false;
//     }
// }

// // Questão #5428
// // Importando recursos dos módulos
// // Complete o código abaixo para que os recursos dos módulos sejam importados corretamente.
// // O código deve considerar os itens:
// // - Deve-se importar os dados que têm o nome "colecao_signos" e estão no arquivo "dados.js";
// // - Também deve ser importada a função "retorna_signo" que está no arquivo funcoes.js;

// // OBS.: Tanto colecao_signos como retorna_signo foram exportados como default nesses arquivos.

//  import colecao_signos from './dados/dados.js';
//  import retorna_signo from './funcoes/funcoes.js';

// let data_app = new Date();

// const nome_signo = retorna_signo(colecao_signos, data_app);

// console.log("O signo de hoje é: " + nome_signo);

// // Questão #5442
// // Imprimindo o total de carros
// // Preencha as lacunas abaixo para que o total de carros possa ser impresso no final do código.
// // OBS.: Todas as variáveis devem ser criadas com "let".

// let carros = ["Civic", "Elantra", "Focus", "Jetta", "Cruze", "Corolla"];
// let total_carros = carros.length;
// console.log(total_carros);

// Questão #5419
// Validando tamanho de senha
// Preencha as lacunas dos códigos a seguir de modo que a aplicação possa validar o tamanho de uma senha.
//Nessa aplicação a senha deve ter no mínimo 10 caracteres.
// OBS.: Use "let" na criação das variáveis.

// // Questão #5459
// // Método IndexOf
// // Utilize o método IndexOf para buscar a substring "Script" na string do código. O valor impresso deve ser 15 no final da aplicação

// let string = "Aprendendo JavaScript na DevMedia!";
// let resultado = string.indexOf("Script");
// console.log(resultado);

// const numeros = [ 10, 11, 22, 23, 34, 45, 66, 17, 28, 93, 101 ]
// for (const numero of numeros) {
//  console.log((numero));
// }

// Questão #5440
// Verificando tamanho de string
// A função "verifica_tamanho_login" deve verificar se o tamanho da string de um login informado é maior que 0.
//Complete as partes do código abaixo exportando a função como recurso padrão do módulo.
// OBS.: Use a sintaxe "arrow function" para criar a função.

// const verifica_tamanho_login = (login) => {

//     if( login.length > 0 ){
//         return true;
//     } else {
//         return false;
//     }
// }

// export default verifica_tamanho_login;

// // Questão #5422
// // Arrow function
// // Complete o código abaixo de modo que a arrow function "retorna_media" retorne a média do aluno.

// // OBS.: Use "const" para criar a arrow function

//  const retorna_media = (nota_1, nota_2) => {

//     let media = (nota_1 + nota_2) / 2;
//     return media;
// }

// let media_aluno = retorna_media(9,8);
// console.log("A média do aluno é: " + media_aluno);

// const cores = ["Verde", "Amarelo", "Azul", "Branco"];

// function imprimir(item) {
//     console.log(item);
// }

// cores.forEach(imprimir);

// Função celsius_fahrenheit
// // Complete o código abaixo para que a função "celsius_fahrenheit" possa converter a temperatura corretamente e retornar o valor.

// function celsius_fahrenheit(temperatura_celsius) {

//     let temperatura_fahrenheit = temperatura_celsius * 1.8 + 32;
//     return temperatura_fahrenheit;
// }

// console.log(celsius_fahrenheit(30));

// let nome_completo = " Carlos Aguiar Mendonça    ";

// nome_completo.trim()

// console.log(nome_completo);

// './funcoes/';

// let  = 8;
// let numero_2 = 4;

// const soma = soma_numeros(numero_1,);
// const subtracao = subtracao_numeros(numero_1, numero_2);

// ("A soma entre os números é: " );
// ("A subtração entre os números é: " );


// const numeros = [1, 3, 5, 6, 8, 10, 17];

// const verifica_paridade = (numeros) => {
    
//     for (const numero of numeros)    {
        
//         if(numero % 2 == 0 ){
//             console.log("O número " + numero + " é par");
//         } else {
//             console.log("O número " + numero + " é ímpar");
//         }
        
//     }
// }

// verifica_paridade(numeros);
    
// Questão #5424
// Comparando datas
// Observe as duas datas abaixo:

// const data1 = new Date(2019, 0, 1);
// const data2 = new Date(2019, 0, 1);

// console.log(data1 == data2);