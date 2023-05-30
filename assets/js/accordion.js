const cardBox = document.querySelectorAll('.cards__duvidas');


for(let i = 0; i < cardBox.length; i++) {
    const header = cardBox[i].querySelector('.cards__duvidas--header');
    const cardsConteudo = cardBox[i].querySelector('.cards__duvidas--conteudo');
    const seta = header.querySelector('.cards__seta');

    header.addEventListener("click", function() {
        if(cardsConteudo.classList.contains("accordion--ativo")){
            cardsConteudo.classList.remove("accordion--ativo")
            seta.style.transform = "rotate(-90deg)"
        } else {
            cardsConteudo.classList.add("accordion--ativo");
            seta.style.transform = "rotate(0)"
        }

       
    })
    
    
}