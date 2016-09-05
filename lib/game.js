$( document ).ready(function() {

  var wins = 0;
  var losses = 0;
  var draws = 0;

  $('.move').on('click', function() {



    // var $h3 = $('h3');
    // $h3.html('');  

    $('.humanmove').html('');
    $('.botmove').html('');
    $('.result').html('');

    var humanMove = $(this).text();
    var botMove = getBotMove();

    var $humanMove = $('<h3></h3>')
    $humanMove.text("got human move:" + humanMove);
    $('.humanmove').append($humanMove);

    var $botMove = $('<h3></h3>')
    $botMove.text("got bot move:" + botMove);
    $('.botmove').append($botMove);

    // console.log("got human move:" + humanMove);
    // console.log("got computer move:", botMove);

    var winner;

    if(humanMove === botMove) {
      winner = "tie";
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

    if(winner === "human") {
      wins++;
      $('#wins').text("Wins: " + wins.toString())
    }
    else if(winner === "bot") {
      losses++;
      $('#losses').text("Losses: " + losses.toString())
    }
    else {
      draws++;
      $('#draws').text("Draws: " + draws.toString())
    }

    var winnerAnnouncement = (winner === "tie") ? "It's a tie!"  : "The winner is " + winner;

    var $announcement = $('<h3></h3>'); 
    $announcement.text(winnerAnnouncement);

    $('.result').append($announcement);

  })

});


