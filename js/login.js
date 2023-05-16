

function insereNumero(botao,visor) {
    if(botao.value =="+" || botao.value =="-" || botao.value =="*" || botao.value =="/"){
        visor.value += botao.value;
        console.log(visor.value[-1] =="+"|| visor.value[visor.value.length -1]=="-");

    }else{
        meuVisor.value += meuBotao.value;
    }
}
function resultado(visor){
    const meuVisor = document.getElementById(visor);    
    let armazenamentoDeNumeros = [];
    armazenamentoDeNumeros = [...visor];
    console.log(armazenamentoDeNumeros);
try{
    visor.value = eval(visor.value)

}catch(erro){
    if(botao.value[visor.value.length] =="+" || botao.value =="-" || botao.value =="*" || botao.value =="/")
}
}
