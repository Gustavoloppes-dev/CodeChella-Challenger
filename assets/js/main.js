const menuBotaoIngresso = document.querySelector('[data-ingresso]');
const campoNome = document.getElementById('nome__ingresso');
const campoIngresso = document.getElementById('tipo__ingresso');
const dados = JSON.parse(localStorage.getItem("cadastroUsuario"));
console.log(dados);
console.log(dados.nome);
console.log(dados.ingresso);
console.log(menuBotaoIngresso.href);


// campoIngresso.innerHTML = dados.cadastrado


if(dados.nome || dados.ingresso) {
    menuBotaoIngresso.href = "ingresso__comprado.html"
    campoNome.innerHTML = dados.nome
    campoIngresso.innerHTML = dados.ingresso
    console.log(campoNome.innerHTML);
    console.log(campoIngresso.innerHTML);
} else {
    menuBotaoIngresso.href = "ingresso.html"
    console.log("erro")
}


