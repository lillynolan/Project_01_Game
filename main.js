let playerTurn = [];
let blue = document.getElementById('blue');
let green = document.getElementById('green');
let yellow = document.getElementById('yellow');
let red = document.getElementById('red');
let computerTurn1 = [blue, green, yellow];
let computerTurn2 = [blue, green, yellow, yellow];
let index = 0;

function roundOne () {
  let i;
  for(i = 0; i < computerTurn1.length; i++) {
    $(computerTurn1[i]).css("background-color", "grey")
  }
  setInterval(roundOne, 2000);
}

function roundTwo () {
  let i;
  for(i = 0; i < computerTurn2.length; i++) {
    $(computerTurn2[i]).css("background-color", "red")
  }
}




// Reference Links
// Thought about stoplight animation for how to get the divs to light up, looked at link
// https://stackoverflow.com/questions/43594730/javascript-traffic-light


