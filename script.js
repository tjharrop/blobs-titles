const indicator = document.querySelector(".page-title");

let currentState = indicator.dataset.state;

indicator.addEventListener("click", () => {
  let nextState = "";
  let nextTitle = "";

  if (currentState == "HELLO") {
    nextState = "RULES";
    nextTitle = "Rules As Code"
  } else if (currentState == "RULES") {
    nextState = "DESOPS";
    nextTitle = "Design ops"
  } else if (currentState == "DESOPS") {
    nextState = "CLIENTS";
    nextTitle = "Who I work for"
  } else if (currentState == "CLIENTS") {
    nextState = "CONTACT";
    nextTitle = "Contact me"
  } else {
    nextState = "HELLO";
    nextTitle = "TJ Harrop";
  }
  
  indicator.dataset.state = nextState;
  indicator.querySelector('h1').textContent = nextTitle;
  currentState = nextState;
});