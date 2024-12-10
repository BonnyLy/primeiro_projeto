 
// // 01. A escola Lemos Segundo resolveu criar um programa para ajudar os professores nos conceitos dos estudantes. O(a) professor(a) irá digitar a nota tirada pelo aluno. Caso seja menor do que 0 ou maior do que 10, o programa irá escrever “Nota Inválida”; se for maior ou igual a 0 e menor do que 4, o programa irá escrever, “aluno reprovado”. Se a nota for maior ou igual a 4 e menor do que 7, o programa irá escrever “Aluno em Recuperação” e, caso seja maior ou igual a 7 e menor ou igual a 10, escreverá “Aluno Aprovado”.

// // let notaAluno = prompt("Digite a nota do aluno")

// // if (notaAluno < 0 || notaAluno > 10) {
// //     document.write("Nota inválida");
// // }
// // else if (notaAluno >= 0 && notaAluno < 4) {
// //     document.write("Aluno Reprovado");
// // } else if(notaAluno >= 4 && notaAluno < 7){
// //     document.write("Aluno em recuperação");
// // } else if(notaAluno >= 7 && notaAluno <=10){
// //     document.write("Aluno Aprovado");
// // };


// // !!! 02. A escola Lemos Segundo gostou do sistema que você desenvolveu e, com isso, pediu um “upgrade”. Aproveitando o código do exercício anterior, eles solicitaram que, no caso de o estudante ficar em recuperação, o programa deverá solicitar a digitação de mais uma nota. Se essa nota for menor que 5, o programa escreverá “Reprovado na Recuperação” e, caso contrário, “Aprovado na Recuperação”.

let notaAluno = parseFloat(prompt("Digite a nota do aluno"))

if (notaAluno < 0 || notaAluno > 10) {
    document.write("@@@ Nota inválida @@@");
}
else if (notaAluno >= 0 && notaAluno < 4) {
    document.write("Aluno Reprovado");

} else if(notaAluno >= 4 && notaAluno < 7){
    document.write("Aluno em recuperação")
    document.write("<br>")
    let notaRecuperacao = parseFloat(prompt("Digite a nota de Recuperação"))
        if(notaRecuperacao <= 5){
            document.write("Reprovado na Recuperação")
        } else{
            document.write("Aprovado na recuperação")
        }

} else if(notaAluno >= 7 && notaAluno <=10){
    document.write("Aluno Aprovado");
};

// Crie um codigo que classifique o desempenho de um emprego com base no numero de vendas realizadas. O numero de vendas sera pela variavel VENDAS. O codigo deve verificar as seguntes condições:

// 1. se o numero de vendas for menor que 0, exibir "numero de vendas invalido"
// 2. se o numero de vendas for de 0 a 4 exibir "desempenho insuficiente"
// 3. se o numero de vendas for de 5 a 9, exibir "desempenho satisfatorio"
// 4. se o numero de vendas for de 10 ou mais, exibir "desempenho excelente"

// let vendas = 81;

// if (vendas < 0) {
//     console.log("Numero de vendas inválido");
// } else if (vendas >= 0 && vendas <= 4) {
//     console.log("Desempenho insuficiente");
// } else if (vendas >= 5 && vendas <= 9 ) {
//     console.log("Desempenho satisfatorio");
// } else if (vendas >= 10) {
//     console.log("Desempenho excelente");
// };
