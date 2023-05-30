const form = document.querySelector('.formulario__info')
const input = document.querySelectorAll('.formulario__info--input');
const erro = document.querySelectorAll('.formulario__info--erro');
const inputSelect = document.querySelector('.formulario__info--select');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;



function setErro(index) {
    input[index].style.border = '2px solid var(--vermelho)';
    erro[index].style.display = 'block';
}

function removeErro(index) {
    input[index].style.border = '';
    erro[index].style.display = 'none';
}

function validacaoNome() {
    
    input[0].addEventListener("input", (evento) => {
        if(input[0].value.length < 3 || /\d/.test(input[0].value)) {
            setErro(0);
            evento.preventDefault();
        }else {
            removeErro(0);
        }
    })

}

function validacaoEmail() {
    input[1].addEventListener("input", (evento) => {
        if(emailRegex.test(input[1].value)) {
            removeErro(1);
        }else {
            setErro(1);
            evento.preventDefault();
        }
    })
}

function validacaoIngresso() {
    form.addEventListener("submit", (evento) => {        
        // Poderia ter usado a const inputSelect no lugar do input[2]
        if(input[2].value === "") {
            setErro(2);
            evento.preventDefault();
        }else {
            removeErro(2);
        }
    })

    input[2].addEventListener("change", () => {
        if(input[2].value !== "") {
            removeErro(2);
        }
    })


}

function validacaoIdade() {
    form.addEventListener("submit", (evento) => {        
        const dia = parseInt(input[3].value.split("/")[0]);
        const mes = parseInt(input[3].value.split("/")[1]);
        const ano = parseInt(input[3].value.split("/")[2]);
        
        const idadeMinima = 13
        const anoAtual = new Date().getFullYear();
        const idade = anoAtual - ano;
        
        if(idade >= idadeMinima) {
            removeErro(3);
        }else if(dia.length !== 2 || mes.length !== 2 || ano.length !== 4 || dia < 1 || dia > 31
            || mes < 1 || mes > 12 || ano > 2010) {
            setErro(3);
            evento.preventDefault();
        }else {
            removeErro(3);
        }
        
    })
}

form.addEventListener("submit",(evento) => {
    
    validacaoNome();
    validacaoEmail();
    validacaoIngresso();
    validacaoIdade();

    for(let i = 0; i < input.length; i++) {
        if(input[i].value === "" ){
            setErro(i);
        }
    }
    

    const usuarioInput = input[0].value;
    const ingressoInput = input[2].value;
    // localStorage.setItem("nome", usuarioInput);
    // localStorage.setItem("ingresso", ingressoInput);
    
    

    const cadastroUsuario = {
        "nome": usuarioInput,
        "ingresso": ingressoInput,
    }
    
    console.log(cadastroUsuario)
    console.log(cadastroUsuario.nome)
    
    // if(cadastroUsuario.nome !== ""|| cadastroUsuario.ingresso !== ""){
    //     cadastroUsuario.cadastrado = "existe";
    // }else {
    //     cadastroUsuario.cadastrado = "";
    // }
    
    // console.log(cadastroUsuario.cadastrado)
    console.log(cadastroUsuario)
    console.log(cadastroUsuario.nome)
    console.log(cadastroUsuario.ingresso)
    // usuarioDados.push(cadastroUsuario);
    localStorage.setItem("cadastroUsuario",JSON.stringify(cadastroUsuario));
    // window.location.href = "../ingresso__comprado.html"
    // evento.preventDefault();
    console.log(cadastroUsuario)
})

validacaoNome();
validacaoEmail();
validacaoIngresso();
validacaoIdade();
