//combine cards into deck array
stackMakeDeck(3);


//transform card "rank" into blackjack value
function getValue (num) {
  var num;
  if( num == '2' || num == '3' || num == '4' || num == '5' ||
    num == '6' || num == '7' || num == '8' || num == '9' || num == '10') {
      return parseInt(num);
    } else if (num == 'J' || num == 'Q' || num == 'K') {
      return 10;
    } else if (num == 'A') {
        if($(".score").val()>=11) {
          return 1;
        } else {
          return 11;
        };
    } else { return value = ""};
  };

function startGame(){

  balance -= $("#betbox").val();
  $("#balamt").html("$" + balance);
  //shuffle cards
  stackShuffle(3);
//tie blackjack values to actual deck
  cardValues = new Array();
    for(i=0; i<cards.length;i++) {
      cardValues[i] = cards[i].rank;
    }

    //dealer cards
    $("#dcards").append("<div id='dealerone'></div>").addClass("card");
    $("div#dealerone").html(cards[0].createNode());
    $("#dcards").append("<div class='card' id='dealertwo'></div>");
    $("div#dealertwo").html(cards[1].createNode())
    $("#dcards").append("<div class='card, extracards' id='dealerthree'></div>");
    $("div#dealerthree").html(cards[2].createNode())
    $("#dcards").append("<div class='card, extracards' id='dealerfour'></div>");
    $("div#dealerfour").html(cards[3].createNode())
    $("#dcards").append("<div class='card, extracards' id='dealerfive'></div>");
    $("div#dealerfive").html(cards[4].createNode())
    $("#dcards").append("<div class='card, extracards' id='dealersix'></div>");
    $("div#dealersix").html(cards[5].createNode())
    $("#dcards").append("<div class='card, extracards' id='dealerseven'></div>");
    $("div#dealerseven").html(cards[6].createNode())
    $("div#dealerone").hide();

    //player cards
    $("#pcards").append("<div class='card' id='playerone'></div>");
    $("div#playerone").html(cards[7].createNode());
    $("#pcards").append("<div class='card' id='playertwo'></div>");
    $("div#playertwo").html(cards[8].createNode());
    $("#pcards").append("<div class='card, extracards' id='playerthree'></div>");
    $("div#playerthree").html(cards[9].createNode());
    $("#pcards").append("<div class='card, extracards' id='playerfour'></div>");
    $("div#playerfour").html(cards[10].createNode());
    $("#pcards").append("<div class='card, extracards' id='playerfive'></div>");
    $("div#playerfive").html(cards[11].createNode());
    $("#pcards").append("<div class='card, extracards' id='playersix'></div>");
    $("div#playersix").html(cards[12].createNode());
    $("#pcards").append("<div class='card, extracards' id='playerseven'></div>");
    $("div#playerseven").html(cards[13].createNode());
    dealerScore = getValue(window.cardValues[1]);
    playerScore = getValue(window.cardValues[7]) + getValue(window.cardValues[8]);
    $("#dealerscore").html(dealerScore);
    $("#playerscore").html(playerScore);
  }


  //note: enumerated getValue functions instead of using "+=" in attempt to make flex value of Ace work. It did not work, but the specificity might still be preferable .
function addPlayerCard (){
  $("#double").off("click");
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
  dealerPlay();
} else {
  $("#hit").off("click");
  $("#stand").off("click");
  getWinner();
  };
};



function doubleDown () {
  balance -= $("#betbox").val();
  $("div#playerthree").css("visibility", "visible");
  playerScore = getValue(window.cardValues[7]) + getValue(window.cardValues[8]) + getValue(window.cardValues[9]);
  $("#playerscore").html(playerScore);
  $("#hit").off("click");
  $("#stand").off("click");
  dealerPlay();
}

function dealerPlay() {
  $("#hit").off("click");
  $("#stand").off("click");
  $("#double").off("click");
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
      } else {(alert("Error"))
      };
    $("#dealerscore").html(dealerScore);
    };
  };
  getWinner();
};

function getWinner () {
    $("#stand").off("click");
  if(playerScore > dealerScore) {
    if(playerScore <= 21) {
      winner="player";
      alert("Player Wins!");
      balance += $("#betbox").val()*2;
      $("#balamt").html("$" + balance);
    } else {
      winner="dealer";
      alert("Dealer Wins!");
      balance += 0;
      $("#balamt").html("$" + balance);
    };
  } else if (dealerScore > playerScore) {
    if (dealerScore <= 21) {
      winner="dealer";
      alert("Dealer Wins!");
      balance += 0;
      $("#balamt").html("$" + balance);
    } else {
      winner="player";
      alert("Player Wins!");
      balance += $("#betbox").val()*2;
      $("#balamt").html("$" + balance);
    };
  } else if (dealerScore == playerScore) {
    winner="push";
    alert("Push!");
    balance += $("#betbox").val()*1;
    $("#balamt").html("$" + balance);
  };
};

$(document).ready(runGame);

function runGame() {

playerScore = "";
dealerScore = "";
balance = 1000
$("#balamt").html("$" + balance);
winner = "";

//scores from initial deal
playerScore;
dealerScore;

//initialize game
$("#deal").on("click",startGame);

//hit functionality
$("#hit").on("click", addPlayerCard);

if(playerScore==21) {
  dealerPlay();
};

//double down
$("#double").on("click", doubleDown);

//stand functionality
$("#stand").on("click", dealerPlay);

};
