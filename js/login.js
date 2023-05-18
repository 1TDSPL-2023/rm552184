//CONSTRUIR UMA LISTA DE OBJETOS
let listaDeUsuarios = [
    {
        nomeCompleto : "Eduardo capacho",
        emailUsuario : "dudu@email.com",
        senhaUsuario : "123456"
    }
];





const inputEmail = document.querySelector("#idEmail");
const inputSenha = document.querySelector("#idPass");

//CAPTURA DE TODOS OS ELEMENTOS
addEventListener("click",(evt)=>{

    //CRIANDO UM OBJETO PARA ARMAZENAR OS DADOS DO FORM!
    let usuarioLogado = {
        emailUsuarioLogado : inputEmail.value,
        senhaUsuarioLogado : inputSenha.value
    }

    //Recuperando um elemento do DOM
    if(evt.target.id == "btnSubmit"){
                
        if (usuarioLogado.emailUsuarioLogado == "dudu" && usuarioLogado.senhaUsuarioLogado == "123456") {
            console.log("VALIDADO!");
        }else{
            console.log("NÃO VALIDADO!");
        }

    }

});