const lista_salarios = [
    {ano: 2010, salario: 510.00},
    {ano: 2011, salario: 545.00},
    {ano: 2012, salario: 622.00},
    {ano: 2013, salario: 678.00},
    {ano: 2014, salario: 724.00},
    {ano: 2015, salario: 788.00},
    {ano: 2016, salario: 880.00},
    {ano: 2017, salario: 937.00},
    {ano: 2018, salario: 954.00},
    {ano: 2019, salario: 998.00},
    {ano: 2020, salario: 1045.00},
]

const lista_inflacao = [
    {ano: 2010, inflacao: 5.91},
    {ano: 2011, inflacao: 6.50},
    {ano: 2012, inflacao: 5.84},
    {ano: 2013, inflacao: 5.91},
    {ano: 2014, inflacao: 6.41},
    {ano: 2015, inflacao: 10.67},
    {ano: 2016, inflacao: 6.29},
    {ano: 2017, inflacao: 2.95},
    {ano: 2018, inflacao: 3.75},
    {ano: 2019, inflacao: 4.31},
    {ano: 2020, inflacao: 4.52},
]

import rl from 'readline-sync';

console.log("Escolha uma das alternativas:\n");

console.log("1 - Listar os salários mínimos de 2010 à 2020:");
console.log("2 - Listar o índice IPCA  de 2010 à 2020:");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n");

let opcao = rl.question("Digite a opção escolhida: ");
console.log("\n Você escolheu a opção " + opcao);

switch (opcao) {
    case 1:
        for (let salarios of lista_salarios) {
            console.log("Ano: " + salarios.ano);
            console.log("Salário: " + salarios.salario)
        }
}
