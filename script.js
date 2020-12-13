const indicator = document.querySelector(".page-title");

let currentState = indicator.dataset.state;

indicator.addEventListener("click", () => {
  let nextState = "";
  let nextTitle = "";

  if (currentState == "HELLO") {
    nextState = "RULES";
    nextTitle = "Rules As Code"
    var tween = KUTE.to('#blobpath', { path: 'M48.3,-55.7C61.7,-46.2,71.2,-30.2,76.2,-12C81.1,6.3,81.5,26.8,72.9,42.4C64.3,58,46.6,68.8,28.5,73.2C10.3,77.6,-8.2,75.7,-22.5,67.9C-36.8,60.1,-46.7,46.4,-54,32C-61.2,17.7,-65.8,2.6,-64.2,-12.1C-62.5,-26.9,-54.7,-41.3,-42.9,-51.1C-31.2,-60.9,-15.6,-66.1,0.9,-67.2C17.4,-68.2,34.8,-65.2,48.3,-55.7Z' }).start();
  } else if (currentState == "RULES") {
    nextState = "DESOPS";
    nextTitle = "Design ops"
    var tween = KUTE.to('#blobpath', { path: 'M47,-56.5C59.4,-45.6,67.1,-29.4,68.6,-13.2C70.1,3,65.6,19.1,58.8,36.9C52,54.6,43,74,28.5,80.1C14,86.1,-6,78.8,-24,70.3C-41.9,61.8,-57.9,52.2,-69.3,37.5C-80.8,22.8,-87.7,3.1,-82.7,-12.7C-77.8,-28.6,-60.8,-40.5,-45.1,-50.8C-29.3,-61.1,-14.6,-69.8,1.3,-71.4C17.3,-72.9,34.6,-67.4,47,-56.5Z' }).start();
  } else if (currentState == "DESOPS") {
    nextState = "CLIENTS";
    nextTitle = "Who I work for"
    var tween = KUTE.to('#blobpath', { path: 'M51.9,-61.7C62.4,-53,62.7,-32.1,64.6,-12.7C66.5,6.7,70,24.6,63.5,37.4C57,50.3,40.5,58.1,23.1,65.2C5.7,72.2,-12.6,78.5,-30.3,75.4C-48.1,72.4,-65.4,60,-74.1,43.5C-82.9,26.9,-83.1,6.1,-77.8,-11.9C-72.5,-30,-61.6,-45.2,-47.7,-53.3C-33.8,-61.4,-16.9,-62.3,1.9,-64.6C20.7,-66.8,41.4,-70.4,51.9,-61.7Z' }).start();
  } else if (currentState == "CLIENTS") {
    nextState = "CONTACT";
    nextTitle = "Contact me"
    var tween = KUTE.to('#blobpath', { path: 'M48.9,-55.9C62.6,-46.7,72.6,-30.6,77.5,-12.3C82.4,6.1,82.2,26.7,73.4,42.6C64.5,58.6,47,69.7,27.6,77.5C8.2,85.2,-13,89.5,-30.7,83.5C-48.5,77.4,-62.8,61,-69.6,43.1C-76.3,25.3,-75.6,6.1,-72.7,-13.3C-69.9,-32.6,-64.9,-52,-52.4,-61.5C-40,-70.9,-20,-70.3,-1.2,-68.8C17.6,-67.4,35.1,-65.1,48.9,-55.9Z' }).start();
  } else {
    nextState = "HELLO";
    nextTitle = "TJ Harrop";
    var tween = KUTE.to('#blobpath', { path: 'M56.3,-65.1C71.3,-54.6,80.5,-35.2,80.1,-17.1C79.7,0.9,69.7,17.7,58.7,31.1C47.6,44.5,35.6,54.5,21.8,59.1C8.1,63.6,-7.2,62.8,-25.5,60.3C-43.8,57.9,-65.1,53.9,-77.4,40.7C-89.7,27.6,-93,5.3,-86.6,-12.5C-80.2,-30.4,-64.1,-43.8,-48.1,-54.2C-32,-64.5,-16,-71.9,2.3,-74.6C20.7,-77.4,41.4,-75.7,56.3,-65.1Z' }).start();
  }

  indicator.dataset.state = nextState;
  indicator.querySelector('h1').textContent = nextTitle;
  currentState = nextState;
});

