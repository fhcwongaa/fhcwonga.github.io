console.log("main js is linked");



/*For Loading Screen */

var opts = {
  lines: 11 // The number of lines to draw
, length: 28 // The length of each line
, width: 14 // The line thickness
, radius: 42 // The radius of the inner circle
, scale: 0.75 // Scales overall size of the spinner
, corners: 1 // Corner roundness (0..1)
, color: '#fff' // #rgb or #rrggbb or array of colors
, opacity: 0.25 // Opacity of the lines
, rotate: 0 // The rotation offset
, direction: 1 // 1: clockwise, -1: counterclockwise
, speed: 1 // Rounds per second
, trail: 60 // Afterglow percentage
, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
, zIndex: 2e9 // The z-index (defaults to 2000000000)
, className: 'spinner' // The CSS class to assign to the spinner
, top: '50%' // Top position relative to parent
, left: '50%' // Left position relative to parent
, shadow: false // Whether to render a shadow
, hwaccel: false // Whether to use hardware acceleration
, position: 'absolute' // Element positioning
}
//52 cards
var cards = {
'ace':{ 
value:11,value2:1,
usedCount:0,
suitsUsedCount:['clubs','diamonds','spades','hearts']
},
'2':{
value:2,
usedCount: 0,
suitsUsedCount:['clubs','diamonds','spades','hearts']
},
'3':{
value:3,
usedCount: 0,
suitsUsedCount:['clubs','diamonds','spades','hearts']
},
'4':{
value:4,
usedCount: 0,
suitsUsedCount:['clubs','diamonds','spades','hearts']
},
'5':{
value:5,
usedCount: 0,
suitsUsedCount:['clubs','diamonds','spades','hearts']
},
'6':{
value:6,
usedCount: 0,
suitsUsedCount:['clubs','diamonds','spades','hearts']
},
'7':{
value:7,
usedCount:0,
suitsUsedCount:['clubs','diamonds','spades','hearts']
},
'8':{
value:8,
usedCount:0,
suitsUsedCount:['clubs','diamonds','spades','hearts']
},
'9':{
value:9,
usedCount: 0,
suitsUsedCount:['clubs','diamonds','spades','hearts']
},
'10':{
value:10,
usedCount: 0,
suitsUsedCount:['clubs','diamonds','spades','hearts']
},
'jack':{
value:10,
usedCount: 0,
suitsUsedCount:['clubs','diamonds','spades','hearts']
},
'king':{
value:10,
usedCount: 0,
suitsUsedCount:['clubs','diamonds','spades','hearts']
},
'queen':{
value:10,
usedCount: 0,
suitsUsedCount:['clubs','diamonds','spades','hearts']
}
}

