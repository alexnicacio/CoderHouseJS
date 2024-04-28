var livros = [];  //lista inicial de livros vazia.

//class constructor de livro.

class Livro{
    constructor (nome, autor, ano, editora, genero, preco){
        this.nome = nome;
        this.autor = autor;
        this.ano = ano;
        this.editora = editora;
        this.genero = genero;
        this.preco = preco;
    }
}

//loop Menu

while (true) {

    let entrada = prompt(`Selecione a opção desejada digitando o número correspondente:\n\n1 - Cadastrar Livro\n2 - Ver informações de um livro\n3 - Editar livro\n4 - Excluir livro\n\nPara sair do programa digite "sair".`);

    if (entrada.toUpperCase() === "SAIR") {
        break;
    } else if (entrada < 1 || entrada > 4) {
        alert("Opção inválida");
    }

    switch(entrada) {
        case "1":
            cadastrarLivro(livros);
            break;
        case "2":
            verInfoLivro(livros);
            break;
        case "3":
            editarLivro(livros);
            break;
        case "4":
            excluirLivro(livros);
            break;
    }
}



function cadastrarLivro(livros) {
    let nomeInserido = capitalizar(prompt("Digite o nome do livro:\n\nDigite \"Cancelar\" para retornar ao menu inicial"));

    if (nomeInserido.toUpperCase() === "CANCELAR") {
        return;
    } 

    let nome = nomeInserido;
    let autor = capitalizar(prompt("Digite o autor:"));
    let ano = prompt("Digite o ano:");
    let editora = capitalizar(prompt("Digite a editora:"));
    let genero = capitalizar(prompt("Digite o gênero do livro:"));
    let preco = prompt("Digite o preço do livro:");

    const livroNovo = new Livro(nome, autor, ano, editora, genero, preco);
    livros.push(livroNovo);

}


//Função capitalizar strings
function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.substring(1).toLowerCase();
}


//função ver info de um livro.
function verInfoLivro(livros){
    
    let livroInfo = primeiraMaiusculo(prompt("Qual livro você deseja obter informações?"));
    let indexLivroSelecionado = selecionarlivro(livroInfo);
    
    if (indexLivroSelecionado == -1) {
        return;
    }
    
    alert(`Infos do livro:\nNome: ${livros[indexLivroSelecionado].nome}\n Autor: ${livros[indexLivroSelecionado].autor}\n Ano: ${livros[indexLivroSelecionado].ano}\nEditora: ${livros[indexLivroSelecionado].editora}\nGênero: ${livros[indexLivroSelecionado].genero}\nPreço: ${livros[indexLivroSelecionado].preco}`);
}



// Função para selecionar um livro
function selecionarLivro(livro) {
    for (let i = 0; i < livros.length; i++) {
        if (livros[i].titulo === livro) {
            return i;
        }
    }
    alert("Livro não encontrado no sistema.");
    return -1;
}


TODO:
// Função para editar um livro
function editarLivro() {}

TODO:
// Função para excluir um livro
function excluirLivro() {}
