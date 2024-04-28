// var primeiroNumero = 1;
// var segundoNumero = 3;

// var soma = primeiroNumero + segundoNumero;
// console.log("Soma: ",soma);


// var nomeInserido = prompt("Insira seu nome: ");

// console.log("Nome Inserido: ", nomeInserido)

// var mensagemAlert = "O nome inserido foi o " + nomeInserido;

// alert(mensagemAlert);

// var num1 = prompt("Digite 1 numero")
// var num2 = prompt("Digite o segundo numero")

// var num1number = parseInt(num1);
// var num2number = parseInt(num2);

// var soma1 = num1number + num2number;
// console.log(soma1);

// var produto = num1number * num2number;

// alert("A muliplicação é: "+ produto);

function receberNumero(){
    var numeroPrompt = prompt("Digite um numero");
    
    numero = parseInt(numeroPrompt);

    if (numero%2 == 0) {
    alert('O numero é par')
    }else{
        alert("O numero é impar")
    }
}

receberNumero();
receberNumero();
receberNumero();