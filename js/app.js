
let totalGeral = 0;
limpar();
function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let qtde = document.getElementById('quantidade').value;
    
    // somar valores
    let preco = qtde * valorUnitario;
    
    
    // adicionar itens ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML =  carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${qtde}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;

    // atualizar o valor total
    totalGeral = totalGeral + preco;

    let total = document.getElementById('valor-total');
    total.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}


// limpar carrinho
function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}
