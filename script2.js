
function adjustTextBlockHeight() {
  const imageBlock = document.querySelector('.image-block img');
  const textBlock = document.querySelector('.text-block');
  const imageHeight = imageBlock.clientHeight; // Ottieni l'altezza dell'immagine
  
  // Imposta l'altezza del text-block per essere uguale a quella dell'immagine
  textBlock.style.maxHeight = imageHeight + 'px';
}

// Chiamata alla funzione quando la finestra viene ridimensionata
window.addEventListener('resize', adjustTextBlockHeight);

// Chiamata iniziale per settare l'altezza correttamente
adjustTextBlockHeight();