const audio = document.getElementById("audio-player");
const playerThumb = document.getElementById("player-thumb");
const playerTitle = document.getElementById("player-title");
const playerArtist = document.getElementById("player-artist");

const songRows = document.querySelectorAll(".song-row");

// Arquivo único de áudio
const audioFile = "./Quero Ser Feliz Também (Ao Vivo) - Natiruts.mp3";

songRows.forEach(row => {
  row.addEventListener("click", () => {
    const title = row.querySelector(".song-title").textContent;
    const thumb = row.querySelector("img").src;

    // Atualiza o player com os dados visuais da música selecionada
    playerThumb.src = thumb;
    playerTitle.textContent = title;
    playerArtist.textContent = "Natiruts";

    // Sempre toca o mesmo áudio
    audio.src = audioFile;
    audio.play();
  });
});
