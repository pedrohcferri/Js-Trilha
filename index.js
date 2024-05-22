// console.log("Bem vindo ao curso!");
// let idade = 21;
// console.log(idade);
// let altura = 170;
// console.log(altura);
// camelCase

//-------------------------------------//--------------------------------------

// let pode receber outro valor ao decorrer do código
// let ingressoAdulto = 20;

// ingressoAdulto= 30;

// console.log(ingressoAdulto);

// const serve para valores que não devem mudar
// const  cpfAlice = 1212231-4;

//-------------------------------------//--------------------------------------

// let nome = 'Rafael';

// let idade = 23;

// let estaAprovado = true;

// let corSelecionada = null;

// console.log(typeof idade, typeof nome, typeof estaAprovado, typeof corSelecionada);

//-------------------------------------//--------------------------------------

// Criação de objetos, entre chaves {} ": para separar"  e virgula para separ os argumentos
// let login = {
//     nome: 'Pedro',
//     idade: 23,
//     estaAprovado: true,
//     sobrenome: 'Carvalho Ferri'
// };

// console.log(login);

//-------------------------------------//--------------------------------------

//Arrays

// let familia = [25, 23, 'Pedro', 30];

// console.log(familia.length);
// console.log(familia[2]);
// console.log(familia[0]);

//-------------------------------------//--------------------------------------

//functions

// Verbo + Substantivo

// let corSite = "azul";

// function resetaCor(cor, tonalidade){
//     corSite = cor + tonalidade;
// };

// console.log(corSite);

// resetaCor("vermelho ", "claro");

// console.log(corSite);



// function dizerNome (nome) {
//     console.log(`Olá seja bem vindo ${nome}`);
// }

// dizerNome("Pedro");

// function multiplicarPorDois (elemento) {
//     return elemento  * 2
// }

// console.log(multiplicarPorDois(5));


//-------------------------------------//--------------------------------------

// Operadores Aritiméticos

// let salario = 100;

// console.log(salario + salario);
// console.log(salario - salario);
// console.log(salario * salario);
// console.log(salario / salario);
// número exponencial, multiplicado por ele mesmo
//console.log(5 ** 5);

// Operadores de Atribuição

// let valorTecladoGamer = 100;

// valorTecladoGamer += valorTecladoGamer;

// console.log(valorTecladoGamer);

// Operadores de igualdade

// console.log( 1 === 1 );

// console.log( '1' === 1 ); retorna false


// Operador ternário

// let pontos = 100;

// let tipo = pontos >= 100 ? 'premium' : 'comum' ;

// console.log(tipo);


//  Operadores Lógicos

// console.log(false && true);

// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho; 

//  && verdadeiro se A for igual a B 
//  != verdadeiro se A não for igual a B 
//  === verdadeiro se A e B forem do mesmo tipo 


//-------------------------------------//--------------------------------------

//if e else

// let hora = 19;

// if ( hora > 6 && hora < 12 ){
//     console.log('Bom dia');
// } 
// else if ( hora > 12 && hora < 18 ){
//     console.log('Boa tarde');
// }
// else {
//     console.log('Boa noite');
// }



//swith case


//  let permissao;

//  switch (permissao){
//     case 'comum':
//     console.log('usuario comum');
//     break;
//     case 'comum':
//         console.log('usuario comum');
//     break;
//     case 'diretor':
//         console.log('Usuário comum');
//     break;
//     default:
//         console.log('Usuário não reconhecido')
    
//     }


// for possui 3 condições 

// for (let i = 0; i < 5; i++) {
//     console.log('estou aprendendo');
// }

// while 

// let i = 5;

// while(i >= 1){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
//     i --;
// }

//Do..While

// fazer = do
// while = enquanto 

// let i = 0;
// do { 
//     console.log('digitando');
//     i++;
// } while (i < 10)


// For in   

// const pessoa = {
//     nome: 'Jhonatan',
//     idade: 23
// }

