var mainPlayer;
var player = ["", ""];
var dealer;

stackMakeDeck(1);
stackShuffle(3);

$("#deal").click(function startGame(){
var card = stackDeal();
  $("#dcards").append("<div id='dealerone'></div>");
  $("#dealerone").addClass("card");
  $("div#dealerone").val(console.log(card))
  $("#dcards").append("<div id='dealertwo'></div>").addClass("card");
  $("#dealertwo").addClass("card");
  $("#pcards").append("<div id='playerone'></div>");
  $("#playerone").addClass("card");
  $("#pcards").append("<div id='playertwo'></div>");
  $("#playertwo").addClass("card");
})
