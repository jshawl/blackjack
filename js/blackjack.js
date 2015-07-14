var mainPlayer;
var player = ["", ""];
var dealer;

stackMakeDeck(3);
stackShuffle(3);


$("#deal").click(function startGame(){
  $("#dcards").append("<div id='dealerone'></div>");
  $("#dealerone").addClass("card");
  $("div#dealerone").html(cards[0])
  $("#dcards").append("<div id='dealertwo'></div>").addClass("card");
  $("#dealertwo").addClass("card");
  $("div#dealertwo").html(cards[1])
  $("#pcards").append("<div id='playerone'></div>");
  $("#playerone").addClass("card");
  $("div#playerone").val(console.log(cards[2]))
  $("#pcards").append("<div id='playertwo'></div>");
  $("#playertwo").addClass("card");
  $("div#playertwo").val(console.log(cards[3]))
})
