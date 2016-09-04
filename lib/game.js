$( document ).ready(function() {

  $('.move').on('click', function() {

    var humanMove = $(this).text();
    var botMove = getBotMove();

    console.log("got human move:", humanMove);
    console.log("got computer move:", botMove);

    var winner;

    if(humanMove === botMove) {
      winner = "tie"
    }
    else {
      if(humanMove === "Rock") {
        winner = (botMove === "Paper") ? "bot" : "human"
      }
      else if(humanMove === "Paper") {
        winner = (botMove === "Scissors") ? "bot" : "human"
      }
      else if(humanMove === "Scissors") {
        winner = (botMove === "Rock") ? "bot" : "human"
      }
    }

    var winnerAnnouncement = (winner === "tie") ? "It's a tie!"  : "The winner is " + winner;

    var $announcement = $('<h3></h3>'); 
    $announcement.text(winnerAnnouncement);

    $('body').append($announcement);

  })

});


