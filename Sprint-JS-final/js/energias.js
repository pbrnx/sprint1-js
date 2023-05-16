// carrega os votos anteriores, se existirem, armazenados no navegador
let opcao1Votos = parseInt(localStorage.getItem('opcao1Votos')) || 0;
let opcao2Votos = parseInt(localStorage.getItem('opcao2Votos')) || 0;
let opcao3Votos = parseInt(localStorage.getItem('opcao3Votos')) || 0;
let opcao4Votos = parseInt(localStorage.getItem('opcao4Votos')) || 0;
let opcao5Votos = parseInt(localStorage.getItem('opcao5Votos')) || 0;

// Carrega a lista de emails dos votantes
let votantes = JSON.parse(localStorage.getItem('votantes')) || [];

// Limpa o console e usa querySelector para achar os elementos do form
function mostrarResultado() {
  console.clear();
  const opcaoSelecionada = document.querySelector('input[name="opcao"]:checked');
  const email = document.getElementById('email').value;

  // Seleciona o elemento do input do e-mail
  const emailInput = document.getElementById('email');

  while (true) {
    if (email.includes('@') && email.includes('.com')) {
      // e-mail é válido, define a borda como verde
      emailInput.style.borderColor = 'green';
      break;
    } 
    
    else {
      // e-mail é inválido, define a borda como vermelha e exibe uma mensagem de erro
      emailInput.style.borderColor = 'red';
      alert('Por favor, insira um email válido');
      return;
    }
  }

  if (opcaoSelecionada) {
    const valorSelecionado = opcaoSelecionada.value;

    // Verifica se o email já votou
    if (votantes.includes(email)) {
      alert('Este email já votou.');
      return;
    }

    // Atualiza o contador de votos para a opção selecionada
    if (valorSelecionado === 'opcao1') {
      opcao1Votos++;
      localStorage.setItem('opcao1Votos', opcao1Votos.toString());
    } 
    else if (valorSelecionado === 'opcao2') {
      opcao2Votos++;
      localStorage.setItem('opcao2Votos', opcao2Votos.toString());
    } 
    else if (valorSelecionado === 'opcao3') {
      opcao3Votos++;
      localStorage.setItem('opcao3Votos', opcao3Votos.toString());
    } 
    else if (valorSelecionado === 'opcao4') {
      opcao4Votos++;
      localStorage.setItem('opcao4Votos', opcao4Votos.toString());
    } 
    else if (valorSelecionado === 'opcao5') {
      opcao5Votos++;
      localStorage.setItem('opcao5Votos', opcao5Votos.toString());
    }

    // Adiciona o email à lista de votantes
    votantes.push(email);
    localStorage.setItem('votantes', JSON.stringify(votantes));
    alert('Obrigado por votar');
    
    // Exibe os resultados atualizados com o console limpo
    console.log(`Opção 1 recebeu ${opcao1Votos} votos`);
    console.log(`Opção 2 recebeu ${opcao2Votos} votos`);
    console.log(`Opção 3 recebeu ${opcao3Votos} votos`);
    console.log(`Opção 4 recebeu ${opcao4Votos} votos`);
    console.log(`Opção 5 recebeu ${opcao5Votos} votos`);
    console.log(votantes);
  } 
  
  else {
     alert('Por favor, selecione uma opção');
  }
}



