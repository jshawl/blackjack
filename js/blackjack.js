var mainPlayer;
var player = ["", ""];
var dealer;

stackMakeDeck(3);
stackShuffle(3);


$("#deal").click(function startGame(){
  $("#dcards").append("<div id='dealerone'></div>").addClass("card");;
  $("div#dealerone").html(cards[0].createNode());
  $("#dcards").append("<div id='dealertwo'></div>").addClass("card");
  $("div#dealertwo").html(cards[1].createNode())
  $("#pcards").append("<div id='playerone'></div>");
  $("div#playerone").html(cards[2].createNode()).addClass("card");;
  $("#pcards").append("<div id='playertwo'></div>");
  $("div#playertwo").html(cards[3].createNode()).addClass("card");;
})
