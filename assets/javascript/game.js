$(document.body).ready(function() {
  $("#actualGame").hide();
  $("#gamestart").on("click", function() {
    $("#beginbox").hide();
    appendPlayer1();
    $("#actualGame").show();
    //$(".card-click").attr("data-state", "unselected");
    cardHover();
    selectCard();
    getAttributeVals();
    pushCardVals();
    $(".card-click").attr("data-state", "unselected");

    // p1c1(); //for some reason the is the last functions the even runs
    //tried putting the cardHover function below and after click hover doesnt work
    //p1c1 runs once only and i dont know why it wont run on other cards
  });
});

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
//https://api.jquery.com/clone/

var p1battledAttack = [1, 2, 3, 4, 5];

var x = "";

var p1battledCard1 = parseInt(x);
var p1battledCard2 = parseInt(x);
var p1battledCard3 = parseInt(x);
var p1battledCard4 = parseInt(x);
var p1battledCard5 = parseInt(x);

function calcTheScore(battlefieldCards) {
  for (let i = 0; i < battlefieldCards.length; i++) {
    var totalAttack = battlefieldCards[i] + battlefieldCards[i];
    console.log(totalAttack);
  }
}

//calcTheScore(p1battledAttack);

function p1score() {
  var totalScore =
    p1battledCard1 +
    p1battledCard2 +
    p1battledCard3 +
    p1battledCard4 +
    p1battledCard5;
  return totalScore;
}

function calcWinner(p1, p2) {
  if (p1 > p2) {
    console.log("Player 1 Wins");
  } else {
    console.log("Player 2 Wins");
  }
}

function getAttributeVals() {
  $(document.body).on("click", ".cards", function() {
    attackVal = $(this).attr("data-attack");
    defenseVal = $(this).attr("data-defense");

    console.log("This cards attack value is: " + attackVal);
    console.log("This cards defense value is: " + defenseVal);
  });
}

function pushCardVals() {
  $(document.body).on("click", ".cards", function() {
    database.ref("/" + "p1Scores").set({
      attackVal: attackVal,
      defenseVal: defenseVal
    });
  });
}

function func2() {
  database.ref("/" + "p1Scores").on(
    "value",
    function(snapshot) {
      // console.log(snapshot.val();   // Shows data from entire firebase object
      var firebaseAttackVal = Object.keys(snapshot.val().attackVal);
      var firebasedefenseVal = Object.keys(snapshot.val().defenseVal);
      //console.log(player1Key);
      console.log(
        "Firebase total attack is: " + Object.keys(snapshot.val().attackVal)
      );
      console.log("Firebase total defense is: " + firebasedefenseVal);

      //console.log(player1Key);
      // console.log(
      //   "-----------------------------------------------------------------------------------------------"
      // );
      // ^^^Helps seperate whats seen in devtools console
      //var player1Firebase = snapshot.val()[player1Key];
      //console.log(player1Firebase);

      //console.log(player1Firebase);

      // console.log("^^^ Firebase Player 1 Object");

      //console.log(player2Firebase);
      // console.log("^^^ Firebase Player 2 Object");
    },
    function(errorObject) {
      // In case of error this will print the error
      console.log("The read failed: " + errorObject.code);
    }
  );
}

$(document).on("click", ".cards", function() {
  // database.ref("/" + "p1Scores").on(
  //   "value",
  //   function(snapshot) {
  //     // console.log(snapshot.val();   // Shows data from entire firebase object
  //     var firebaseAttackVal = Object.keys(snapshot.val().attackVal);
  //     var firebasedefenseVal = Object.keys(snapshot.val().defenseVal);
  //     //console.log(player1Key);
  //     console.log("Firebase total attack is: " + firebaseAttackVal);
  //     console.log("Firebase total defense is: " + firebasedefenseVal);
  //     //console.log(player1Key);
  //     // console.log(
  //     //   "-----------------------------------------------------------------------------------------------"
  //     // );
  //     // ^^^Helps seperate whats seen in devtools console
  //     //var player1Firebase = snapshot.val()[player1Key];
  //     //console.log(player1Firebase);
  //     //console.log(player1Firebase);
  //     // console.log("^^^ Firebase Player 1 Object");
  //     //console.log(player2Firebase);
  //     // console.log("^^^ Firebase Player 2 Object");
  //   },
  //   function(errorObject) {
  //     // In case of error this will print the error
  //     console.log("The read failed: " + errorObject.code);
  //   }
  // );
  //console.log("test");
});

