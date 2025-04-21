const words = [
    { hint: "Qual o plural de gato? 🐈(Digite corretamente acentuado)", word: "gatos" },
    { hint: "Qual o plural de sol? 🌞(Digite corretamente acentuado)", word: "sóis" },
    { hint: "Qual o plural de coração? ❤ (Digite corretamente acentuado)", word: "corações" },
    { hint: "Qual o plural de cão? 🐕 (Digite corretamente acentudado)", word: "cães" },
    { hint: "Qual o plral de laranja? 🍊(Digite corretamente acentuado)", word: "laranjas" }
  ];

  let currentPhase = 0;

  function loadPhase() {
    if (currentPhase < words.length) {
      const current = words[currentPhase];
      document.getElementById("hint").textContent = "Dica: " + current.hint;
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
    } else {
      document.getElementById("result").textContent = "❌ Errado! Tente novamente.";
      document.getElementById("result").style.color = "red";
    }
  }

  // Inicia a primeira fase
  loadPhase();