// for ( let chave in pessoa) {
//     console.log(chave, pessoa['nome']);
// }

// const cores = ['Vermelho', 'Azul', 'Verde'];

// for (let indice in cores){
//     console.log(indice, cores[indice]);
// }


//for-of

// const cores = ['Vermelho', 'Azul', 'Verde'];

// for(let cor of cores){
//     console.log(cor);
// }

//-------------------------------------//--------------------------------------

// Escreva uma função que usa 2 numeros e retorna o maior entre eles

// function maiorNumero (num1, num2) {
//     return  num1 > num2 ? num1 : num2;
    
// }

// console.log(maiorNumero( 1233, 44440));

//-------------------------------------//--------------------------------------

// fizzBuzz



// function fizzBuzz(entrada){
//     if (entrada % 3 === 0 && entrada % 5 === 0)
//         return 'FizzBuzz';
//     if (typeof entrada !== 'number')
//         return 'Não é um número';
//     if (entrada % 3 === 0)
//         return 'Fizz';
//     if (entrada % 5 === 0)
//          return 'Buzz';
// }


// console.log(fizzBuzz(15));



// Verificar velocidade, veloxidade máxima de até  70
// a cada 5km acima do limite você ganha 1 ponto na carteira

// verificaVelocidade(85);

// function verificaVelocidade(velocidade) {
//         const velocidadeMaxima = 70;
//         const kmPorPonto = 5;
//     if (velocidade <= velocidadeMaxima) 
//         console.log('Velocidade Ok');
//     else {
//         const pontos = Math.floor((velocidade - velocidadeMaxima) / (kmPorPonto) );

//         if ( pontos >= 12)
//             console.log('Carteira suspensa');
//         else
//             console.log('Pontos', pontos);
//     }
// }


//-------------------------------------//--------------------------------------

// Escreva um programa que imprima os números de 1 a 100. Mas para múltiplos de três 
// imprima "Fizz" em vez do número e para os múltiplos de cinco imprima "Buzz". Para 
// números que são múltiplos de três e cinco, imprima "FizzBuzz"


// for ( let i = 0; i < 100; i++ ) {
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log(i ,'FizzBuzz');
//     }   else if (i % 5 === 0){
//         console.log(i, 'Buzz');
//     } else if (i % 3 === 0){
//         console.log(i, 'Fizz');
//     }
// }

//-------------------------------------//--------------------------------------

// Crie uma função que exiba o valor e indique se ele é par ou impar

// function identificarNumero(num1){
//     if ( num1 % 2 === 0 ){
//         console.log(`O número ${num1} é par`);
//     } else {
//         console.log(`O número ${num1} é impar`);
//     }

// }
// identificarNumero(15);

// function exibirTipo(limite){
//     for( let i = 0; i < limite; i++){
//     if ( i % 2 === 0 ){
//         console.log(`O número ${i} é par`);
//     } else {
//         console.log(`O número ${i} é impar`);
//     }
// }
// }

// exibirTipo(10);

//-------------------------------------//--------------------------------------

// metodo para ler propriedades de um objeto e exibir somente as propriedades do tipo string

// const filme = { 
//     titulo: 'Vingadores',
//     ano: 2018,
//     diretor: 'Robin',
//     personagem: 'Thor'
// }


// function exibirPropriedades(obj){

//     for ( propriedade in obj) {
//         // se a propriedade do obj for do tipo string...
//         if (typeof obj[propriedade] === 'string')
//         // imprimir propriedade, e a propriedade dentro do  obejto
//             console.log(propriedade, obj[propriedade]);
//     }
// }
// exibirPropriedades(filme);


//-------------------------------------//--------------------------------------
somar(10);

function somar(limite){
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;
    for(i = 0; i <= limite; i++){
         if(i % 3 === 0)
            multiplosDe3 += i;
            if (i % 5 === 0);
            multiplosDe5 += i;
            console.log(i);
    }
    console.log(multiplosDe3 );
    console.log(multiplosDe5);
}
