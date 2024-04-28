

function Alimento(nome, peso, tipo){
    this.nome = nome;
    this.peso = peso;
    this.tipo = tipo;
    this.promocao = function() {console.log("O peso deste alimento é de ", this.peso)};
}

var alimento1 = new Alimento ("maçã", 150, "fruta")

console.log(alimento1);
console.log(alimento1.peso);
alimento1.promocao();

var alimento2 = new Alimento ("Abobora", 300, "legume")

alimento2.promocao();

console.log(alimento2.nome.length);
console.log(alimento2.tipo.toUpperCase());
console.log("###############################");

for (const propriedade in alimento2){
    console.log(propriedade + ": " + alimento2[propriedade]);
}

console.log("###############################");

class Carro{
    constructor (marca, nome, ano, cor, automatico){
        this.marca = marca;
        this.nome = nome;
        this.ano = ano;
        this.cor = cor;
        this.automatico = automatico;
    }

    apresentar(){
        console.log("O nome do carro é: " + this.nome);
    }

}

const fuscaAzul = new Carro("VW", "Fusca", 1977, "azul", false)

fuscaAzul.apresentar()

