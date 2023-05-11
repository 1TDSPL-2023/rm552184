

function insereNumero(botao,visor) {

    const meuBotao = document.getElementById(botao);
    const meuVisor = document.getElementById(visor);

    meuVisor.value += meuBotao.value;

}
function resultado(visor){
    const meuVisor = document.getElementById(visor);    
    let armazenamentoDeNumeros = [];
    armazenamentoDeNumeros = [...visor];
    console.log(armazenamentoDeNumeros);

}
