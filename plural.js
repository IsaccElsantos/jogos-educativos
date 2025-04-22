const words = [
    { hint: "Qual o plural de gato? 🐈", word: "gatos" },
    { hint: "Qual o plural de sol? 🌞", word: "sóis" },
    { hint: "Qual o plural de coração? ❤", word: "corações" },
    { hint: "Qual o plural de cão? 🐕", word: "cães" },
    { hint: "Qual o plural de laranja? 🍊", word: "laranjas" }
  ];
  
  let currentPhase = 0;

  function loadPhase() {
    if (currentPhase < words.length) {
      const current = words[currentPhase];
      document.getElementById("hint").textContent = "Responda: " + current.hint;
      document.getElementById("phaseText").textContent = `Fase ${currentPhase + 1}`;
      document.getElementById("guessInput").value = "";
      document.getElementById("result").textContent = "";
      document.getElementById("guessInput").disabled = false;
      document.getElementById("checkButton").textContent = "Verificar";
    } else {
      document.getElementById("hint").textContent = "";
      document.getElementById("phaseText").textContent = "🏁 Fim do Jogo!";
      document.getElementById("result").textContent = "Parabéns! Você completou todas as fases!";
      document.getElementById("result").style.color = "green";
      document.getElementById("guessInput").disabled = true;
      document.getElementById("checkButton").textContent = "Reiniciar";
    }
  }

  function checkGuess() {
    if (currentPhase >= words.length) {
      currentPhase = 0;
      loadPhase();
      return;
    }

    const guess = document.getElementById("guessInput").value.trim().toLowerCase();
    const correctWord = words[currentPhase].word;

    if (guess === correctWord) {
      document.getElementById("result").textContent = "✅ Acertou!";
      document.getElementById("result").style.color = "green";
      currentPhase++;
      setTimeout(loadPhase, 1000);

      document.getElementById('explodir');addEventListener('click', () => {
        const gatinhos = document.querySelectorAll('.gatinho');
    
        gatinhos.forEach((gatinho) => {
            const randomX = Math.random() * 1000 - 500; // Movimento aleatório para X
            const randomY = Math.random() * 1000 - 500; // Movimento aleatório para Y
            const randomRotation = Math.random() * 360; // Rotação aleatória
            const randomOpacity = Math.random() * 0.5 + 0.5; // Opacidade aleatória
    
            // Aplicar as transformações
            gatinho.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
            gatinho.style.opacity = randomOpacity;
        });
    });


      
    } else {
      document.getElementById("result").textContent = "❌ Errado! Tente novamente.";
      document.getElementById("result").style.color = "red";
    }
  }

  // Inicia a primeira fase
  loadPhase();