//Global Variables//
var dealerValue = 0;
var playerValue = 0;
var betAmount = 0; //initialize to zero
var defaultBalance = 1500; //default balance set to 1500
var gameResult; 
var betChecker = true;
//intialize game when "start button" is clicked
$("#start").click(function(){

/******LOAD GAME RULES*********/
$("#modal").toggle();
$("#modal").addClass("animated fadeIn");


/********************************Global objects and Functions******************************/
$("#music").get(0).play();
$("#music").volume = 0.3; 

//Random Function
function getRandom(min, max) {
return Math.floor(Math.random() * (max - min) + min);
}
	//shuffles deck at start of Game
var mapCard = function mapCard(number){
		switch(number){
			case 1:
			return 'ace';
			break;
			case 2:
			return '2';
			break;
			case 3:
			return '3';
			break;
			case 4:
			return '4';
			break;
			case 5:
			return '5';
			break;
			case 6:
			return '6';
			break;
			case 7:
			return '7';
			break;
			case 8:
			return '8';
			break;
			case 9:
			return '9';
			break;
			case 10:
			return '10';
			break;
			case 11:
			return 'jack';
			break;
			case 12:
			return 'king';
			break;
			case 13:
			return 'queen'
			break;

		}
}

var mapSuits = function mapSuits(number){
		switch(number){
			case 0:
			return 'clubs';
			break;
			case 1:
			return 'spades';
			break;
			case 2:
			return 'diamonds';
			case 3:
			return 'hearts';

		}
}



$("#close-modal").click(function(){
	$("#modal").toggle();
	/******************************GAME IMPLEMENTATION***********************/
	var gameScreen = $(".game");
	gameScreen.empty();
	//spinner
	var spinScreen = document.querySelector(".game");
	var spinner = new Spinner(opts).spin(spinScreen);
	spinScreen.appendChild(spinner.el);
	//Load all functions
	var load = setTimeout(function(){
		startGame();
		uiBox();
		dealerDeals();
	},1000)
	/*Load Game Screen */


	//Loading
	var startGame = function startGame(){
	/***********PRE LOADING GAME INTERFACE ***********/
		betChecker = true;
		clearInterval(load);
		spinner.stop();
		gameScreen.animate({width:"1050px",height:"625px"},800);

		// $("html").css("background-image","url('./img/casinoBW.png')");

		var table = $("<div>").attr("id","bjTable");
		// table.attr("src","./img/BlackjackTable.png");
		gameScreen.append(table);
		//sepearator
		var row0 = $("<div>").addClass("row").attr("id","row0");
		table.append(row0);
		row0.append($("<img>").addClass("turnOff").attr("src","http://cdns2.freepik.com/free-photo/power-button_318-9534.jpg"));
		row0.text("Dealer Value: "+ dealerValue);

		//cards for dealers
		var cardSlot = $("<div>").addClass("row").attr("class","cardSlot");
		table.append(cardSlot);
		var card1 = $("<img>").attr("id","card1");
		cardSlot.append(card1);
		var card2 = $("<img>").attr("id","card2");
		cardSlot.append(card2);
		var card3 = $("<img>").attr("id","card3");
		cardSlot.append(card3);
		var card4 = $("<img>").attr("id","card4");
		cardSlot.append(card4);

		// //separator
		var row00 = $("<div>").addClass("row").attr("id","row00");
		table.append(row00);
		row00.text("Player Value: "+ playerValue);

		// //cards for player
		var cardSlot2 = $("<div>").addClass("row cardSlot2");
		table.append(cardSlot2);
		var card5 = $("<img>").attr("id","card5");
		cardSlot2.append(card5);
		var card6 = $("<img>").attr("id","card6");
		cardSlot2.append(card6);
		var card7 = $("<img>").attr("id","card7");
		cardSlot2.append(card7);
		var card8 = $("<img>").attr("id","card8");
		cardSlot2.append(card8);



		//Create UI bar
		var uiBar = $("<div>").attr("id","uiBar");
		gameScreen.append(uiBar);
		//Set up Chips
		var row1 = $("<div>").addClass("row").attr("id","row1");
		uiBar.append(row1);

		//Chip box
		var chipBar = $("<div>").attr("id","chipBar").addClass("column");
		chipBar.addClass("row");
		row1.append(chipBar);
		var chip1 = $("<img>").attr("class","chip").attr("id","oneDollar");
		chip1.attr("src","./img/oneDollar.png");
		chipBar.append(chip1);
		var chip2 = $("<img>").attr("class","chip").attr("id","fiveDollar");
		chip2.attr("src","./img/fiveDollar.png");
		chipBar.append(chip2);
		var chip3 = $("<img>").attr("class","chip").attr("id","tenDollar");
		chip3.attr("src","./img/tenDollar.png");
		chipBar.append(chip3);
		var chip4 = $("<img>").attr("class","chip").attr("id","tfDollar");
		chip4.attr("src","./img/tfDollar.png");
		chipBar.append(chip4);
		var chip5 = $("<img>").attr("class","chip").attr("id","ohDollar");;
		chip5.attr("src","./img/ohDollar.png");
		chipBar.append(chip5);
		
		//deal
		var deal = $("<button>").text("DEAL").attr("id","deal").addClass("column");
		row1.append(deal);

		var newRow = $("<div>").addClass("row").attr("id","newRow");
		uiBar.append(newRow);


		//Buttons and Inputs
		var balance = $("<div>").attr("id","balance").addClass("five columns");
		balance.text("Balance:");
		var balanceBox = $("<input>").val("$" + defaultBalance).attr("id","balanceBox");
		var bet = $("<button>").text("BET").attr("id","bet");
		var betBox = $("<input>").val("$0").attr("id","betBox");
		newRow.append(balance);
		balance.append(balanceBox);
		balance.append(bet);
		balance.append(betBox);

		var play = $("<div>").attr("class","play").addClass("six columns")
		var stand = $("<button>").text("STAND").attr("id","stand");
		var hit = $("<button>").text("HIT").attr("id","hit");
		newRow.append(play);
		play.append(stand);
		play.append(hit);
		
	}

	var uiBox = function uiBox(){
		//set betAmount when user clicks on chip
		if(betChecker == true){
			$("#oneDollar").click(function(){
				betAmount += 1;
				$("#betBox").val("$" + betAmount);
			})
			$("#fiveDollar").click(function(){
				betAmount += 5;
				$("#betBox").val("$" + betAmount);
			})
			$("#tenDollar").click(function(){
				betAmount += 10;
				$("#betBox").val("$" + betAmount);
			})
			$("#tfDollar").click(function(){
				betAmount += 25;
				$("#betBox").val("$" + betAmount);
			})
			$("#ohDollar").click(function(){
				betAmount += 100;
				$("#betBox").val("$" + betAmount);
			})
			$("#bet").click(function(){

				if(betAmount <= defaultBalance){
					$("#deal").toggle();
					$("#deal").addClass("animated fadeIn");
					defaultBalance -= betAmount;
					$("#balanceBox").val("$" + defaultBalance);
					betChecker = false;
					// betAmount = 0;
				}else{
					displayModal("Insufficient Balance!")
					betAmount = 0;
					$("#betAmount").val("$"+ betAmount);
				}

			})
		}


	}




	var dealerDeals = function dealerDeals()
	{
		 var shuffleDeck = function shuffleDeck(){
		 	//create random integers to retrieve card from deck
		 	var randNum1 = getRandom(1,14);
		 	var randNum11 = getRandom(0,3);
		 	cards[mapCard(randNum1)].suitsUsedCount.splice(cards[mapCard(randNum1)].suitsUsedCount.indexOf(mapSuits(randNum11), 1));
		 	var randNum2 = getRandom(1,14);
		 	var randNum22 = getRandom(0,3);
		 	cards[mapCard(randNum2)].suitsUsedCount.splice(cards[mapCard(randNum2)].suitsUsedCount.indexOf(mapSuits(randNum22), 1));
		 	var randNum3 = getRandom(1,14);
		 	var randNum33 = getRandom(0,3);
		 	cards[mapCard(randNum2)].suitsUsedCount.splice(cards[mapCard(randNum3)].suitsUsedCount.indexOf(mapSuits(randNum33), 1));
		 
		 	//change card image source on div
		 	$("#card1").css("background-image","url"+"("+"./img/cards/"+mapCard(randNum1)+"_of_" + mapSuits(randNum11) + ".png)");
		 	$("#card5").css("background-image","url"+"("+"./img/cards/"+mapCard(randNum2)+"_of_"+ mapSuits(randNum22) + ".png)");
		 	$("#card6").css("background-image","url"+"("+"./img/cards/"+mapCard(randNum3)+"_of_" + mapSuits(randNum33) + ".png)");
		 	
		 	//update values
		 	if(mapCard(randNum2) === 'aces' && (playerValue + 11) > 21 ){
		 		playerValue =  1 + parseInt(cards[mapCard(randNum3)].value);
			}
			if(mapCard(randNum3) === 'aces' && (playerValue + 11) > 21 ){
				playerValue =  1 + parseInt(cards[mapCard(randNum2)].value);
			}else{
				playerValue = parseInt(cards[mapCard(randNum2)].value) + parseInt(cards[mapCard(randNum3)].value);
			}
		 	dealerValue = cards[mapCard(randNum1)].value; 
		 	getValue(dealerValue,playerValue);
		 }
			$("#deal").click(function(){
				
				$("#card1").removeAttr("style");
				$("#card5").removeAttr("style");
				$("#card6").removeAttr("style");
				// $("#card7").removeAttr("style");
				// $("#card8").removeAttr("style");
				//shuffles cards and distribute
				 shuffleDeck();
				 $("#card1").toggle();
				 $("#card1").animate({right: '+=500', top: '+=80'}, 200);
				 
				setTimeout(function(){
				 $("#card5").toggle();
				 $("#card5").animate({right: '+=500', top: '+=280'}, 200);
				 
				},200);
				
				setTimeout(function(){
				 $("#card6").toggle();
				 $("#card6").animate({right: '+=480', top: '+=280'}, 200);
				 
				},400);
				$("#row0").toggle();
				$("#row00").toggle();
				$("#deal").toggle();

				$(".play").addClass("animated fadeInUp");
				$(".play").toggle();
				
				$("#hit").toggle();
				$("#stand").toggle();
			})

			hit();
			stand();
	}
	//Display Value of the cards
	var getValue = function getValue(dValue,pValue,call){

			$("#row0").text("Dealer Value: " + dValue);
			$("#row00").text("Player Value: " + pValue);

			//Default case for 21
			if(dValue === 21){
				displayModal("Dealer Wins!");
			}else if(pValue === 21){
			//update balance
				displayModal("You Win!");
				defaultBalance += 2*betAmount;
				$("#balanceBox").val("$" + defaultBalance);
				betAmount = 0; 
				restartGame();
			}else if(pValue > 21){
				displayModal("You Bust! Dealer Wins!");
				restartGame();
			}else if(dValue > 21){
				displayModal("Dealer Busts! You Win!");
				defaultBalance += (2*betAmount);
				restartGame();
			}else if(call === 'stand' && pValue < dValue){
				displayModal("Dealer Wins!");
				betAmount = 0; 
				restartGame();
			}else if(call === 'stand' && pValue > dValue){
				defaultBalance += (2*betAmount);
				$("#balanceBox").val("$" + defaultBalance);
				betAmount = 0; 
				displayModal("You Win!");
				restartGame();
			}else if(call === 'stand' && pValue === dValue){
				displayModal("The game is tied!");
				defaultBalance += betAmount;
				restartGame();
			}




	}
	//Stand
	var stand = function stand(){
		var cardCounter = 0;
		var dealerCard = 2; 
		var dealerPosition = 480;
		var cardNumber;
		var suitsNumber;


		//generate next Random Card

		 $("#stand").click(function(){
		 	//when hit button is clicked
		 	while(dealerValue < 17){
		 		cardNumber = getRandom(1,14);
				suitsNumber = getRandom(0,cards[mapCard(cardNumber)].suitsUsedCount.length);
		 		$("#card" + dealerCard).css("background-image","url"+"("+"./img/cards/"+mapCard(cardNumber)+"_of_" + mapSuits(suitsNumber) + ".png)");
			 	$("#card" + dealerCard).toggle();
			 	console.log(dealerCard);
			 	$("#card" + dealerCard).animate({right: '+='+dealerPosition, top: '+=80'}, 200);
			 	dealerPosition -= 20;
			 	dealerCard++;
			 	cardCounter++;		
			 	//Special Case for Ace
			 	if(mapCard(cardNumber) === 'aces' && (dealerValue + 11) > 21 ){
			 		dealerValue += parseInt(cards[mapCard(cardNumber)].value2);
			 		getValue(dealerValue,playerValue,'stand');
			 		
			 	}else{
				 	dealerValue += parseInt(cards[mapCard(cardNumber)].value);

			 	}
		 	}
		 	//update values on table
		 	getValue(dealerValue,playerValue,'stand');
		 })
	}



	//Hit
	var hit = function hit(){
		var cardCounter = 0;
		var cardNumber = getRandom(1,14);
		var suitsNumber = getRandom(0,cards[mapCard(cardNumber)].suitsUsedCount.length);


		//generate next Random Card

		 $("#hit").click(function(){
		 	//when hit button is clicked
		 	switch(cardCounter){
			 	case 0:
			 	$("#card7").css("background-image","url"+"("+"./img/cards/"+mapCard(cardNumber)+"_of_" + mapSuits(suitsNumber) + ".png)");
			 	$("#card7").toggle();
			 	$("#card7").animate({right: '+=460', top: '+=280'}, 200);
			 	cardCounter++;
			 	//Special Case for Aces
			 	if(mapCard(cardNumber) === 'aces' && (playerValue + 11) > 21 ){
			 		playerValue += parseInt(cards[mapCard(cardNumber)].value2);
			 		getValue(dealerValue,playerValue,'hit');
			 		break;
			 	}else{//default case
				 	playerValue += parseInt(cards[mapCard(cardNumber)].value);
				 	getValue(dealerValue,playerValue,'hit');
				 	break;
			 	}//update values on Table

			 	case 1:
			 	cardNumber = getRandom(1,14);
				suitsNumber = getRandom(0,cards[mapCard(cardNumber)].suitsUsedCount.length);
			 	$("#card8").css("background-image","url"+"("+"./img/cards/"+mapCard(cardNumber)+"_of_" + mapSuits(suitsNumber) + ".png)");
			 	$("#card8").toggle();
			 	$("#card8").animate({right: '+=440', top: '+=280'}, 200);
			 	//Special Cases for Aces
			 	if(mapCard(cardNumber) === 'aces' && (playerValue + 11) > 21 ){
			 		playerValue += parseInt(cards[mapCard(cardNumber)].value2);
			 		getValue(dealerValue,playerValue,'hit');
			 		break;
			 	}else{//default case
				 	playerValue += parseInt(cards[mapCard(cardNumber)].value);
				 	getValue(dealerValue,playerValue,'hit');
				 	break;
			 	}

		 	}

		 })



	}

	var restartGame = function restartGame(){
	setTimeout(function(){
		$(".game").empty();
		startGame();
		uiBox();
		dealerDeals();
		betAmount = 0;

	},2700)
	}

	})

	var displayModal = function displayModal(text){
		var modalBox = $("#modal");
		$(".modal-content").css({"height":"100px","width":"200px","margin-left":"620px","margin-top":"200px"});
		$(".modal-header").css({"height":"30px","width":"200px"});
		$(".modal-header").text(text);

		console.log(text);
		modalBox.toggle();
		setTimeout(function(){
			modalBox.toggle();
		},2000)
	}

})









