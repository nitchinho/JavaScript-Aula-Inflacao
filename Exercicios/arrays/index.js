// let tabela = [
//   {equipe: 'Time Azul', pontos: 25 },
//   {equipe: 'Time Verde', pontos: 47 },
//   {equipe: 'Time Amarelo', pontos: 39 },
//   {equipe: 'Time Vermelho', pontos: 16 },
// ];

// function ordenaMaisPontos(a, b){
//   return b.pontos - a.pontos;
// }

// tabela.sort(ordenaMaisPontos);

// for(let i = 0; i < tabela.length; i++)
// {
//   let posicao = i+1;
//   console.log(posicao+" | "+tabela[i].equipe+" - "+tabela[i].pontos+" pts");
// }

// const chuvaDeMeteoros = [
//   { nome: 'Alfa Centaurídeos',     declinacao: -59 },
//   { nome: 'Gama Normídeos',         declinacao:         -50 },
//   { nome: 'Pi Pupídeos',                    declinacao:       -45 },
//   { nome: 'Líridas',                     declinacao:   34  },
//   { nome: 'Eta Aquáridas',               declinacao:         -1  },
//   { nome: 'Eta Líridas',           declinacao:       44  },
//   { nome: 'Bootídeos de Junho',             declinacao: 48  },
//   { nome: 'Alfa Capricornídeos',    declinacao:          -10 },
//   { nome: 'Delta Aquáridas do Sul', declinacao:        -16 },
//   { nome: 'Piscis Austrinídeos',             declinacao:   -30 },
//   { nome: 'Perseidas',              declinacao:     58  },
// ];

// const chuvasNoNorte = chuvaDeMeteoros.filter(
//   (chuva) => chuva.declinacao >= 0
// );

// const chuvasNoSul = chuvaDeMeteoros.filter(
//   (chuva) => chuva.declinacao < 0
// );

// const imprimirChuva = function(chuva) {
//   console.log(chuva);
// };

// console.log("\nChuvas no hemisfério Norte:");
// chuvasNoNorte.forEach( imprimirChuva );

// console.log("\nChuvas no hemisfério Sul:");
// chuvasNoSul.forEach( imprimirChuva );

// const itensOpcionais = [
//   { nome: 'Pré som', valor: 800 },
//   { nome: 'Conta-giros', valor: 500 },
//   { nome: 'Desembaçador traseiro', valor: 1000 },
//   { nome: 'Ar quente', valor: 1800 },
// ];

// const valorTotal = itensOpcionais.reduce( ( total, item ) => {
//      return total += item.valor
// }, 0);

// console.log('R$ ' + valorTotal.toFixed(2));

// const tipoProduto = 'Eletrônicos';

// switch (tipoProduto) {
//   case 'Eletrônicos':
//     console.log( 'Este produto possui desconto de 20%' );
//     break;
//     case 'Ferramentas':
//     console.log( 'Este produto possui desconto de 15%' );
//     break;
//   default:
//     console.log( 'Este produto não possui desconto!' );
//     break;
// }

// Alunos aprovados
// Crie um código para percorrer o array 'alunos' e retornar apenas os alunos que possuem a média maior ou igual a 7. Em seguida,
//percorra o array 'aprovados' para imprimir os nomes dos alunos.

// const alunos = [
//   { nome: "José", av1: 10, av2: 5, av3: 7 },
//   { nome: "Ana", av1: 1, av2: 10, av3: 10 },
//   { nome: "Fernando", av1: 0, av2: 5, av3: 7 },
//   { nome: "Diego", av1: 10, av2: 2, av3: 8 },
// ];

// const aprovados = alunos.filter( aluno => {
//   const media = (aluno.av1 + aluno.av2 + aluno.av3) / 3;

//   return ( media >= 7);
// });

// aprovados.map((aluno) => console.log(aluno.nome));

// const hoje = new Date();
// const diaSemana = hoje.getDay();

// ________ (diaSemana) {
//   case 0:
//   case 2:
//   case 4:
//   case 6:
//     console.log('Plantão');
//     break;
//   default:
//     console.log("Folga");
// }

// Qual alternativa completa o código abaixo para imprimir as chuvas de meteoros que começam com a letra 'A':

