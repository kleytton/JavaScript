//Variavéis dos elemnetos da lista

//Atribuindo o formulário a uma variável
const form = document.getElementById('addForm');
//Atribição a lista a uma variável
const itemList = document.getElementById('items');
//Atribição de barra de pesquisa
const filter = document.getElementById('filter');


form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', buscarItems);
function buscarItems(){
    alert('Tecla ativa')
}
function removeItem(){
    alert('Clicou na UL')
}
function addItem () {
    alert('Você cliclou no botão')
}
