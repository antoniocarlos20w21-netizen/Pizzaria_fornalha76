let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Atualizar carrinho na tela
function atualizarCarrinho() {
  let lista = document.getElementById("lista-carrinho");
  let totalTexto = document.getElementById("total");
  if (!lista || !totalTexto) return; // se não estiver no index.html

  lista.innerHTML = "";
  let total = 0;

  carrinho.forEach((item, i) => {
    let li = document.createElement("li");
    li.textContent = `${item.sabor} | Borda: ${item.borda} | R$ ${item.preco.toFixed(2)}`;
    lista.appendChild(li);
    total += item.preco;
  });

  totalTexto.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function adicionarCarrinho(sabor, bordaId, preco) {
  let borda = document.getElementById(bordaId).value;
  carrinho.push({ sabor, borda, preco });
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarCarrinho();
}

// Mostrar opções Pix/Dinheiro
function mostrarOpcoes() {
  let pagamento = document.getElementById("pagamento").value;
  document.getElementById("pixInfo").style.display = pagamento === "Pix" ? "block" : "none";
  document.getElementById("trocoInfo").style.display = pagamento === "Dinheiro" ? "block" : "none";
}

// Enviar para WhatsApp
function enviarWhatsApp() {
  let nome = document.getElementById("nome").value;
  let telefone = document.getElementById("telefone").value;
  let endereco = document.getElementById("endereco").value;
  let pagamento = document.getElementById("pagamento").value;
  let troco = document.getElementById("troco") ? document.getElementById("troco").value : "";

  let listaItens = "";
  let total = 0;
  carrinho.forEach(item => {
    listaItens += `🍕 ${item.sabor} | Borda: ${item.borda} | R$ ${item.preco.toFixed(2)}%0A`;
    total += item.preco;
  });

  let mensagem = `📦 *Novo Pedido*%0A
🕒 Horário: ${new Date().toLocaleString()}%0A
👤 Nome: ${nome}%0A
📞 Telefone: ${telefone}%0A
📍 Endereço: ${endereco}%0A
💳 Pagamento: ${pagamento}%0A`;

  if (pagamento === "Pix") mensagem += `🔑 Chave Pix: 08757823537%0A`;
  if (pagamento === "Dinheiro" && troco) mensagem += `💵 Troco para: R$ ${troco}%0A`;

  mensagem += `%0A------------------%0A
🍕 *Itens do Pedido*%0A${listaItens}
💰 Total: R$ ${total.toFixed(2)}`;

  let url = `https://wa.me/5574999041959?text=${mensagem}`;
  window.open(url, "_blank");
}

// Atualiza carrinho ao carregar página
atualizarCarrinho();
