// Definindo os preços unitários de cada item
const itemPrices = [41.00, 49.90, 39.90, 10.90]

// Definindo as quantidades iniciais para cada item (começa com 1)
let quantities = [1, 1, 1, 1]

// Função para recalcular o total do carrinho
function calculateTotal() {
    let totalPrice = 0
    
    // Itera sobre cada item, atualiza o preço exibido e acumula o total
    for (let i = 0; i < itemPrices.length; i++) {
        const itemTotal = itemPrices[i] * quantities[i]
        document.getElementById(`price-${i}`).textContent = `R$ ${itemTotal.toFixed(2)}`
        totalPrice += itemTotal
    }

    // Atualiza o preço total do carrinho
    document.getElementById('total-price').textContent = `R$ ${totalPrice.toFixed(2)}`
}

// Função para aumentar a quantidade de um item
function increaseQuantity(index) {
    quantities[index]++
    document.getElementById(`quantity-${index}`).textContent = quantities[index]
    calculateTotal()
}

// Função para diminuir a quantidade de um item (não permite quantidade menor que 1)
function decreaseQuantity(index) {
    if (quantities[index] > 1) {
        quantities[index]--
        document.getElementById(`quantity-${index}`).textContent = quantities[index]
        calculateTotal()
    }
}

// Função simulada para o botão "Voltar"
function goBack() {
    alert("Voltando à página anterior...")
}

// Função simulada para o botão "Pagar Agora"
function payNow() {
    alert("Pagamento realizado com sucesso!")
}

// Chama a função de cálculo do total ao carregar a página
window.onload = calculateTotal;