function cardHover() {
  $(".cards").hover(function() {
    var state = $(this).attr("data-state");

    if (state === "face") {
      $(this).attr("src", $(this).attr("data-description"));
      $(this).attr("data-state", "description");
      $(this)
        .parent()
        .css("z-index", "2");
    } else {
      $(this).attr("src", $(this).attr("data-face"));
      $(this).attr("data-state", "face");
      $(this)
        .parent()
        .css("z-index", "7");
    }
  });
}

// $(document.body).on("click", ".cards", function() {
//   var attackVal = $(this).attr("data-attack");
//   var defenseVal = $(this).attr("data-defense");
//   console.log("This cards attack value is: " + attackVal);
//   console.log("This cards defense value is: " + defenseVal);

//   database.ref("/" + "p1Scores").set({
//     attackVal,
//     defenseVal
//   });

//   //console.log("test");
// });

function selectCard() {
  $(".card-click").on("click", function() {
    var state = $(this).attr("data-state");

    if (state === "selected") {
      $(this)
        .css("width", "100%")
        .css("height", "100%")
        .css("opacity", "0.70")
        .css("-moz-opacity", "70%")
        .css("-webkit-opacity", "70%");
      $(this).attr("data-state", "unselected");
    } else {
      $(this).attr("data-state", "selected");
      $(this)
        .css("width", "100%")
        .css("height", "100%")
        .css("opacity", "1.00")
        .css("-moz-opacity", "100%")
        .css("-webkit-opacity", "100%");
    }
  });
}

function p1c1() {
  $(".cards").on("click", function() {
    var attackVal = $(this).attr("data-attack");
    var defenseVal = $(this).attr("data-defense");
    //console.log("This cards attack value is: " + attackVal);
    //console.log("This cards defense value is: " + defenseVal);

    database.ref("/" + "p1Scores").set({
      attackVal,
      defenseVal
    });
  });
}

// GLOBAL VARIABLES

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBESNAvRalGYLQ4jvliEsxR0HP-R0ALERY",
  authDomain: "group3game.firebaseapp.com",
  databaseURL: "https://group3game.firebaseio.com",
  projectId: "group3game",
  storageBucket: "group3game.appspot.com",
  messagingSenderId: "751394697789"
};
firebase.initializeApp(config);

var database = firebase.database();

var p1card1SRC,
  p1card2SRC,
  p1card3SRC,
  p1card4SRC,
  p1card5SRC,
  p2card1SRC,
  p2card2SRC,
  p2card3SRC,
  p2card4SRC,
  p2card5SRC,
  //   IMGdiv,
  //   cardIMG,
  //   Container,
  //   Description,
  //   Ptag,
  //   Desc,
  description;

p1card1SRC = "./assets/images/cards/evil/agentSmith.png";
p1card2SRC = "./assets/images/cards/evil/ajitPai.png";
p1card3SRC = "./assets/images/cards/evil/annoyingFacebookGirl.png";
p1card4SRC = "./assets/images/cards/evil/antonChigurh.png";
p1card5SRC = "./assets/images/cards/evil/badAdviceMallard.png";

p2card1SRC = "./assets/images/cards/evil/agentSmith.png";
p2card2SRC = "./assets/images/cards/evil/ajitPai.png";
p2card3SRC = "./assets/images/cards/evil/annoyingFacebookGirl.png";
p2card4SRC = "./assets/images/cards/evil/antonChigurh.png";
p2card5SRC = "./assets/images/cards/evil/badAdviceMallard.png";

description = "./assets/images/cards/descriptor.png";

// Get a working request from the DeckOfCards API

var url = "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=";
var cards = "2H,2S,2D,2C,3H,3S,3D,3C,4H,4S,4D,4C";
var p1deckId = "";
var p2deckId = "";
var p1cardDrawn = "";
var p2cardDrawn = "";
var p1Hand = [];
var p2Hand = [];
var p1Battlefield = [];
var p2Battlefield = [];

setTimeout(masterStartFunction);

