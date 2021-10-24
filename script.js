const botao_converter = window.document.querySelector('#converter'); //pegar botão 
botao_converter.addEventListener('click', converter);//adicionar manipulador de eventos ao botão
const mensagem = window.document.getElementById('resultado'); //pegar a mensagem 

//função para converter de reais para ´dolares
function converter(){
    //pegar campos por id
    let real = (window.document.getElementById('input-real'));
    let cotacao_dolar = (window.document.getElementById('input-dolar'));
    
    //validar para antes de converter
    if(cotacao_dolar.value == '' || real.value == ''){
        window.alert(`Preencha todos os campos...`);
    }else if(isNaN(real.value) || isNaN(cotacao_dolar.value)){
        window.alert(`Os campos precisam ser números...`);
    }else{
        //converter real em dólar
        real = Number(real.value);
        cotacao_dolar = Number(cotacao_dolar.value);
        let resultado = "$ " + (real / cotacao_dolar).toFixed(2).replace(".", ",");
        //printar mensagem
        mensagem.innerHTML = resultado;
        window.alert(`R$ ${real.toFixed(2).replace(".", ",")} = ${resultado}`);
    }
    //console.log(real, dolar);
    //window.alert('olá mundo');
}
