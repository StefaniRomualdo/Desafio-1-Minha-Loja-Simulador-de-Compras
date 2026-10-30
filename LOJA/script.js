// Preços iguais aos exibidos no index.html
const PRECO_PUDIM = 7.00;
const PRECO_TORTA = 8.00;
const PRECO_CASEIRINHO = 5.00;



function formatarReais(valor) 
{
  return "R$ " + valor.toFixed(2).replace(".", ",");
}


function perguntarQuantidade(nomeProduto, preco) 
{
  const resposta = prompt 
  (
    nomeProduto + " — " + formatarReais(preco) + "\n\n" +
    "Quantas unidades você quer?\n(digite 0 para não comprar)"
  );


  if (resposta === null || resposta.trim() === "") 
    {
    return 0; 
  }



  const quantidade = Number(resposta);

  if (isNaN(quantidade) || quantidade < 0 || !Number.isInteger(quantidade)) 
    {
    alert("Quantidade inválida para " + nomeProduto + ".\nDigite um número inteiro, de 0 em diante.");
    return null;
    } 
  return quantidade;
}



function simularCompra() 
{

    // Perguntar a quantidade de produto
  const qtdPudim = perguntarQuantidade("Pudim Tradicional", PRECO_PUDIM);
  if (qtdPudim === null) return;

  const qtdTorta = perguntarQuantidade("Torta de Limão", PRECO_TORTA);
  if (qtdTorta === null) return;

  const qtdCaseirinho = perguntarQuantidade("Mini Caseirinho de Cenoura com Chocolate", PRECO_CASEIRINHO);
  if (qtdCaseirinho === null) return;

  // Se nenhum produto for selecionado
  if (qtdPudim === 0 && qtdTorta === 0 && qtdCaseirinho === 0) 
    {
    alert("Nenhum produto foi selecionado.");
    return;
    }

  // Valor dos produtos
  const valorPudim = PRECO_PUDIM * qtdPudim;
  const valorTorta = PRECO_TORTA * qtdTorta;
  const valorCaseirinho = PRECO_CASEIRINHO * qtdCaseirinho;

  const total = valorPudim + valorTorta + valorCaseirinho;

  // Resumo/Extrato
  const linha = "━━━━━━━━━━━━━━━━━━━━━━";
  let resumo = "DOCE ILHA — NOTA DA COMPRA\n" + linha + "\n\n";


  if (qtdPudim > 0) 
    {
    resumo += "• Pudim Tradicional\n";
    resumo += "   " + qtdPudim + " x " + formatarReais(PRECO_PUDIM) + " = " + formatarReais(valorPudim) + "\n\n";
    }


  if (qtdTorta > 0) 
    {
    resumo += "• Torta de Limão\n";
    resumo += "   " + qtdTorta + " x " + formatarReais(PRECO_TORTA) + " = " + formatarReais(valorTorta) + "\n\n";
    }


  if (qtdCaseirinho > 0) 
    {
    resumo += "• Mini Caseirinho de Cenoura com Chocolate\n";
    resumo += "   " + qtdCaseirinho + " x " + formatarReais(PRECO_CASEIRINHO) + " = " + formatarReais(valorCaseirinho) + "\n\n";
    }

  resumo += linha + "\n";
  resumo += "TOTAL: " + formatarReais(total) + "\n\n";
  resumo += "Obrigada pela preferência!";

  alert(resumo);

}