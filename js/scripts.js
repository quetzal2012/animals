$(document).ready(function() {
 var input = prompt("What is your favorite animal? Turtles, Snakes, or Insects?");
   var animalType = input.toUpperCase();

   if (animalType === "TURTLES") {
    $(".turtles").show();
   } else if (animalType === "SNAKES") {
    $(".snakes").show();
   } else if (animalType === "INSECTS") {
    $(".insects").show();
  }
    else {
     alert("Please select one of the three options, Turtles, Snakes, or Insects")
    }
 });
