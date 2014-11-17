var fizzBuzzVal = "";

var fizzBuzzGame = function(number) {

	for(var i=1; i<=number; i++) {

		if(((i%3) == 0) && ((i%5) == 0)) {
			fizzBuzzVal += "<span style='color:red'>FIZZ BUZZ!</span><br/>";
		}
		else if((i%3) == 0) {
			fizzBuzzVal += "<span style='color: green'>FIZZ</span><br/>";
		}
		else if((i%5) == 0) {
			fizzBuzzVal += "<span style='color:blue'>BUZZ</span><br/>";
		}
		else {
			fizzBuzzVal += i + "<br/>";
		}
	}
	$("#fizzBuzz").append(fizzBuzzVal);	
};

var checkIfNumber = function(value) {
	var isNumber = true;
	if(value%1 != 0)
	{
		isNumber = false;
 	}
 	else if (value == "") {
 		isNumber = false;
 	}
 	return isNumber;
};

$(document).ready(function() {
	var num = +prompt("Enter the number: ");
	while(!checkIfNumber(num)){
		num = +prompt("Please enter a valid number: ");
	}
	fizzBuzzGame(num);
});