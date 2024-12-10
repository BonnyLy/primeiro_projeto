// // calabresa -> Saindo pizza de
// // frango -> Saindo pizza de
// // queijo -> Saindo pizza de

// let saborPizza = "k";

// switch (saborPizza) { 
//     case "calabresa":
//         console.log("Saindo pizza de calabresa");
//         break;
//     case "frango":
//         console.log("Saindo pizza de frango");
//         break;
//     case "queijo":
//         console.log("Saindo pizza de queijo");
//         break;

//     default:
//         console.log("@@@ Não possuímos essa opção @@@");
// };


// 01. Construir um programa no qual o usuário digitará um numero entre 1 e 12 e o sistema retornará, na tela, qual mês corresponde a esse numero. O desenvolvedor terá́ que utilizar o comando Switch.

// let numero = 2 

// switch (numero) {
//     case 1: 
//     console.log(`O número ${numero} corresponde ao mes de janeiro`);
//         break;
//     case 2:
//         console.log(`o número ${numero} corresponde ao mes de fevereiro`);
//     default:
//         break;
// };


// 02. Agora, o estudante construirá́, utilizando o comando Switch, um programa para o Senac. O instrutor irá digitar um desses três conceitos (A, PA ou NA). Caso ele escolha A, escreverá na tela “Atendido”; caso ele escolha PA, o programa escreverá na tela “Parcialmente Atendido”; ou caso ele digite NA, o programa colocará na tela “Não Atendido”.

// let conceitos = "poa"

// switch (conceitos) {
//     case "na":
//         console.log("nao atendido!");
//         break;

//     case "a":
//         console.log("atendido");
//         break;
        
//     case "pa":
//         console.log("parcialmente atendido");
//         break;

//     default:
//         console.log("Opção inexistente");
//         break;
// };


// 03. O usuário de uma página de games deverá digitar sua pontuação. Caso digite um valor acima de 1.000, o programa retornará o texto “Usuário VIP” ou, caso contrário, “Aumente sua pontuação para se tornar um usuário VIP”.

// let pontuacao = 1000
// let vipUser = pontuacao >= 1000 ? "Usuario vip" : "aumente sua pontuação";
// console.log(vipUser);


// 04. Um parque de diversões pediu para você montar um script onde o operador de um brinquedo irá digitar a altura de uma criança. Caso a altura seja menor que 1.20 metros, o programa retornará a mensagem “Acesso apenas para crianças com mais de um metro e vinte”, caso contrário, “Acesso liberado”.

let altura = 1.0;
let alturaCrianca = altura >= 1.20 ? "Acesso liberado" : "Acesso apenas para crianças com mais de um metro e vinte"
                
console.log(alturaCrianca)