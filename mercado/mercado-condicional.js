//Para contador de 1 ate 4 faca

let soma = 0;

for(let produtos = 1; produtos <= 5 ; produtos++){
    let preco = prompt ('Digite o valor do produto:');

    soma = Number(preco) + soma;
}

alert('TOTAL DA COMPRA R$' + soma)
