
function blowOutCandle() {
  alert("Candle blown out!");
  showFireworks();
}

function showMakeAWish() {
  const message = document.getElementById('make-a-wish');
  message.style.display = 'block';
}

function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.top = Math.random() * window.innerHeight + 'px';
  sparkle.style.left = Math.random() * window.innerWidth + 'px';
  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1000);
}

// Create sparkles every 300ms
setInterval(createSparkle, 300);