function masterStartFunction() {
  runStartPlayer1();
  runStartPlayer2();
  setTimeout(callFirebaseData, 1000);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// START GAME STUFF

//   Grabs a deck of cards for Player 1 - More specifically this grabs an ID for the players deck to pull from API
function runStartPlayer1() {
  $.ajax({
    url: url + cards,
    method: "GET"
  }).then(response => {
    //console.log("Player 1 Deck");
    p1deckId = response.deck_id;
    startGame(p1deckId);
  });
}

//   Grabs a deck of cards for Player 2 - More specifically this grabs an ID for the players deck to pull from API
function runStartPlayer2() {
  $.ajax({
    url: url + cards,
    method: "GET"
  }).then(response => {
    //console.log("Player 2 Deck");
    p2deckId = response.deck_id;
    startGame(p2deckId);
  });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION DEFINITIONS

// Draws cards for each players and adds them to their hands.
function startGame(playerIdDeck) {
  // NEW AJAX CALL WITH THE (NOW RECEIVED FROM EARLIER AJAX CALL) player's ID. Then draws 5 cards from their respective "decks" based off the 52cardsAPI.

  let drawURL =
    "https://deckofcardsapi.com/api/deck/" + playerIdDeck + "/draw/?count=5";

  $.ajax({
    url: drawURL,
    method: "GET"
  }).then(response => {
    if (playerIdDeck === p1deckId) {
      for (var i = 0; i < response.cards.length; i++) {
        p1Hand.push(response.cards[i]);
        addAttackValues(p1Hand);
        addDefenseValues(p1Hand);
        addImageToCards(p1Hand);
      }
      storeP1Hand();
    } else if (playerIdDeck === p2deckId) {
      for (var i = 0; i < response.cards.length; i++) {
        p2Hand.push(response.cards[i]);
        addAttackValues(p2Hand);
        addDefenseValues(p2Hand);
        addImageToCards(p2Hand);
      }
      storeP2Hand();
    }
  });
}

function removeEverythingFromFirebase() {
  database.ref().remove();
}

function storeP1Hand() {
  database.ref().push({
    p1Hand
    //playedAttack: "0",
    //playedDefense: "0"
  });

  firebase
    .database()
    .ref("/" + "p1Scores")
    .set({
      attackVal: "0",
      defenseVal: "0"
    });

  //console.log("Player 1's hand has been pushed to firebase");
}

function storeP2Hand() {
  database.ref().push({
    p2Hand
  });

  firebase
    .database()
    .ref("/" + "p2Scores")
    .set({
      attackVal: "0",
      defenseVal: "0"
    });
  //console.log("Player 2's hand has been pushed to firebase");
}

function callFirebaseData() {
  database.ref().on(
    "value",
    function(snapshot) {
      // console.log(snapshot.val();   // Shows data from entire firebase object
      var player1Key = Object.keys(snapshot.val())[0];
      //console.log(player1Key);

      var player2Key = Object.keys(snapshot.val())[1];
      //console.log(player1Key);
      // console.log(
      //   "-----------------------------------------------------------------------------------------------"
      // );
      // ^^^Helps seperate whats seen in devtools console
      var player1Firebase = snapshot.val()[player1Key];
      console.log(player1Firebase);

      // console.log("^^^ Firebase Player 1 Object");

      var player2Firebase = snapshot.val()[player2Key];
      console.log(player2Firebase);
      // console.log("^^^ Firebase Player 2 Object");
    },
    function(errorObject) {
      // In case of error this will print the error
      console.log("The read failed: " + errorObject.code);
    }
  );
}

// function storeCards1(handArray) {
//   for (var i = 0; i <= handArray.length; i++) {
//     database.ref().push({
//       p1c1character: handArray[i].character,
//       p1c2cardDescription: handArray[i].cardDescription,
//       p1c3imagePath: handArray[i].customIMG,
//       p1c4attack: handArray[i].attack,
//       p1c5defense: handArray[i].defense
//     });
//   }
// }

// function calcScores() {
//   database.ref().on(
//     "value",
//     function(snapshot) {
//       var player1Key = Object.keys(snapshot.val())[0];
//       var player2Key = Object.keys(snapshot.val())[1];

//       var firebaseP1C1 = parseInt(
//         snapshot.val()[player1Key].player1[0].attack
//       );
//       var firebaseP1C2 = parseInt(
//         snapshot.val()[player1Key].player1[1].attack
//       );
//       var firebaseP1C3 = parseInt(
//         snapshot.val()[player1Key].player1[2].attack
//       );
//       var firebaseP1C4 = parseInt(
//         snapshot.val()[player1Key].player1[3].attack
//       );
//       var firebaseP1C5 = parseInt(
//         snapshot.val()[player1Key].player1[4].attack
//       );

//       //Player 1 total attack points
//       var p1TotalAttack =
//         firebaseP1C1 +
//         firebaseP1C2 +
//         firebaseP1C3 +
//         firebaseP1C4 +
//         firebaseP1C5;
//       //console.log(p1TotalAttack);

//       var firebaseP2C1 = parseInt(
//         snapshot.val()[player2Key].player2[0].attack
//       );
//       var firebaseP2C2 = parseInt(
//         snapshot.val()[player2Key].player2[1].attack
//       );
//       var firebaseP2C3 = parseInt(
//         snapshot.val()[player2Key].player2[2].attack
//       );
//       var firebaseP2C4 = parseInt(
//         snapshot.val()[player2Key].player2[3].attack
//       );
//       var firebaseP2C5 = parseInt(
//         snapshot.val()[player2Key].player2[4].attack
//       );
//       //Player 2 total attack points
//       var P2TotalAttack =
//         firebaseP2C1 +
//         firebaseP2C2 +
//         firebaseP2C3 +
//         firebaseP2C4 +
//         firebaseP2C5;
//       //console.log(P2TotalAttack);

//       //var player2Firebase = snapshot.val()[player2Key].player2;
//     },
//     function(errorObject) {
//       // In case of error this will print the error
//       console.log("The read failed: " + errorObject.code);
//     }
//   );
// }
// //storeCardsFirebase();

// //database.ref()

// //   if (array === undefined || array.length == 0) {
// //     // array empty or does not exist
// // }

// function calcP1Attack() {
//   var firebaseP1C1 = parseInt(snapshot.val()[player1Key].player1[0].attack);
//   var firebaseP1C2 = parseInt(snapshot.val()[player1Key].player1[1].attack);
//   var firebaseP1C3 = parseInt(snapshot.val()[player1Key].player1[2].attack);
//   var firebaseP1C4 = parseInt(snapshot.val()[player1Key].player1[3].attack);
//   var firebaseP1C5 = parseInt(snapshot.val()[player1Key].player1[4].attack);

//   //Player 1 total attack points
//   var p1TotalAttack =
//     firebaseP1C1 + firebaseP1C2 + firebaseP1C3 + firebaseP1C4 + firebaseP1C5;
//   //console.log(p1TotalAttack);
// }

function AttackScores(handArray) {
  for (var i = 0; i < handArray.length; i++) {
    //console.log(handArray[i].code);

    var attackCard1 = parseInt(handArray[0].attack);
    var attackCard2 = parseInt(handArray[1].attack);
    var attackCard3 = parseInt(handArray[2].attack);
    var attackCard4 = parseInt(handArray[3].attack);
    var attackCard5 = parseInt(handArray[4].attack);

    var TotalAttack =
      attackCard1 + attackCard2 + attackCard3 + attackCard4 + attackCard5;
    console.log(TotalAttack);

    handArray.totalAttack = TotalAttack;
    //console.log(p1Hand);
  }
}

function DefenseScores(handArray) {
  for (var i = 0; i < handArray.length; i++) {
    //console.log(handArray[i].code);

    var defenseCard1 = parseInt(handArray[0].defense);
    var defenseCard2 = parseInt(handArray[1].defense);
    var defenseCard3 = parseInt(handArray[2].defense);
    var defenseCard4 = parseInt(handArray[3].defense);
    var defenseCard5 = parseInt(handArray[4].defense);

    var TotalDefense =
      defenseCard1 + defenseCard2 + defenseCard3 + defenseCard4 + defenseCard5;
    console.log(TotalDefense);

    handArray.totalDefense = TotalDefense;
    //console.log(p1Hand);
  }
}

// Nests an AJAX call within a function to allow for a Player to draw a card from the DeckOfCards API
function drawACard(playerIdDeck) {
  let drawURL =
    "https://deckofcardsapi.com/api/deck/" + playerIdDeck + "/draw/?count=1";

  $.ajax({
    url: drawURL,
    method: "GET"
  }).then(response => {
    //console.log("P2 Card Code: " + response.cards[0].code);
    if (playerIdDeck === p1deckId) {
      p1Hand.push(response.cards[0]);
      //console.log(p1Hand);
    } else if (playerIdDeck === p2deckId) {
      p2Hand.push(response.cards[0]);
      //console.log(p2Hand);
    }
  });
}

// function that loops through the player's hand array and adds attack values.
function addAttackValues(handArray) {
  p1Hand = handArray;
  for (var i = 0; i < handArray.length; i++) {
    //console.log(handArray[i].code);

    // Conditionals that add an Attack value based on their SUIT.
    if (handArray[i].suit === "HEARTS") {
      //console.log("5");
      handArray[i].attack = "5";
    } else if (handArray[i].suit === "DIAMONDS") {
      //console.log("6");
      handArray[i].attack = "6";
    } else if (handArray[i].suit === "SPADES") {
      //console.log("7");
      handArray[i].attack = "7";
    } else if (handArray[i].suit === "CLUBS") {
      //console.log("8");
      handArray[i].attack = "8";
    } else {
      console.log("More Classifications Needed");
    }
  }
}

// function that loops through the player's hand array and adds defense values.
function addDefenseValues(handArray) {
  for (var i = 0; i < handArray.length; i++) {
    //console.log(handArray[i].code);

    // Conditionals that add an Defense value based on their Card's Value.
    if (handArray[i].value === "2") {
      handArray[i].defense = "2";
      //console.log(handArray[i].defense);
    } else if (handArray[i].value === "3") {
      handArray[i].defense = "3";
      //console.log(handArray[i].defense);
    } else if (handArray[i].value === "4") {
      handArray[i].defense = "4";
      //console.log(handArray[i].defense);
    } else {
      console.log("More Classifications Needed");
    }
  }
}

function addImageToCards(handArray) {
  for (var i = 0; i < handArray.length; i++) {
    //console.log(handArray[i]);

    // Conditionals that look for the value and suit and change the IMG key value pair to reflect our custom cards.
    if (handArray[i].value === "2" && handArray[i].suit === "HEARTS") {
      //console.log("You have a 2 of Hearts");
      handArray[i].customIMG = p1card1SRC;
      handArray[i].cardDescription = "TEST";
      handArray[i].character = "Character Name";
    } else if (handArray[i].value === "2" && handArray[i].suit === "DIAMONDS") {
      //console.log("You have a 2 of Diamonds");
      handArray[i].customIMG = p1card2SRC;
      handArray[i].cardDescription = "TEST";
      handArray[i].character = "Character Name";
    } else if (handArray[i].value === "2" && handArray[i].suit === "SPADES") {
      //console.log("You have a 2 of Spades");
      handArray[i].customIMG = p1card3SRC;
      handArray[i].cardDescription = "TEST";
      handArray[i].character = "Character Name";
    } else if (handArray[i].value === "2" && handArray[i].suit === "CLUBS") {
      //console.log("You have a 2 of Clubs");
      handArray[i].customIMG = p1card4SRC;
      handArray[i].cardDescription = "TEST";
      handArray[i].character = "Character Name";
    } else if (handArray[i].value === "3" && handArray[i].suit === "HEARTS") {
      //console.log("You have a 3 of Hearts");
      handArray[i].customIMG = p1card5SRC;
      handArray[i].cardDescription = "TEST";
      handArray[i].character = "Character Name";
    } else if (handArray[i].value === "3" && handArray[i].suit === "DIAMONDS") {
      //console.log("You have a 3 of Diamonds");
      handArray[i].customIMG = p2card1SRC;
      handArray[i].cardDescription = "TEST";
      handArray[i].character = "Character Name";
    } else if (handArray[i].value === "3" && handArray[i].suit === "SPADES") {
      //console.log("You have a 3 of Spades");
      handArray[i].customIMG = p2card2SRC;
      handArray[i].cardDescription = "TEST";
      handArray[i].character = "Character Name";
    } else if (handArray[i].value === "3" && handArray[i].suit === "CLUBS") {
      //console.log("You have a 3 of Clubs");
      handArray[i].customIMG = p2card3SRC;
      handArray[i].cardDescription = "TEST";
      handArray[i].character = "Character Name";
    } else if (handArray[i].value === "4" && handArray[i].suit === "HEARTS") {
      //console.log("You have a 4 of Hearts");
      handArray[i].customIMG = p2card4SRC;
      handArray[i].cardDescription = "TEST";
      handArray[i].character = "Character Name";
    } else if (handArray[i].value === "4" && handArray[i].suit === "DIAMONDS") {
      //console.log("You have a 4 of Diamonds");
      handArray[i].customIMG = p2card5SRC;
      handArray[i].cardDescription = "TEST";
      handArray[i].character = "Character Name";
    } else if (handArray[i].value === "4" && handArray[i].suit === "SPADES") {
      //console.log("You have a 4 of Spades");
      handArray[i].customIMG = p2card1SRC;
      handArray[i].cardDescription = "TEST";
      handArray[i].character = "Character Name";
    } else if (handArray[i].value === "4" && handArray[i].suit === "CLUBS") {
      //console.log("You have a 4 of Clubs");
      handArray[i].customIMG = p2card1SRC;
      handArray[i].cardDescription = "TEST";
      handArray[i].character = "Character Name";
    } else {
      console.log("Nothing happened cause you drew TRASH");
    }
  }
}

function appendPlayer1() {
  database.ref().on(
    "value",
    function(snapshot) {
      var player1Key = Object.keys(snapshot.val())[0];
      //var player2Key = Object.keys(snapshot.val())[1];
      var player1Firebase = snapshot.val()[player1Key].p1Hand;
      //var player2Firebase = snapshot.val()[player2Key].p2Hand;
      //console.log(player1Firebase.length);

      for (var i = 0; i < player1Firebase.length; i++) {
        var IMGdiv = $("<div>"); //div that holds the image
        IMGdiv.addClass("absolute");
        IMGdiv.addClass("higherZ");

        var cardIMG = $("<img>");
        //cardIMG.addClass("handcard");
        cardIMG.addClass("cards");
        //cardIMG.addClass("pointerHover");
        //cardIMG.addClass("player1cards");
        cardIMG.attr("src", player1Firebase[i].customIMG);
        cardIMG.attr("data-description", description);
        cardIMG.attr("data-face", player1Firebase[i].customIMG);
        cardIMG.attr("data-state", "face");

        cardIMG.attr("data-attack", player1Firebase[i].attack);
        cardIMG.attr("data-defense", player1Firebase[i].defense);

        cardIMG.attr("alt", "Player X | Card X");

        var Container = $("<div>");

        Container.addClass("nudge-left");
        Container.addClass("relative");
        var Description = $("<div>");
        Description.addClass("absolute");
        $(Description).css("z-index", "4");
        var cardTitle = $("<h6>");
        cardTitle.addClass("h6");
        var Ptag = $("<p>");
        Ptag.addClass("p");
        $(cardTitle).text(player1Firebase[i].character);
        $(Ptag).text(player1Firebase[i].cardDescription);
        var Title = $(Description).html(cardTitle);
        var Desc = $(Description).html(Ptag);
        Description.addClass("text-block");

        IMGdiv.append(cardIMG);
        Container.append(Description);
        Container.append(IMGdiv);
        IMGdiv.append(cardIMG);
        Container.append(Title);
        Container.append(Desc);

        $("#cardHeld" + [i]).append(Container);
        //$("#cardHeld" + [i]).append(IMGdiv);
        //$(cardIMG).css("border", "5px solid red");
      }
    },
    function(errorObject) {
      // In case of error this will print the error
      console.log("The read failed: " + errorObject.code);
    }
  );
}

// function moveHandCardToBattlefield() {
//   p1Battlefield = Object.assign({}, p1Hand);
//   console.log(p1Battlefield);
// }

// END FUNCTION DEFINTIONS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//$(document).on("click", ".handcard", moveHandCardToBattlefield);

//Runs a function on page close/refresh
window.onbeforeunload = closingCode;

//The close page function
function closingCode() {
  database.ref().remove();
  // Removes all data from firebase
  return null;
}

//$(document).on("click", ".handcard", moveHandCardToBattlefield);

$(function() {
  $(".battlefield-card").on("click", doPoof);
});

function doPoof() {
  let me = $(this);

  me.stop()
    .addClass("poofing")
    .delay(500) // matches animation duration
    .queue(function() {
      me.removeClass("poofing");
      me.dequeue();
    });
}
