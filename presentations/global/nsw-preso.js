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
  if ( event.currentSlide.className.includes("nsw-blue") ){
    document.body.style.backgroundColor = 'var(--nsw-blue)'
  } else if ( event.currentSlide.className.includes("nsw-red") ){
    document.body.style.backgroundColor = 'var(--nsw-red)'
  } else if ( event.currentSlide.className.includes("nsw-purple") ){
    document.body.style.backgroundColor = 'var(--nsw-purple)'
  } else if ( event.currentSlide.className.includes("nsw-grey") ){
    document.body.style.backgroundColor = 'var(--nsw-grey)'
  } else {
    document.body.style.backgroundColor = 'var(--background-color)'
  }


  if ( event.currentSlide.className.includes("dark") ){
    console.log('dark');
    document.body.style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='206' height='221' viewBox='0 0 206 221' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M206 220.396C202.114 212.677 200.499 203.989 201.364 195.358C201.054 184.161 202.627 173.022 205.987 162.404L206 220.396Z' fill='white' fill-opacity='0.075'/%3E%3Cpath d='M120.297 134.157C119.944 153.449 122.538 172.681 127.988 191.18C131.574 202.541 137.949 212.761 146.471 220.923H130.78C117.452 214.757 105.636 203.07 96.3767 186.847C78.0713 154.661 74.1487 114.273 73.6103 85.0263C72.9181 51.3695 75.5332 43.555 76.4561 40.228C77.3791 36.901 78.7635 35.6631 81.6093 35.6631C87.0701 35.8178 110.759 45.644 133.218 62.4337C131.532 63.3743 130.077 64.6825 128.959 66.2622C127.842 67.842 127.089 69.6533 126.757 71.5636C122.629 92.1739 120.466 113.133 120.297 134.157Z' fill='white' fill-opacity='0.075'/%3E%3Cpath d='M138.218 69.7848C140.679 69.2432 143.14 72.0286 144.679 73.3439C146.217 74.6592 185.058 107.542 201.902 149.478C195.658 164.553 192.468 180.73 192.519 197.061C192.304 205.254 193.885 213.393 197.147 220.901H160.662C158.901 219.755 157.196 218.511 155.556 217.172C146.41 209.71 139.7 199.658 136.295 188.318C131.322 170.706 128.887 152.466 129.065 134.158C128.733 114.554 130.486 94.971 134.295 75.7424C134.757 73.6534 135.757 70.3264 138.218 69.7848Z' fill='white' fill-opacity='0.075'/%3E%3Cpath d='M202.671 3.32198C203.671 1.85192 204.524 0.923462 205.985 0.923462V137.02C195.726 116.677 182.16 98.1495 165.983 82.1638C174.864 54.4339 187.19 27.9436 202.671 3.32198Z' fill='white' fill-opacity='0.075'/%3E%3Cpath d='M175.444 34.502C169.137 29.2407 149.909 13.9985 147.14 11.9868C146.423 11.2704 145.547 10.7355 144.584 10.4261C143.621 10.1167 142.599 10.0417 141.602 10.2073C139.679 10.2073 138.372 12.3737 137.449 14.8496C137.449 14.8496 133.295 28.6217 128.988 48.661C139.674 56.3296 149.944 64.5686 159.754 73.3426C164.072 60.0417 169.315 47.0628 175.444 34.502V34.502Z' fill='white' fill-opacity='0.075'/%3E%3Cpath d='M40.9992 143.056C50.1238 138.539 59.4677 134.484 68.9956 130.908C66.9215 117.957 65.7649 104.874 65.5345 91.7581C52.1723 90.3447 38.7448 89.6474 25.3089 89.6691C21.3863 90.1333 19.848 90.9844 18.6174 92.7639C17.688 94.6838 17.3659 96.844 17.6945 98.9537C18.079 103.364 22.1554 118.838 40.9992 143.056V143.056Z' fill='white' fill-opacity='0.075'/%3E%3Cpath d='M70.6112 139.805C73.8532 157.831 79.9835 175.208 88.7627 191.257C94.9485 202.855 103.521 212.954 113.874 220.901H79.6924C59.9378 217.617 42.8666 212.835 29.078 206.113C3.23519 193.346 -0.14899 186.151 0.00483691 182.901C0.158663 179.652 1.62001 177.098 6.7732 173.617C26.7122 159.953 48.1286 148.61 70.6112 139.805Z' fill='white' fill-opacity='0.075'/%3E%3C/svg%3E%0A")`
  } else {
    console.log('light');
    document.body.style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='206' height='221' viewBox='0 0 206 221' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M206 220.396C202.114 212.677 200.499 203.989 201.364 195.358C201.054 184.161 202.627 173.022 205.987 162.404L206 220.396Z' fill='black' fill-opacity='0.075'/%3E%3Cpath d='M120.297 134.157C119.944 153.449 122.538 172.681 127.988 191.18C131.574 202.541 137.949 212.761 146.471 220.923H130.78C117.452 214.757 105.636 203.07 96.3767 186.847C78.0713 154.661 74.1487 114.273 73.6103 85.0263C72.9181 51.3695 75.5332 43.555 76.4561 40.228C77.3791 36.901 78.7635 35.6631 81.6093 35.6631C87.0701 35.8178 110.759 45.644 133.218 62.4337C131.532 63.3743 130.077 64.6825 128.959 66.2622C127.842 67.842 127.089 69.6533 126.757 71.5636C122.629 92.1739 120.466 113.133 120.297 134.157Z' fill='black' fill-opacity='0.075'/%3E%3Cpath d='M138.218 69.7848C140.679 69.2432 143.14 72.0286 144.679 73.3439C146.217 74.6592 185.058 107.542 201.902 149.478C195.658 164.553 192.468 180.73 192.519 197.061C192.304 205.254 193.885 213.393 197.147 220.901H160.662C158.901 219.755 157.196 218.511 155.556 217.172C146.41 209.71 139.7 199.658 136.295 188.318C131.322 170.706 128.887 152.466 129.065 134.158C128.733 114.554 130.486 94.971 134.295 75.7424C134.757 73.6534 135.757 70.3264 138.218 69.7848Z' fill='black' fill-opacity='0.075'/%3E%3Cpath d='M202.671 3.32198C203.671 1.85192 204.524 0.923462 205.985 0.923462V137.02C195.726 116.677 182.16 98.1495 165.983 82.1638C174.864 54.4339 187.19 27.9436 202.671 3.32198Z' fill='black' fill-opacity='0.075'/%3E%3Cpath d='M175.444 34.502C169.137 29.2407 149.909 13.9985 147.14 11.9868C146.423 11.2704 145.547 10.7355 144.584 10.4261C143.621 10.1167 142.599 10.0417 141.602 10.2073C139.679 10.2073 138.372 12.3737 137.449 14.8496C137.449 14.8496 133.295 28.6217 128.988 48.661C139.674 56.3296 149.944 64.5686 159.754 73.3426C164.072 60.0417 169.315 47.0628 175.444 34.502V34.502Z' fill='black' fill-opacity='0.075'/%3E%3Cpath d='M40.9992 143.056C50.1238 138.539 59.4677 134.484 68.9956 130.908C66.9215 117.957 65.7649 104.874 65.5345 91.7581C52.1723 90.3447 38.7448 89.6474 25.3089 89.6691C21.3863 90.1333 19.848 90.9844 18.6174 92.7639C17.688 94.6838 17.3659 96.844 17.6945 98.9537C18.079 103.364 22.1554 118.838 40.9992 143.056V143.056Z' fill='black' fill-opacity='0.075'/%3E%3Cpath d='M70.6112 139.805C73.8532 157.831 79.9835 175.208 88.7627 191.257C94.9485 202.855 103.521 212.954 113.874 220.901H79.6924C59.9378 217.617 42.8666 212.835 29.078 206.113C3.23519 193.346 -0.14899 186.151 0.00483691 182.901C0.158663 179.652 1.62001 177.098 6.7732 173.617C26.7122 159.953 48.1286 148.61 70.6112 139.805Z' fill='black' fill-opacity='0.075'/%3E%3C/svg%3E%0A")`
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
} );

document.addEventListener("keydown", event => {
  if (event.keyCode === 67) {
    confettiBasic();
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
