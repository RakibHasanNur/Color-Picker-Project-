	var numSquares = 6;
	var colors = [];
	var pickedColor;
	var squares = document.querySelectorAll(".square");
	var colorDisplay = document.querySelector("#colordiapsy");
	var messageDispaly = document.querySelector("#message");
	var resetButton = document.querySelector(".resetButton")
	colorDisplay.textContent = pickedColor;
	var h1 = document.querySelector("h1");
	var Easybtn = document.querySelector("#EasyButton");
	var Hardbtn = document.querySelector("#HardButton");
	var modeButtons = document.querySelectorAll(".mode");
	

	function genarateRandomColors(num){
		// make an array
		var arr = [];
		
		// repet num times

		for (var i = 0;  i < num; i++) {
			// get random colors and push into array
			arr.push(randomColor());
			}

			// return that array
			return arr;
	}

	function reset() {
		// genarate all new colors
		colors = genarateRandomColors(numSquares);
		// pick a new random color from array
		pickedColor = pickColor ();
		// change color display to match picked color
		colorDisplay.textContent = pickedColor;
		// change colors of squres
		for(var i=0; i<squares.length; i++){
			if (colors[i]) {
				// we did block the display because we need to unhide the bottom three
			 	// squre's by giving them the display property: "block"
			 	// so, if we are going to give a background color we need to be 
			 	// sure that they are visible first. 
			 	squares[i].style.display = "block";
			 	squares[i].style.background = colors[i];
			} else{
				squares[i].style.display = "none";
			}
			
		}
		// styling h1 as the backgrond color
		h1.style.background= "steelblue";
		messageDispaly.textContent = "";
		resetButton.textContent = "New colors";
	}

	// to make code more clean, creating a function init. 
	init();

	function init(){

		// to make our code nice and clean: [modeButtons eventlistener] 
		for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){

		// what we have done here is  that, when we click on any of our buttons the 
		// "selected" class will automatically be remove and then we will add the class 
		// "selected" to the button that we clicked on. 
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");


		// figure out how many squares to show
		// pick new color
		// pick a new pickedColor
		// update page to reflecte changes 


		// Ternary Oparator
		this.textContent === "EASY" ? numSquares = 3: numSquares = 6;
		// if (this.textContent === "EASY"){
		// 	numSquares = 3;
		// } else {
		// 	numSquares = 6;
		// }
			reset();
		});
	}
		for (var i = 0; i < squares.length; i++) {
		// add initial colors to the var colors
		// *colors [i] = genaraterandomcolors*
		// we have the line below in our reset button so we doesn't need that line anymore
		// squares[i].style.background = colors[i];
		// add "click" listeners to sqares
		squares[i].addEventListener("click", function(){
			// grab clolor of clicked square
			var clickedColor = this.style.background;
			// compare color to pickedcolor
			if(clickedColor === pickedColor){
				messageDispaly.textContent = "Correct :) ";
				resetButton.textContent = "Play Again?";

				// SO 	what *what change color does is that 
				// it changes all the square's color to be that clickedColor*
				changeColors (clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323"
				messageDispaly.textContent = "Try agin :( ";
			}
		})
	}
		reset ();
	}


	// Easybtn.addEventListener("click", function(){
	// 	Easybtn.classList.add("selected");
	// 	Hardbtn.classList.remove("selected");
	// 	numSquares = 3;
	// 	colors = genarateRandomColors(numSquares);
	// 	pickedColor = pickColor();
	// 	// change color display to match picked color
	// 	colorDisplay.textContent = pickedColor;
	// 	for(var i=0; i < squares.length; i++){
	// 		if (colors[i]) {
	// 			squares[i].style.background = colors[i];
	// 		} else {
	// 			squares[i].style.display = "none";
	// 		}
	// 	}

	// });

	// Hardbtn.addEventListener("click", function(){
	// 	Easybtn.classList.remove("selected");
	// 	Hardbtn.classList.add("selected");
	// 	numSquares = 6;
	// 	colors = genarateRandomColors(numSquares);
	// 	pickedColor = pickColor();
	// 	// change color display to match picked color
	// 	colorDisplay.textContent = pickedColor;
	// 	for(var i=0; i < squares.length; i++){
	// 	squares[i].style.background = colors[i];
	// 	squares[i].style.display = "block";
	// 		}
	// });

	resetButton.addEventListener("click", function(){
		reset();
	})

	// what we do here (by "here" we mean the for loop below) is just make an for loop to loop through the squres 
	// classes and to make their color changed. Thats why on top we made
	// an array with 6 colors to make avery individual squre have a 
	// different color. colors[i] represents every indivuldial elements 
	// in the array according to "squares[i]" that means we are using the same [i] to represent the colors array.
	 // if we want to shoot a certain elements in the array
	// then we can use the array index inside of the brackets instade of [i]
	// one thing to to note that *we use *for loop* if we need to loop through 
	// many things*

	function changeColors(color) {
		    //loop through all squares
		for(var i = 0; i < squares.length; i++) {
			//change each color to match given color
			squares[i].style.background = color;
		}
	}


	// the rule to pick something random in js
	// and this function is to pick any color in random to start the play
	function pickColor () {
		var random = Math.floor(Math.random() * colors.length);
		return colors [random];
	}


	function randomColor() {
		// this function would give us 3 random numbers from 0 to 255
		// we multiply Math.random() with 256 because we have to add a plus one anyway.
		// because Math.random doesn't include integer, it's just give random numbers after decimal
		// so in order to include integer we need to add 1 after the Multiplication
		// so in the case below we need numbers between 0-255. Now if we multiply Math.random with 255 then 1 from 255 will go to fill up the integer that means we get random numbers form 0-254.
		// so in order to get the random numbers between 0-255 we need to multiply Math.random with 256 and that's how we get random numbers between 0-255.  

		// pick a "red" from 0-255
		var r = Math.floor(Math.random() * 256);
		// pick a "green" from 0-255
		var g = Math.floor(Math.random() * 256);
		// pick a "blue" from 0-255
		var b = Math.floor(Math.random() * 256);

		// formating into rgb
		// "rgb(r,g,b);"
		// "rgb(" + r + "," + g +"," + b")"
		
		// return rgb 
		// spacing has to be correct or similiar as css in order to work properly 
		// when we add a background color towards any element css or dom spaces between
		return "rgb(" + r + ", " + g +", " + b + ")"; 
	};
