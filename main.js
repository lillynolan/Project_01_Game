let blue = document.getElementById('blue');
let green = document.getElementById('green');
let yellow = document.getElementById('yellow');
let red = document.getElementById('red');
let color = document.getElementsByClassName("color");
let computerTurn1 = [blue, green, yellow]
let playerArr = [];
let i = 0;

let start = document.getElementById("start");
start.addEventListener("click", startGame);

function startGame() {
setInterval(computerRound, 700);
}

function removeLight() {
  $("#green").removeClass('highlight');
  $("#yellow").removeClass('highlight');
  $("#blue").removeClass('highlight');
  $("#red").removeClass('highlight');
}

function computerRound() {
  removeLight()//turning off every 700 ms
  window.setTimeout( () => {//wrapping in a function thats called every 300ms, delaying the highlight
    $(computerTurn1[i]).addClass('highlight');
    i++;
    if (i === computerTurn1.length -1) { //when it accesses the last one, turns off interval
      clearInterval();//turn off the interval
    }
  }, 300);
}

function nextLevel() {
  let num = Math.floor(Math.random() * 4 + 1); //looked how to generate random number https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  if (num === 1) {
    computerTurn1.push(blue)
  }
  else if (num === 2) {
    computerTurn1.push(green)
  }
  else if (num === 3) {
    computerTurn1.push(yellow)
  }
  else if (num === 4) {
    computerTurn1.push(red)
  }
  else if (computerTurn1.length === 14) {
    console.log("You Win!")
  }
  i = 0;
  playerArr = [];
  startGame();
}
//generating random number 1-4, and assigning each number to color div

for (let i = 0; i < color.length; i++) {
  color[i].addEventListener('click', playerTurn)
}

function playerTurn() {
  let id = this.id;
  console.log(id);
  playerArr.push(document.getElementById(id));
  console.log(playerArr);
  if (playerArr.length === computerTurn1.length) { //when the player array length is equal to the computer array run the check
    if (check()) {
      nextLevel();
      }
    else {
      alert("You Lose!");
      location.reload();
    }
  }
}

function check() {
for (let i = 0; i < playerArr.length; i++) {
// index in the array, grp of elements
  if (playerArr[i].id != computerTurn1[i].id) {
  return false; //if ids in player array does not equal computer array return false
  }
  }
  return true;
}



// Reference Links
// Thought about stoplight animation for how to get the divs to light up,
// https://stackoverflow.com/questions/43594730/javascript-traffic-light,
//Clear intervals: https://www.w3schools.com/jsref/met_win_setinterval.asp


