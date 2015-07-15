var playerScore;
var dealerScore;
var balance = 1000
$("#balamt").html("$" + balance);
var winner;

//combine cards into deck array
stackMakeDeck(3);
//shuffle cards
stackShuffle(3);

//transform card "rank" into blackjack value
function getValue (num) {
  var num;
  if( num == '2' || num == '3' || num == '4' || num == '5' ||
    num == '6' || num == '7' || num == '8' || num == '9' || num == '10') {
      return parseInt(num);
    } else if (num == 'J' || num == 'Q' || num == 'K') {
      return 10;
    } else if (num == 'A') {
        if(playerScore >=11) {
          return 1;
        } else {
          return 11;
        };
    } else { return value = ""};
  };

//tie blackjack values to actual deck
  var cardValues = new Array();
  for(i=0; i<cards.length;i++) {
    cardValues[i] = cards[i].rank;
  }

//scores from initial deal
dealerScore = getValue(window.cardValues[1]);
playerScore = getValue(window.cardValues[7]) + getValue(window.cardValues[8]);

//initialize game
$("#deal").on("click",startGame);

function startGame(){
  balance -= $("#betbox").val();
  $("#balamt").html("$" + balance);
  $("#dcards").append("<div id='dealerone'></div>").addClass("card");
  $("div#dealerone").html(cards[0].createNode());
  $("div#dealerone").hide();
  $("#dcards").append("<div id='dealertwo'></div>").addClass("card");
  $("div#dealertwo").html(cards[1].createNode())
  $("#dcards").append("<div class='extracards' id='dealerthree'></div>").addClass("card");
  $("div#dealerthree").html(cards[2].createNode())
  $("#dcards").append("<div class='extracards' id='dealerfour'></div>").addClass("card");
  $("div#dealerfour").html(cards[3].createNode())
  $("#dcards").append("<div class='extracards' id='dealerfive'></div>").addClass("card");
  $("div#dealerfive").html(cards[4].createNode())
  $("#dcards").append("<div class='extracards' id='dealersix'></div>").addClass("card");
  $("div#dealersix").html(cards[5].createNode())
  $("#dcards").append("<div class='extracards' id='dealerseven'></div>").addClass("card");
  $("div#dealerseven").html(cards[6].createNode())
  $("#pcards").append("<div id='playerone'></div>");
  $("div#playerone").html(cards[7].createNode()).addClass("card");
  $("#pcards").append("<div id='playertwo'></div>");
  $("div#playertwo").html(cards[8].createNode()).addClass("card");
  $("#pcards").append("<div class='extracards' id='playerthree'></div>");
  $("div#playerthree").html(cards[9].createNode()).addClass("card");
  $("#pcards").append("<div class='extracards' id='playerfour'></div>");
  $("div#playerfour").html(cards[10].createNode()).addClass("card");
  $("#pcards").append("<div class='extracards' id='playerfive'></div>");
  $("div#playerfive").html(cards[11].createNode()).addClass("card");
  $("#pcards").append("<div class='extracards' id='playersix'></div>");
  $("div#playersix").html(cards[12].createNode()).addClass("card");
  $("#pcards").append("<div class='extracards' id='playerseven'></div>");
  $("div#playerseven").html(cards[13].createNode()).addClass("card");
  $("#dealerscore").html(dealerScore);
  $("#playerscore").html(playerScore);
}

//hit functionality
$("#hit").on("click", addPlayerCard);

