
function blowOutCandle() {
  alert("Candle blown out!");
  showFireworks();
}

function showFireworks() {
  const fireworks = document.getElementById('fireworks');
  fireworks.style.display = 'block';
  fireworks.innerHTML = "<p style='color: white; font-size: 24px;'>✨ Fireworks! ✨</p>";

  setTimeout(() => {
    fireworks.style.display = 'none';
    showMakeAWish();
  }, 5000);
}

function showMakeAWish() {
  const message = document.getElementById('make-a-wish');
  message.style.display = 'block';
}
