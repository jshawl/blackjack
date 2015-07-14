var playerScore;
var dealerScore;
var balance = 1000
$("#balamt").html("$" + balance)



stackMakeDeck(3);
stackShuffle(3);




function getValue (num) {
  var num;
  if( num == '2' || num == '3' || num == '4' || num == '5' ||
    num == '6' || num == '7' || num == '8' || num == '9' || num == '10') {
      return value = parseInt(num);
    } else if (num == 'J' || num == 'Q' || num == 'K') {
      return value = 10;
    } else if (num == 'A') {
      return value = 11;
    } else { return value = ""};
  };

  var cardValues = new Array();
  for(i=0; i<cards.length;i++) {
    cardValues[i] = cards[i].rank;
  }
dealerScore = getValue(window.cardValues[1]);
playerScore = getValue(window.cardValues[2]) + getValue(window.cardValues[3]);




$("#deal").click(function startGame(){
  $("#dcards").append("<div id='dealerone'></div>").addClass("card");
  $("div#dealerone").html(cards[0].createNode());
  $("div#dealerone").hide();
  $("#dcards").append("<div id='dealertwo'></div>").addClass("card");
  $("div#dealertwo").html(cards[1].createNode())
  $("#pcards").append("<div id='playerone'></div>");
  $("div#playerone").html(cards[2].createNode()).addClass("card");
  $("#pcards").append("<div id='playertwo'></div>");
  $("div#playertwo").html(cards[3].createNode()).addClass("card");
  $("#dealerscore").html(dealerScore);
  $("#playerscore").html(playerScore);

})