// const chuvaDeMeteoros = [
//   { nome: 'Alfa Centaurídeos',	    declinacao:	-59 },
//   { nome: 'Gama Normídeos',	        declinacao:	-50 },
//   { nome: 'Pi Pupídeos',	          declinacao:	-45 },
//   { nome: 'Líridas',	              declinacao:	34  },
//   { nome: 'Eta Aquáridas',	        declinacao:	-1  },
//   { nome: 'Eta Líridas',	          declinacao:	44  },
//   { nome: 'Bootídeos de Junho',	    declinacao:	48  },
//   { nome: 'Alfa Capricornídeos',    declinacao:	-10 },
//   { nome: 'Delta Aquáridas do Sul', declinacao:	-16 },
//   { nome: 'Piscis Austrinídeos',	  declinacao:	-30 },
//   { nome: 'Perseidas',	            declinacao:	58  },
// ];

// chuvaDeMeteoros.forEach( (chuva) => {
//   if(chuva.nome[0] == 'A') {
//     console.log(chuva.nome)
//   }
// });

// Questão #6422
// Média da turma
// Imprima a média da turma na primeira avaliação (mediaTurmaAv1).
// - 'qntAlunos' recebe a quantidade de elementos do array 'alunos'.
// - A variável 'total' será inicializada com o valor 0.

// const alunos = [
//   { nome: "José", av1: 10, av2: 5, av3: 7 },
//   { nome: "Ana", av1: 1, av2: 10, av3: 10 },
//   { nome: "Fernando", av1: 0, av2: 5, av3: 7 },
//   { nome: "Diego", av1: 10, av2: 2, av3: 8 },
// ];

// const qntAlunos = alunos.length;

// const mediaTurmaAv1 = alunos.reduce((total, aluno) => {
//   return total + aluno.av1;
// // }, total = 0);

// console.log( mediaTurmaAv1 / qntAlunos )

// Imprimindo marca e modelo
// Percorra o array 'carros' e imprima respectivamente a marca e o modelo:

// const carros = [
//   { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
//   { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
//   { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
//   { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
// ];

// carros.map( carro => {
//   console.log( carro.marca + ' - ' + carro.modelo);
// });

// Questão #6386
// Cumprimentando o usuário
// Crie um código para cumprimentar o usuário baseado na hora atual. Imprima a mensagem no terminal.

// const dataAtual = new Date();

// const hora = dataAtual.getHours();

// let msg = "";

//  if ( hora < 6 || hora >= 18 ) {
//   msg = 'Boa noite\n';
// }else if  (hora >= 6  && hora < 12 ) {
//   msg = 'Bom dia\n';
// }else {
//   msg = 'Boa tarde\n';
// }

// console.log(msg);

// Questão #6378
// Carros do ano
// Qual alternativa completa o código abaixo para percorrer o array 'carros' e criar um novo array que possua apenas os carros fabricados no ano atual?

// const carros = [
//   { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
//   { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
//   { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
//   { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2023 },
// ];

// const hoje = new Date();
// const anoAtual = hoje.getFullYear();

// const carrosDoAno = carros.filter( carro => carro.anoFabricacao == anoAtual);
// console.log(carrosDoAno);

// Questão #6388
// Listando os jogos
// Qual alternativa completa o código abaixo para listar os nomes dos jogos?

// const jogos = [
//   { id: 1, nome: 'Galaxian', anoLancamento: 1979, plataforma: 'Fliperama' },
//   { id: 2, nome: 'Donkey Kong', anoLancamento: 1981, plataforma: 'Fliperama' },
//   { id: 3, nome: 'Ms. Pac-Man', anoLancamento: 1981, plataforma: 'Fliperama' },
//   { id: 4, nome: 'Payday 2 ', anoLancamento: 2011, plataforma: 'Xbox 360' },
//   { id: 5, nome: 'God of War 4', anoLancamento: 2020, plataforma: 'PS4' },
//   { id: 6, nome: 'Spider-Man: Miles Morales', anoLancamento: 2020, plataforma: 'PS4' },
// ];

// jogos.forEach((jogo) => {
//   console.log(jogo.nome);
// });

// Questão #6385
// Valor total
// Crie um código para somar os valores de 'jogos' e imprimir no terminal:

