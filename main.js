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


$("#start").click(function(){

var gameScreen = $(".game");
gameScreen.empty();
//spinner
var spinScreen = document.querySelector(".game");
var spinner = new Spinner(opts).spin(spinScreen);
spinScreen.appendChild(spinner.el);

var load = setTimeout(function(){
	startGame();
},2000)
//Loading
var startGame = function startGame(){

	/*Load Game Screen */
	clearInterval(load);
	spinner.stop();
	gameScreen.animate({width:"1050px",height:"610px"},600);
	// $("html").css("background-image","url('./img/casinoBW.png')");
	var table = $("<img>").attr("id","bjTable");
	table.attr("src","./img/BlackjackTable.png")
	gameScreen.append(table);
	//Create UI bar
	var uiBar = $("<div>").attr("id","uiBar");
	gameScreen.append(uiBar);
	//Set up Chips
	var row1 = $("<div>").addClass("row").attr("id","row1");
	uiBar.append(row1);


	var chipBar = $("<div>").attr("id","chipBar").addClass("column");
	chipBar.addClass("row");
	row1.append(chipBar);
	var chip1 = $("<img>").attr("class","chip");
	chip1.attr("src","./img/oneDollar.png");
	chipBar.append(chip1);
	var chip2 = $("<img>").attr("class","chip");
	chip2.attr("src","./img/fiveDollar.png");
	chipBar.append(chip2);
	var chip3 = $("<img>").attr("class","chip");
	chip3.attr("src","./img/tenDollar.png");
	chipBar.append(chip3);
	var chip4 = $("<img>").attr("class","chip");
	chip4.attr("src","./img/25Dollar.png");
	chipBar.append(chip4);
	var chip5 = $("<img>").attr("class","chip");
	chip5.attr("src","./img/100Dollar.png");
	chipBar.append(chip5);
	
	//deal
	var deal = $("<button>").text("DEAL").attr("id","deal").addClass("column");
	row1.append(deal);




	var newRow = $("<div>").addClass("row").attr("id","newRow");
	uiBar.append(newRow);


	//Buttons and Inputs
	var balance = $("<div>").attr("id","balance").addClass("five columns");
	balance.text("Balance:");
	var balanceBox = $("<input>").val("$0").attr("id","balanceBox");
	var bet = $("<button>").text("BET").attr("id","bet");
	newRow.append(balance);
	balance.append(balanceBox);
	balance.append(bet);

	var play = $("<div>").attr("class","play").addClass("six columns")
	var stand = $("<button>").text("STAND").attr("id","stand");
	var hit = $("<button>").text("HIT").attr("id","hit");
	newRow.append(play);
	play.append(stand);
	play.append(hit);
	


}


})









