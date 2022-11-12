let form = document.getElementById("form-notas");
let btn = document.getElementById("gerar");
let relatorio = document.getElementById("relatorio");  
//Vetor = Array
let produtos = [];
let quantidades = [];
let valores = [];


//Váriavel auxiliar
let mostrarRel = "";

form.addEventListener('submit', function(event){
    event.preventDefault();

    //push - adicionar novos dados dentro de um vetor array
    produtos.push(form.produto.value);
    quantidades.push(Number(form.quantidade.value));
    valores.push(Number(form.valor.value));
   
  


})

btn.addEventListener('click', function(event){
    event.preventDefault();
    mostrarRel = "";

    let valor_total = 0
    
    
    for(let posicao = 0; posicao < produtos.length; posicao++){
        if(quantidades[posicao] > 1){
        valor_total = valores[posicao] * quantidades[posicao]
    }

        /*descVr = salarios[posicao] * 0.09;
        descVt = salarios[posicao] * 0.06;
        salarioLiquido = salarios[posicao] - descVt - descVr;*/

        mostrarRel += `<p>Produto: ${produtos[posicao]} | Quantidade de produtos: ${quantidades[posicao]} | Valor total: ${valor_total}` 
    }
    relatorio.innerHTML = "";
    relatorio.innerHTML = mostrarRel;
})