// const jogos = [
//   { id: 1, nome: 'Resident Evil 7', preco: 250 },
//   { id: 2, nome: 'God of War', preco: 300 },
//   { id: 3, nome: 'Stronghold Warlords', preco: 280 },
// ];

// const total = jogos.reduce((total, jogo) => {
//    return total + jogo.preco;
// }, 0);

// console.log(total);

// Questão #6424
// Nomes dos produtos
// Imprima no terminal uma string com os nomes dos produtos:

// const produtos = [
//   { id: 1, nome: 'Açúcar', ativo: true, valor: 2.00 },
//   { id: 2, nome: 'Álcool 70', ativo: false, valor: 9.95 },
//   { id: 3, nome: 'Luvas descartáveis', ativo: false, valor: 2.50 },
//   { id: 3, nome: 'Papel toalha', ativo: true, valor: 2.50 },
// ];

// let nomesProdutos = produtos.reduce( (  ) => {
//    resultado + produto.nome + ', ';
// }, "" );

// (nomesProdutos);

// Questão #6403
// Valor total
// Crie um código para percorrer o array 'itensCarrinho' e retornar o valor total dos produtos:

// const itensCarrinho = [
//   { id: 1, nome: 'Açucar', qnt: 2, valor: 2.00 },
//   { id: 2, nome: 'Álcool 70', qnt: 3, valor: 9.95 },
//   { id: 3, nome: 'Luvas descartáveis', qnt: 50, valor: 2.50 },
//   { id: 4, nome: 'Papel toalha', qnt: 1, valor: 2.00 },
// ];

// const totalAPagar = itensCarrinho.reduce( function(total, itemCarrinho) {
//   const valorItem = itemCarrinho.qnt * itemCarrinho.valor;

//    return total + valorItem;
// }, 0);


// console.log(totalAPagar);

// Questão #6412
// Quantidade de volumes
// Imprima a quantidade de volumes presente em 'itensCarrinho' (propriedade 'qnt').

// const itensCarrinho = [
//   { id: 1, nome: 'Açucar', qnt: 2, valor: 2.00 },
//   { id: 2, nome: 'Álcool 70', qnt: 3, valor: 9.95 },
//   { id: 3, nome: 'Luvas descartáveis', qnt: 50, valor: 2.50 },
//   { id: 4, nome: 'Papel toalha', qnt: 1, valor: 2.00 },
// ];

// const totalVolume = itensCarrinho.reduce( (total, itemCarrinho) => {
//  return  (total + itemCarrinho.qnt);
// }, 0);


// // console.log(totalVolume);

// // Questão #6395
// // Ano seguinte
// // Crie um código para imprimir o próximo ano:

// // - 'ano' recebe o ano armazenado na variável 'dataAtual'.
// // - 'proximoAno' recebe o valor de 'ano' mais um.

// const dataAtual = new Date();

// const ano = dataAtual.getFullYear();
// const proximoAno = ano + 1;

// console.log(proximoAno);

// Jogos de fliperama
// Crie um código para guardar os jogos de fliperama na variável 'jogosFliperama'.
// O código possui duas funções, uma para imprimir os jogos no terminal e outra para filtrar os jogos de fliperama.

// const jogos = [
//   { id: 1, nome: 'Galaxian', anoLancamento: 1979, plataforma: 'Fliperama' },
//   { id: 2, nome: 'Donkey Kong', anoLancamento: 1981, plataforma: 'Fliperama' },
//   { id: 3, nome: 'Ms. Pac-Man', anoLancamento: 1981, plataforma: 'Fliperama' },
//   { id: 4, nome: 'Payday 2 ', anoLancamento: 2011, plataforma: 'Xbox 360' },
//   { id: 5, nome: 'God of War 4', anoLancamento: 2020, plataforma: 'PS4' },
//   { id: 6, nome: 'Spider-Man: Miles Morales', anoLancamento: 2020, plataforma: 'PS4' },
// ];

//  function imprimirJogo(jogo) {
//   console.log( jogo.nome + ' - ' + jogo.anoLancamento );
// }

//  function retornaJogosFliperama(jogo) {
//   return jogo.plataforma == 'Fliperama';
// };

// const jogosFliperama = jogos.filter(retornaJogosFliperama);

// jogosFliperama.forEach(imprimirJogo);
