var wins = 0;
var losses = 0;
var ties = 0;

var options = ["R", "P", "S"];

var playGame = function(){
    var userChoice = window.prompt("Enter R, P, or S");
if (!userChoice) {
    return;
}

 userChoice = userChoice.toUpperCase();

 var index = Math.floor(Math.random() * options.length);
 var computerChoice = options[index];

 window.alert("Computer chose " + computerChoice);

  if (userChoice === computerChoice) {
      ties ++;
      window.alert("Tie!");

  } else if (
      (userChoice === "R" && computerChoice === "S") ||
      (userChoice === "P" && computerChoice ==="R") ||
      (userChoice === "S" && computerChoice === "P")
  ) {
      wins++;
      window.alert("You Won!");

   } else {
          losses++;
          window.alert("You Lose!");
      }
  
      window.alert(
          "Stats:\nWins: " + wins + "\nLosees: " + "\nTies: " + ties
      );

      var playAgain = window.confirm("Rematch?");
 
        if (playAgain) {
            playGame();
        }
};

playGame();