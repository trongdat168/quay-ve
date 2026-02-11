let currentAudio = null;

function toggleAudio(id) {
  const audio = document.getElementById(id);

  if (currentAudio && currentAudio !== audio) {
    currentAudio.pause();
  }

  if (audio.paused) {
    audio.volume = 0.3;
    audio.play();
    currentAudio = audio;
  } else {
    audio.pause();
  }
}
