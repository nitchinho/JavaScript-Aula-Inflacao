import rl from 'readline-sync';

let lista_salarios = [
    { ano: 2010, salario: 510.00 },
    { ano: 2011, salario: 545.00 },
    { ano: 2012, salario: 622.00 },
    { ano: 2013, salario: 678.00 },
    { ano: 2014, salario: 724.00 },
    { ano: 2015, salario: 788.00 },
    { ano: 2016, salario: 880.00 },
    { ano: 2017, salario: 937.00 },
    { ano: 2018, salario: 954.00 },
    { ano: 2019, salario: 998.00 },
    { ano: 2020, salario: 1045.00 },
]

const lista_inflacoes = [
    { ano: 2010, inflacao: 5.91 },
    { ano: 2011, inflacao: 6.50 },
    { ano: 2012, inflacao: 5.84 },
    { ano: 2013, inflacao: 5.91 },
    { ano: 2014, inflacao: 6.41 },
    { ano: 2015, inflacao: 10.67 },
    { ano: 2016, inflacao: 6.29 },
    { ano: 2017, inflacao: 2.95 },
    { ano: 2018, inflacao: 3.75 },
    { ano: 2019, inflacao: 4.31 },
    { ano: 2020, inflacao: 4.52 },
]

console.log("Escolha uma das alternativas:\n");

console.log("1 - Listar os salários mínimos de 2010 à 2020:");
console.log("2 - Listar o índice IPCA  de 2010 à 2020:");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n");

let escolha = rl.question("Digite a opcao escolhida: ");

switch (escolha) {
    case "1":
        console.log("\nSalário Mínimo em cada ano: \n")
        for (let i = 0; i < lista_salarios.length; i++) {
            let label_ano_Salario = "Ano: "
            let ano_salario = lista_salarios[i].ano;
            let label_salario_minimo = "Salário Mínimo: ";
            let salario_minimo = lista_salarios[i].salario;
            console.log(label_ano_Salario.padEnd(25, ".") + ano_salario);
            console.log(label_salario_minimo.padEnd(25, ".") + "R$ " + salario_minimo.toFixed(2).replace(".", ",") + "\n")
        }
        break;
    case "2":
        console.log("\nInflação em cada ano: \n")
        for (let i = 0; i < lista_inflacoes.length; i++) {
            let label_ano_inflacao = "Ano: "
            let ano_inflacao = lista_inflacoes[i].ano;
            let label_inflacao = "Inflacão IPCA: ";
            let inflacao = lista_inflacoes[i].inflacao;
            console.log(label_ano_inflacao.padEnd(25, ".") + ano_inflacao);
            console.log(label_inflacao.padEnd(25, ".") + inflacao.toFixed(2).replace(".", ",") + "%\n")
        }
        break;
    case "3":
        console.log("\nComparacão Salario x Inflacao: \n")
        let salario_anterior = 0;
        for (let i = 0; i < lista_salarios.length && i < lista_inflacoes.length; i++) {
            
            let label_ano_Salario = "Ano: "
            let ano_salario = lista_salarios[i].ano;
            console.log(label_ano_Salario.padEnd(25, ".") + ano_salario);
            
            let label_salario_minimo = "Salário: ";
            let salario_minimo = lista_salarios[i].salario;
            console.log(label_salario_minimo.padEnd(25, ".") + "R$ " + salario_minimo.toFixed(2).replace(".", ","));
            
            let label_crescimento = "Crescimento Salarial: ";
            let diferenca = salario_minimo - salario_anterior
            if (salario_anterior == 0){
                console.log(label_crescimento.padEnd(25, ".") + " - ");    
            } else {
            let crescimento = (diferenca / salario_anterior) * 100;
            console.log(label_crescimento.padEnd(25, ".") + crescimento.toFixed(2).replace(".",",") + "%");
            }
            
            let label_inflacao = "Inflacão IPCA: ";
            let inflacao = lista_inflacoes[i].inflacao;
            console.log(label_inflacao.padEnd(25, ".") + inflacao.toFixed(2).replace(".", ",") + "%\n");
            
                       
            salario_anterior = salario_minimo

        }
            break;
    default: console.log("Opcao Invalida");
        break
}