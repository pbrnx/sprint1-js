const image = document.getElementById('energias');

image.addEventListener('mouseover', () => {
  image.style.transition = 'width 0.6s ease';
  image.style.width = '700px';
});

image.addEventListener('mouseout', () => {
  image.style.width = '500px';
});

function mostrarResultado() {
  // Encontra o radio button selecionado pelo usuário
  const opcaoSelecionada = document.querySelector('input[name="opcao"]:checked');

  // Verifica se o usuário selecionou alguma opção
  if (opcaoSelecionada) {
    // Obtém o valor selecionado pelo usuário
    const valorSelecionado = opcaoSelecionada.value;
    // Mostra o resultado na página
    alert("Obrigado por votar!")
  } else {
    alert('Por favor, selecione uma opção');
  }
}





