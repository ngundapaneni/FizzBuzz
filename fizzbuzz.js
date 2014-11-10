var fizzBuzzVal = "";

$(document).ready(function() {
	for(var i=1; i<=100; i++) {

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
});