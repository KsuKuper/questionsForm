const arr = ["rock", "paper", "scissors"];

let player = Math.floor(Math.random() * 3);
console.log(player);
let computer = Math.floor(Math.random() * 3);
console.log(computer);
let resultGame =
  "Players answer is " + arr[player] + " Computers answer is " + arr[computer];
console.log(resultGame);

if (player === computer) {
  resultGame += "It's a tie!";
} else if (
  (player === 0 && computer === 2) ||
  (player === 1 && computer === 0) ||
  (player === 2 && computer === 1)
) {
  resultGame += ". Player wins!";
} else {
  resultGame += ". Computer wins!";
}
console.log(resultGame);
