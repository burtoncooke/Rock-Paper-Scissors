function getBotMove() {

  var randomNumber = Math.floor(Math.random() * 3); 

  if(randomNumber === 0) {
    return "Rock";
  }
  else if(randomNumber === 1) {
    return "Paper";
  }
  else if(randomNumber === 2) {
    return "Scissors";
  }
}