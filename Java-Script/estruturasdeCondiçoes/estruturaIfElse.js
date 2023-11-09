//Atividade 1
let numero = prompt ("Digite um número");

if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}

//Atividade 1 outro exemplo
//const number = prompt('Digite um numero');
//let convertido = parseInt(convertido);
//function digitaçaoVazia(number){
 // if convertido === '' {
 //   alert (`O número digitado (${number}, esse número 0)`)
//  }
 //if (convertido == 0){
  //alert(`O número digitado (${number}, esse número 0)`);
//} else if (convertido > 0){
 // alert(`O número digitado (${number}, esse número positivo)`);
//} else  {
 // alert(`O número digitado (${number}, esse número negativo)`);
//};

//}

//Atividade 2
let idade = prompt ("Digite sua idade:");
if (idade < 17) {
  console.log("Você é menor de idade.");
} else if (idade >= 18 && idade <= 65) {
  console.log("Você é maior de idade.");
} else {
  console.log("você é idosa.");
};


//Atividade 2 outro exemplo
const idade3 = +prompt('Digite sua idade');
if ( idade3 < 18) { 
  alert ('Pessoa menor de idade');
} else if ( idade > 59) {
  alert ('Pessoa terceira idade idade');
 } else {
  alert('Pessoa é adulta')
 }



//Atividade 3
let senha = prompt ("Digite sua senha:");
/*if (senha.length >= 8) {
  console.log("Senha Valida.");
} else {
  console.log("Senha invalida, a senha deve conter no máximo 8 caracteres.");
};*/
do {
  alert('Senha menor que 8 caracteres')
  senha = prompt('Digite novamente sua senha')
}while (senha.length < 8)


//Atividade 4
let num1 = prompt("Digite o primeiro número:");
let num2 = prompt("Digite o segundo número:");
let num3 = prompt("Digite o terceiro número:");

if (num1 <= num2 && num1 <= num3) {
  if (num2 <= num3) {
    console.log(`Os números em ordem crescente são: ${num1}, ${num2}, ${num3}`);
  } else {
    console.log(`Os números em ordem crescente são: ${num1}, ${num3}, ${num2}`);
  }
} else if (num2 <= num1 && num2 <= num3) {
  if (num1 <= num3) {
    console.log(`Os números em ordem crescente são: ${num2}, ${num1}, ${num3}`);
  } else {
    console.log(`Os números em ordem crescente são: ${num2}, ${num3}, ${num1}`);
  }
} else {
  if (num1 <= num2) {
    console.log(`Os números em ordem crescente são: ${num3}, ${num1}, ${num2}`);
  } else {
    console.log(`Os números em ordem crescente são: ${num3}, ${num2}, ${num1}`);
  }
}

//Atividade 5
let parImpar= prompt ("Digite um número:");

if (parImpar % 2 === 0) {
  console.log("O número é par.");
} else {
  console.log("O número é ímpar.");
}

//Arividade 6
let idade2 = prompt ("Digite sua idade ");

if (idade2 < 18) {
  console.log("Você é menor de idade e perante a lei você não pode tomar uma. Sorry..");
} else {
  console.log("Você é maior de idade e pode encher a caraaaa.");
}