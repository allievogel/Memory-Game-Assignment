var MemoryGame = {};

MemoryGame.firstArray = [];
MemoryGame.flipArray = [];
MemoryGame.unmatchedArray = [];
MemoryGame.counter = 0;

MemoryGame.init = function(){
	MemoryGame.createHeader();
	MemoryGame.createArray();
};

MemoryGame.createHeader = function(){
	var mainHeader = document.createElement("DIV");
	mainHeader.className = "headerClass";
	mainHeader.setAttribute("id", "main-header");
	mainHeader.innerHTML = "Welcome to the game of memory!";
	var br = document.createElement("br");
	mainHeader.appendChild(br);



		var createButton = document.createElement("button");
		createButton.className = "buttonClass";
		createButton.setAttribute("id", "start-button");
		createButton.innerText= "Press to begin!";
		mainHeader.appendChild(createButton);
		document.body.appendChild(mainHeader);

		createButton.addEventListener("click", MemoryGame.callButton);

};

MemoryGame.callButton =function(e) {
    buttonSelected = e.target.id;
    	MemoryGame.createCentral();
		MemoryGame.createCards();
};

MemoryGame.createArray = function(){
	var myArray = ["./Images/0.jpg","./Images/0.jpg","./Images/1.jpg", "./Images/1.jpg", "./Images/2.jpg", "./Images/2.jpg", "./Images/3.jpg", "./Images/3.jpg", "./Images/4.jpg", "./Images/4.jpg", "./Images/5.jpg", "./Images/5.jpg"];
	var mylength = myArray.length;

		while(mylength--){
			var rand = Math.floor(Math.random() * mylength);
			MemoryGame.firstArray.push(myArray[rand]);
			myArray.splice(rand, 1);
	}

};

MemoryGame.createCentral = function(){
	var memoryHolder = document.createElement("DIV");
	memoryHolder.className += "col-xs-12 memoryClass container";
	memoryHolder.setAttribute("id", "memory-holder");
	document.body.appendChild(memoryHolder);
};


MemoryGame.createCards = function(){
var memoryHolder = document.getElementById("memory-holder");	
var counter = 0;
	for (var h = 0; h < 4; h++){
		var rowDiv = document.createElement("DIV");
        rowDiv.className = "rowClass row";
        memoryHolder.appendChild(rowDiv);

		for (var j=0; j<3; j++){
                var columnDiv = document.createElement("DIV");
                columnDiv.className = "columnClass col-xs-4";
                rowDiv.appendChild(columnDiv);
                columnDiv.addEventListener("click", MemoryGame.cardFlip); 							
    			columnDiv.setAttribute("data-img", MemoryGame.firstArray[counter]);				
    							counter++;
    							}			

								}
					}; 

MemoryGame.cardFlip = function(e){
	e.target.style.content = "url(" + e.target.getAttribute("data-img")	 +")";
	// Saved reference to first card clicked
	MemoryGame.flipArray.push(e.target);
	console.log("checking data ", MemoryGame.flipArray);

	if (MemoryGame.flipArray.length == 2){
		MemoryGame.checkMatching(e);

	}
};

MemoryGame.checkMatching = function(e){
if (MemoryGame.flipArray[0].dataset.img == MemoryGame.flipArray[1].dataset.img) {
	console.log("Found a match!");
	MemoryGame.flipArray.pop();
	MemoryGame.flipArray.pop();
	MemoryGame.counter += 2;



} else {
	
	setTimeout(function(){
			MemoryGame.flipArray[0].style.content = "url(" + "Images/texture.jpg)";
			e.target.style.content = "url(" + "Images/texture.jpg)";
			MemoryGame.flipArray.pop();
			MemoryGame.flipArray.pop();
	}, 1000);


}

if (MemoryGame.firstArray.length === MemoryGame.counter){
	alert ("you won the game!");
	var winWindow = document.createElement("SPAN");
	winWindow.textContent= "Congratulations you won the game!";
	winWindow.setAttribute("id", "win");
	document.getElementById('win').appendChild(winWindow);
	var newGame=document.createElement('button');
	newGame.id="letsGo";
	newGame.onclick=MemoryGame.createCards;
	newGame.textContent="NEW GAME";
	document.getElementById('letsGo').appendChild(newGame);

}
									};

MemoryGame.init();


