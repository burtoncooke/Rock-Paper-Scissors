$( "#timer" ).submit(function( event ) {

  $('.move').prop('disabled', false);

  var $inputs = $('#timer :input');
  console.log("Handler for .submit() called :", $inputs[0].value, $inputs[1].value);

  var timerMilliseconds = $inputs[0].value * 60 * 1000 + $inputs[1].value * 1000;


  timerDisplay(timerMilliseconds);
  
  event.preventDefault();
});




function timerDisplay(timerMilliseconds) {

  var timeLeft = timerMilliseconds;

  var timer = setInterval(function() {

    timeLeft -= 1000;
    $('.timeleft h1').text(timeLeft / 1000);
    // console.log("timeLeft:", (timeLeft / 1000))

    if(timeLeft === 0) { 
      $('.move').prop('disabled', true);
      $('.timeleft h1').text("TIME'S UP!!!!!!!!!");
      clearInterval(timer);
    }
    else {
      $('.timeleft h1').text(timeLeft / 1000);
    }
  }, 1000)
}