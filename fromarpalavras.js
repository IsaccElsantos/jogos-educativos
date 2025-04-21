const palavras = ['CASA', 'GATO', 'FLORESTA', 'BOLA', 'PEIXE'];
let palavraCorreta = '';
let letrasSelecionadas = '';

function embaralhar(array) {
  return array.sort(() => Math.random() - 0.5);
}

function iniciarJogo() {
  document.getElementById('resposta').textContent = '';
  document.getElementById('mensagem').textContent = '';
  letrasSelecionadas = '';

  palavraCorreta = palavras[Math.floor(Math.random() * palavras.length)];
  const letras = palavraCorreta.split('');
  const embaralhadas = embaralhar([...letras]);

  const container = document.getElementById('letras');
  container.innerHTML = '';

  embaralhadas.forEach((letra, index) => {
    const div = document.createElement('div');
    div.classList.add('letra');
    div.textContent = letra;
    div.onclick = () => selecionarLetra(div, letra);
    container.appendChild(div);
  });
}

function selecionarLetra(elemento, letra) {
  letrasSelecionadas += letra;
  elemento.style.visibility = 'hidden';
  document.getElementById('resposta').textContent = letrasSelecionadas;

  if (letrasSelecionadas.length === palavraCorreta.length) {
    if (letrasSelecionadas === palavraCorreta) {
      document.getElementById('mensagem').textContent = '✅ Parabéns! Você acertou!';
    } else {
      document.getElementById('mensagem').textContent = '❌ Ops! Tente novamente.';
    }
  }
}

function reiniciar() {
  iniciarJogo();
}

// Inicia o jogo ao carregar a página
iniciarJogo();