$(document).ready(function() {
  $(window).scroll(function() {
    var scrollTop = (($(document).scrollTop() / $(document).height()) / 0.2);
    $("#scrollTop").text(scrollTop);
    if (scrollTop > 3.5) {
      indicator.dataset.state = "RULES";
      var tween = KUTE.to('#blobpath', { path: 'M48.3,-55.7C61.7,-46.2,71.2,-30.2,76.2,-12C81.1,6.3,81.5,26.8,72.9,42.4C64.3,58,46.6,68.8,28.5,73.2C10.3,77.6,-8.2,75.7,-22.5,67.9C-36.8,60.1,-46.7,46.4,-54,32C-61.2,17.7,-65.8,2.6,-64.2,-12.1C-62.5,-26.9,-54.7,-41.3,-42.9,-51.1C-31.2,-60.9,-15.6,-66.1,0.9,-67.2C17.4,-68.2,34.8,-65.2,48.3,-55.7Z', svgTransform: {scale:7} }).start();
    } else if (scrollTop > 2.5 && scrollTop < 3.5) {
      indicator.dataset.state = "DESOPS";
      var tween = KUTE.to('#blobpath', { path: 'M47,-56.5C59.4,-45.6,67.1,-29.4,68.6,-13.2C70.1,3,65.6,19.1,58.8,36.9C52,54.6,43,74,28.5,80.1C14,86.1,-6,78.8,-24,70.3C-41.9,61.8,-57.9,52.2,-69.3,37.5C-80.8,22.8,-87.7,3.1,-82.7,-12.7C-77.8,-28.6,-60.8,-40.5,-45.1,-50.8C-29.3,-61.1,-14.6,-69.8,1.3,-71.4C17.3,-72.9,34.6,-67.4,47,-56.5Z', svgTransform: {scale:9} }).start();
    } else if (scrollTop > 1.5 && scrollTop < 2.5) {
      indicator.dataset.state = "CLIENTS";
      var tween = KUTE.to('#blobpath', { path: 'M51.9,-61.7C62.4,-53,62.7,-32.1,64.6,-12.7C66.5,6.7,70,24.6,63.5,37.4C57,50.3,40.5,58.1,23.1,65.2C5.7,72.2,-12.6,78.5,-30.3,75.4C-48.1,72.4,-65.4,60,-74.1,43.5C-82.9,26.9,-83.1,6.1,-77.8,-11.9C-72.5,-30,-61.6,-45.2,-47.7,-53.3C-33.8,-61.4,-16.9,-62.3,1.9,-64.6C20.7,-66.8,41.4,-70.4,51.9,-61.7Z', svgTransform: {scale:5} }).start();
    } else if (scrollTop > 0.5 && scrollTop < 1.5) {
      indicator.dataset.state = "CONTACT";
      var tween = KUTE.to('#blobpath', { path: 'M48.9,-55.9C62.6,-46.7,72.6,-30.6,77.5,-12.3C82.4,6.1,82.2,26.7,73.4,42.6C64.5,58.6,47,69.7,27.6,77.5C8.2,85.2,-13,89.5,-30.7,83.5C-48.5,77.4,-62.8,61,-69.6,43.1C-76.3,25.3,-75.6,6.1,-72.7,-13.3C-69.9,-32.6,-64.9,-52,-52.4,-61.5C-40,-70.9,-20,-70.3,-1.2,-68.8C17.6,-67.4,35.1,-65.1,48.9,-55.9Z', svgTransform: {scale:9} }).start();
    } else {
      indicator.dataset.state = "HELLO";
      var tween = KUTE.to('#blobpath', { path: 'M56.3,-65.1C71.3,-54.6,80.5,-35.2,80.1,-17.1C79.7,0.9,69.7,17.7,58.7,31.1C47.6,44.5,35.6,54.5,21.8,59.1C8.1,63.6,-7.2,62.8,-25.5,60.3C-43.8,57.9,-65.1,53.9,-77.4,40.7C-89.7,27.6,-93,5.3,-86.6,-12.5C-80.2,-30.4,-64.1,-43.8,-48.1,-54.2C-32,-64.5,-16,-71.9,2.3,-74.6C20.7,-77.4,41.4,-75.7,56.3,-65.1Z', svgTransform: {scale:4} }).start();
    }
  });

  // Bind to the click of all links with a #hash in the href
  $('a[href^="#"]').click(function(e) {
    // Prevent the jump and the #hash from appearing on the address bar
    e.preventDefault();
    // Scroll the window, stop any previous animation, stop on user manual scroll
    // Check https://github.com/flesler/jquery.scrollTo for more customizability
    $(window).stop(true).scrollTo(this.hash, {duration:300, interrupt:false});
  });
});
