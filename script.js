const spinningImg = document.querySelector('.spinning-img');
const stopStartBtn = document.querySelector('.btn');
const spinningNumber = document.querySelector('.selected-number');

let spinningDeg = 0;
let spinning = false;
let spinningInterval;

spinningImg.style.transform = `rotate(${spinningDeg}deg)`;

stopStartBtn.addEventListener('click', (e) => {
  spinning = !spinning;

  if (!spinning) {
    e.target.innerHtml = 'Start Spinning';
    clearInterval(spinningInterval);

    const selectedNumber = spinningResult(spinningDeg);

    spinningNumber.innerHTML = selectedNumber;

    return;
  }

  spinningNumber.innerHTML = '';
  e.target.innerHtml = 'Stop Spinning';
  spinningInterval = setInterval(() => {
    spinningDeg += 10;
    if (spinningDeg === 360) {
      spinningDeg = 0;
    }

    spinningImg.style.transform = `rotate(${spinningDeg}deg)`;
  }, 10);
});

function spinningResult(deg) {
  if (deg <= 45) {
    return '1';
  }
  if (deg > 45 && deg <= 90) {
    return '8';
  }
  if (deg > 90 && deg <= 135) {
    return '7';
  }
  if (deg > 135 && deg <= 180) {
    return '6';
  }
  if (deg > 180 && deg <= 225) {
    return '5';
  }
  if (deg > 225 && deg <= 270) {
    return '4';
  }
  if (deg > 270 && deg <= 315) {
    return '3';
  }
  if (deg > 315 && deg <= 360) {
    return '2';
  }
}
