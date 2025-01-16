// Funzione per mostrare/nascondere il testo
function toggleText(id) {
  const text = document.getElementById(id);
  const button = text.previousElementSibling.querySelector(".toggle-button");

  if (text.classList.contains("visible")) {
    text.classList.remove("visible"); // Nasconde il testo
    button.textContent = "+"; // Cambia il simbolo
  } else {
    text.classList.add("visible"); // Mostra il testo
    button.textContent = "-"; // Cambia il simbolo
  }
}