function addPlayerCard (){
  if(playerScore<21) {
    if ($("div#playerthree").css("visibility") == "hidden") {
      $("div#playerthree").css("visibility", "visible");
      playerScore = getValue(window.cardValues[7]) + getValue(window.cardValues[8]) + getValue(window.cardValues[9]);
    } else if ($("div#playerfour").css("visibility") == "hidden") {
      $("div#playerfour").css("visibility", "visible");
      playerScore = getValue(window.cardValues[7]) + getValue(window.cardValues[8]) + getValue(window.cardValues[9]) + getValue(window.cardValues[10]);
    } else if ($("div#playerfive").css("visibility") == "hidden") {
      $("div#playerfive").css("visibility", "visible");
      playerScore = getValue(window.cardValues[7]) + getValue(window.cardValues[8]) + getValue(window.cardValues[9]) + getValue(window.cardValues[10]) + getValue(window.cardValues[11]);
    } else if ($("div#playersix").css("visibility") == "hidden") {
      $("div#playersix").css("visibility", "visible");
      playerScore = getValue(window.cardValues[7]) + getValue(window.cardValues[8]) + getValue(window.cardValues[9]) + getValue(window.cardValues[10]) + getValue(window.cardValues[11]) + getValue(window.cardValues[12]);
    } else if ($("div#playerseven").css("visibility") == "hidden") {
      $("div#playerseven").css("visibility", "visible");
      playerScore = getValue(window.cardValues[7]) + getValue(window.cardValues[8]) + getValue(window.cardValues[9]) + getValue(window.cardValues[10]) + getValue(window.cardValues[11]) + getValue(window.cardValues[12]) + getValue(window.cardValues[13]);
    } else {alert("Error")};
  $("#playerscore").html(playerScore);
} else if (playerScore==21) {
  dealerPlay;
} else {
  alert("Player Bust!!");
  $("#hit").off("click");
  $("#stand").off("click");
  winner = "dealer";
  };
};

if(playerScore>21) {
  alert("Player Bust!!");
  $("#hit").off("click");
  $("#stand").off("click");
  winner = "dealer";
}

//stand functionality
$("#stand").on("click", dealerPlay);

function dealerPlay() {
  $("#hit").off("click");
  $("#stand").off("click");
  dealerScore = getValue(window.cardValues[0]) + getValue(window.cardValues[1]);
  $("#dealerscore").html(dealerScore);
  $("div#dealerone").show();
  for(i=2; i<=6; i++) {
    if(dealerScore<=16){
      if ($("div#dealerthree").css("visibility") == "hidden") {
        $("div#dealerthree").css("visibility", "visible");
        dealerScore = getValue(window.cardValues[0]) + getValue(window.cardValues[1]) + getValue(window.cardValues[2]);
      } else if ($("div#dealerfour").css("visibility") == "hidden") {
        $("div#dealerfour").css("visibility", "visible");
        dealerScore = getValue(window.cardValues[0]) + getValue(window.cardValues[1]) + getValue(window.cardValues[2]) + getValue(window.cardValues[3]);
      } else if ($("div#dealerfive").css("visibility") == "hidden") {
        $("div#dealerfive").css("visibility", "visible");
        dealerScore = getValue(window.cardValues[0]) + getValue(window.cardValues[1]) + getValue(window.cardValues[2]) + getValue(window.cardValues[3]) + getValue(window.cardValues[4]);
      } else if ($("div#dealersix").css("visibility") == "hidden") {
        $("div#dealersix").css("visibility", "visible");
        dealerScore = getValue(window.cardValues[0]) + getValue(window.cardValues[1]) + getValue(window.cardValues[2]) + getValue(window.cardValues[3]) + getValue(window.cardValues[4]) + getValue(window.cardValues[5]);
      } else if ($("div#dealerseven").css("visibility") == "hidden") {
        $("div#dealerseven").css("visibility", "visible");
        dealerScore = getValue(window.cardValues[0]) + getValue(window.cardValues[1]) + getValue(window.cardValues[2]) + getValue(window.cardValues[3]) + getValue(window.cardValues[4]) + getValue(window.cardValues[5]) + getValue(window.cardValues[6]);
      } else (alert("Error"));
    };
  };
  if(dealerScore>21) {
    $("#dealerscore").html(dealerScore);
    alert("Dealer Bust!!");
    return winner="player";
  } else {
  $("#dealerscore").html(dealerScore);
    if(playerScore > dealerScore) {
      return winner="player";
    } else if (dealerScore > playerScore) {
      return winner="dealer";
    } else {return winner="push";
    };
  };
};
