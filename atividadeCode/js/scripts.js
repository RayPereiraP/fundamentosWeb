let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let telefone = document.querySelector("#telefone");
let mensagem = document.querySelector("#mensagem");
let nomeOk = false;
let emailOk = false;
let mensagemOk = false;
let telefoneOk = false;
let mapa = document.querySelector("#mapa");

nome.style.width = "100%";
email.style.width = "100%";

function validarNome() {
    let Nome = document.querySelector("#Nome");
    if (nome.value.length < 3) {
        Nome.innerHTML = "Nome Inválido";
        Nome.style.color = "red";
    } else {
        Nome.innerHTML = "Nome Válido";
        Nome.style.color = "green";
        nomeOk = true;
    }
}

function validarEmail() {
    let Email = document.querySelector("#Email");
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        Email.innerHTML = "E-mail Inválido";
        Email.style.color = "red";
    } else {
        Email.innerHTML = "E-mail Válido";
        Email.style.color = "green";
        emailOk = true;
    }
}

function validarTelefone() {
    let telefoneElement = document.querySelector("#telefone");
    if (telefoneElement.value.length <12 ) {
        telefoneElement.innerHTML = "Telefone Inválido";
        telefoneElement.style.color = "red";
    } else {
        telefoneElement.innerHTML = "Telefone Válido";
        telefoneElement.style.color = "green";
        telefoneOk = true;
    }
}

function validarMensagem() {
    let mensagemElement = document.querySelector("#mensagem");
    if (mensagemElement.value.length >= 200) {
        mensagemElement.innerHTML = "Texto é muito grande, digite no máximo 200 caracteres";
        mensagemElement.style.color = "red";
        mensagemElement.style.display = "block";
    } else {
        mensagemInfo.style.display = "none";
        mensagemOk = true;
        mensagemElement.style.color = "green";
        
    }
}