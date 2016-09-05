$('#timer').submit(function( event ) {

  $('.move').prop('disabled', false);

  var $inputs = $('#timer :input');
  console.log("Handler for .submit() called :", $inputs[0].value, $inputs[1].value);

  var timerMilliseconds = $inputs[0].value * 60 * 1000 + $inputs[1].value * 1000;


  timerDisplay(timerMilliseconds, $inputs[0].value, $inputs[1].value);
  
  event.preventDefault();
});




function timerDisplay(timerMilliseconds, minutes, seconds) {

  var timeLeft = timerMilliseconds; 

  if(minutes === "") {
    minutes = 0;
  }

  var timer = setInterval(function() { 

    if(timeLeft === 0) { 
      $('.move').prop('disabled', true);
      $('.timeleft h1').text("TIME'S UP!!!!!!!!!");
      clearInterval(timer);
    }
    else {
      $('.timeleft h1').text(minutes + ":" + (seconds < 10 ? "0" + seconds : seconds));
    }


    if(seconds === 0) {
      seconds = 59;
      minutes--;
    }
    else {
      seconds--;
    }

    timeLeft -= 1000;
  }, 1000)
}