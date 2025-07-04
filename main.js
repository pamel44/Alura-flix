function inserirNome (){
    let nomeUsuario = prompt ("Informe seu nome: ")
    let elemento = document.querySelector("#nome-usuario");
    elemento.textContent = nomeUsuario;

}

