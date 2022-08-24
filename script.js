let form = document.querySelector("form");
form.onsubmit = submit;
function submit(e) {
  e.preventDefault();
  // get input
  let input = document.querySelector("input");
  if (input.value === "ok") {
    alert("good, you will be usefull");
  } else if (input.value === "no") {
    alert("Then leave!!!!!!");
  } else if (input.value === "yes") {
    alert("you will be verrrrrrrrrrrryyyyyyyyyyyyyyyyyyyyy usefull");
  } else if (input.value === "i gatta poo") {
    alert("Go down and to the left and you should find a bathroom");
  } else {
    alert("Say that again, I can't hear you!");
  }
}
