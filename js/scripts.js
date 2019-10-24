$(document).ready(function(){

  var age = parseInt(prompt("What is your age?"));

  if (age >= 18){
    $(".voter").show();
  } else {
    $(".nonVoter").show();
  }

// event.preventDefault();

});
