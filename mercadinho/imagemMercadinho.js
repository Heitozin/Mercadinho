let formMercadinho = document.getElementById("form-carrinho");
let divCupomFiscal = document.getElementById("cupom");
let imagemProduto = document.getElementById("produto-imagem");
let totalPagar = document.getElementById("totalPagar");
let codigoProduto = document.getElementById("codigo-produto");
let btn = document.getElementById("gerar");

const mercadorias = [
    [100, "Arroz", 21.90, "imagem-mercadinho/arroz.png"],
    [101, "Feijão", 7.90, "imagem-mercadinho/feijao.jpg"],
    [102, "Biscoito", 3.89, "imagem-mercadinho/biscoito.jpg"],
    [103, "Suco", 1.29, "imagem-mercadinho/suco.jpg"],
    [104, "Leite", 7.99, "imagem-mercadinho/leite.jpg"]
]

codigoProduto.addEventListener('keyup', function(){
    console.log(codigoProduto.value);
    mercadorias.forEach(produtos => {
        if(codigoProduto.value == produtos[0]){
            formMercadinho.nome_produto.value = produtos[1];
            formMercadinho.preco_produto.value = produtos[2];
            formMercadinho.qtd_produto.focus();
            imagemProduto.src = produtos[3]
        }
    })
})

let produtoCodigo = [];
let nomeProduto = [];
let quantidade = [];
let preco = [];

formMercadinho.addEventListener('submit', function(event){
    event.preventDefault();

    produtoCodigo.push(formMercadinho.codigo_produto.value);
    nomeProduto.push(formMercadinho.nome_produto.value);
    quantidade.push(Number(formMercadinho.qtd_produto.value));
    preco.push(Number(formMercadinho.preco_produto.value));
    console.log(formMercadinho.nome_produto.value)

    
})

btn.addEventListener('click', function(event){
    event.preventDefault();
    mostrarRel = "";

    let valor_total = 0
    let posicao = 0
    
    while(posicao < nomeProduto.length){
        valor_total += preco[posicao] * quantidade[posicao] 
        mostrarRel += `<p>Produto: ${nomeProduto[posicao]} | Quantidade de produtos: ${quantidade[posicao]} | Valor total: ${valor_total}`
        posicao++
    }
   console.log(nomeProduto)
totalPagar.innerHTML = "";
totalPagar.innerHTML = mostrarRel;
})

