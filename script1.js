// Funzione per mostrare/nascondere il testo
function toggleText(id) {
  const text = document.getElementById(id);
  const allTexts = document.querySelectorAll(".hidden-text");
  const allButtons = document.querySelectorAll(".toggle-button");

  // Nascondi tutti gli altri testi e ripristina i pulsanti
  allTexts.forEach((otherText) => {
    if (otherText !== text) {
      otherText.classList.remove("visible"); // Nasconde gli altri testi
    }
  });

  allButtons.forEach((button) => {
    if (button !== text.previousElementSibling.querySelector(".toggle-button")) {
      button.textContent = "+"; // Cambia gli altri pulsanti a "+"
    }
  });

  // Mostra o nasconde il testo selezionato
  if (text.classList.contains("visible")) {
    text.classList.remove("visible"); // Nasconde il testo
    text.previousElementSibling.querySelector(".toggle-button").textContent = "+"; // Cambia il simbolo
  } else {
    text.classList.add("visible"); // Mostra il testo
    text.previousElementSibling.querySelector(".toggle-button").textContent = "-"; // Cambia il simbolo
  }
}

