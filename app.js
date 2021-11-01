"use strict";
// 4 -Com o array do exercício 2 faça:
//a) Uma tabela HTML que liste todos os registros
//b) Um formulário que faça a edição dos dados
//c) Um CTA para este formulário a partir da lista
//d) Um CTA para excluir um item dessa lista 
let lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
let table = document.getElementById('tabela');
function createTable(tableData) {
    lista.forEach((element) => {
        let tr = document.createElement('tr');
        let itd = document.createElement('td');
        itd.innerHTML = String(element.id);
        tr.appendChild(itd);
        let ntd = document.createElement('td');
        ntd.innerHTML = element.name;
        tr.appendChild(ntd);
        let btd = document.createElement('td');
        btd.innerHTML = element.bio;
        tr.appendChild(btd);
        table.appendChild(tr);
    });
    document.body.appendChild(table);
}
createTable(lista);
function deletElementById() {
    let Id = Number(document.getElementById("del").value);
    table.innerHTML = "";
    lista = lista.filter(element => element.id !== Id);
    createTable(lista);
}
function changElement() {
    let Id = Number(document.getElementById("newId").value);
    let newName = document.getElementById("newName").value;
    let newBio = document.getElementById("newBio").value;
    table.innerHTML = "";
    let i = lista.findIndex(element => element.id === Id);
    lista[i].name = newName;
    lista[i].bio = newBio;
    createTable(lista);
}
