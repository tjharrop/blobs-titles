const colors = ["#D45B52","#829C92","#61A4B8","#E8C75C","#B5A496","#E38A85","#519DD8","#88D4D8", "#7B9C90","#D65C83","#FCBF49","#33E4FF","#F66C51","#33C1B1"];
const brightColors = ["#FF2222","#E8C75C","#519DF8","#88D4D8","#FCBF49","#33E4FF","#FF6C51","#33C1B1"];

Reveal.initialize({
  hash: true,
  transition: 'none',
  plugins: [ RevealMarkdown, RevealHighlight, RevealNotes, RevealFullscreen ]
}).then( () => {
  // generateBlob();
} );

Reveal.on( 'slidechanged', event => {

  if ( event.currentSlide.getAttribute("data-playaudio") ){
    playaudio(event.currentSlide.getAttribute("data-playaudio"));
  }
  if ( event.currentSlide.className.includes("confetti") ){
    confettiMachine();
  }
  if ( event.currentSlide.className.includes("basic-canon") ){
    confettiBasic();
  }
  if ( event.currentSlide.className.includes("fireworks") ){
    confettiFireworks();
    setTimeout(function(){
      confettiBasic();
    }, 6200);
  }
  if ( event.currentSlide.className.includes("blobtastic") ){
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      generateBlob();
    }, 500);
  }
  if ( event.currentSlide.className.includes("end") ){
    midBlob();
    var duration = 50 * 1000;
    var animationEnd = Date.now() + duration;

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      midBlob();
    }, 3000);
  }
  else if ( event.currentSlide.className.includes("mid") ){
        midBlob();
  }
  else {
    generateBlob();
  }
} );

document.addEventListener("keydown", event => {
  if (event.keyCode === 71) {
    generateBlob();
  }
  if (event.keyCode === 67) {
    confettiBasic();
  }
  if (event.keyCode === 77) {
    midBlob();
  }
});

Reveal.on( 'fragmentshown', event => {
  if ( event.fragment.className.includes("confetti") ){
    confettiMachine();
  }
  if ( event.fragment.className.includes("basic-canon") ){
    confettiBasic();
  }
} );



function generateBlob() {
  const rand = Math.floor(Math.random()*colors.length);

  const percentage1 = _.random(20, 75);
  const percentage2 = _.random(30, 95);
  const percentage3 = _.random(18, 60);
  const percentage4 = _.random(25, 75);
  var percentage11 = 100 - percentage1;
  var percentage21 = 100 - percentage2;
  var percentage31 = 100 - percentage3;
  var percentage41 = 100 - percentage4;
  var borderRadius = `${percentage1}% ${percentage11}% ${percentage21}% ${percentage2}% / ${percentage3}% ${percentage4}% ${percentage41}% ${percentage31}%`;

  const top = _.random(-25, 85); //top
  const right = _.random(-20, 10); //right
  const rotate = _.random(0, 180); //rotate
  const zoom = _.random(5, 12);

  document.querySelector('.blob').style.right = `${right}%`
  document.querySelector('.blob').style.top = `${top}%`
  document.querySelector('.blob').style.transform =  `scale(${zoom}) rotateZ(${rotate}deg)`
  document.querySelector('.blob').style.background =  colors[rand]
  document.querySelector('.blob').style.borderRadius = borderRadius
}

function midBlob() {
  const rand = Math.floor(Math.random()*colors.length);

  const percentage1 = _.random(20, 75);
  const percentage2 = _.random(30, 50);
  const percentage3 = _.random(18, 60);
  const percentage4 = _.random(25, 75);
  var percentage11 = 100 - percentage1;
  var percentage21 = 100 - percentage2;
  var percentage31 = 100 - percentage3;
  var percentage41 = 100 - percentage4;
  var borderRadius = `${percentage1}% ${percentage11}% ${percentage21}% ${percentage2}% / ${percentage3}% ${percentage4}% ${percentage41}% ${percentage31}%`;

  const rotate = _.random(0, 180); //rotate
  const zoom = _.random(4, 5);

  document.querySelector('.blob').style.right = `45%`
  document.querySelector('.blob').style.top = `40%`
  document.querySelector('.blob').style.transform =  `scale(${zoom}) rotateZ(${rotate}deg)`
  document.querySelector('.blob').style.background =  colors[rand]
  document.querySelector('.blob').style.borderRadius = borderRadius
}

function confettiMachine() {
  var end = Date.now() + (2 * 1000);
  const confet1 = Math.floor(Math.random()*brightColors.length);
  const confet2 = Math.floor(Math.random()*brightColors.length);
  const confet3 = Math.floor(Math.random()*brightColors.length);
  var confettiColors = [brightColors[confet1], brightColors[confet2], brightColors[confet3], '#ffffff'];

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: confettiColors
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: confettiColors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function confettiBasic() {
  const confet1 = Math.floor(Math.random()*brightColors.length);
  const confet2 = Math.floor(Math.random()*brightColors.length);
  const confet3 = Math.floor(Math.random()*brightColors.length);
  var confettiColors = [brightColors[confet1], brightColors[confet2], brightColors[confet3], '#ffffff'];

    confetti({
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      particleCount: randomInRange(50, 100),
      origin: { y: 0.6 },
      colors: confettiColors
    });

}

function confettiFireworks() {
  var duration = 5 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, colors: brightColors }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, colors: brightColors }));
  }, 250);
}

function gifCycle(img,gifList)
{
  var rand = Math.floor(Math.random()*gifList.length);
  img.src = gifList[rand];
}

function playaudio(file) {
  var audio = new Audio(file);
  audio.play();
}
