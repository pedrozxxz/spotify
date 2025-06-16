// Interação simples ao clicar nas imagens
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    alert(`Você clicou em: ${card.textContent.trim()}`);
  });
});
