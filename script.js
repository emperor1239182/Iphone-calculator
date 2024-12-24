let result = document.getElementById("result");
let posneg = document.getElementsByClassName("unique");
function show(number){
	result.value += number;
}

function calc() {
	
	result.value = eval(result.value);
}

function clearResult() {
	
	result.value = "";
}
function cancel(){
	result.value = result.value.slice(0, -1);
}
function change(){
	if(result.value > -0){
		result.value = "-".concat(result.value);
	} else{
		result.value = "+".concat(result.value);
	}
}

function display(){
	let met = document.getElementById("convertMetrics");
	let units = document.getElementById("metrics");
	let details = document.getElementById("details");
	if(units.value === "temperature" || units.value === "length" || units.value === "distance"){
	met.style.display = "block";
	details.innerHTML = "Convert" + " " + units.value
	}
	else{
		met.style.display = "none"
	}
}

let input = document.getElementById("input").value;
let output = document.getElementById("output");
function temperature(){
	
}