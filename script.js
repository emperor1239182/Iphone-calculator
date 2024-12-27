let result = document.getElementById("result");
let posneg = document.getElementsByClassName("unique");
let met = document.getElementById("convertMetrics");
let units = document.getElementById("metrics");
let details = document.getElementById("details");
let convert = document.getElementById("convert");

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
	if(units.value === "temperature" || units.value === "length" || units.value === "distance"){
	met.style.display = "block";
	details.innerHTML = "Convert" + " " + units.value
	}
	else{
		met.style.display = "none"
	}
}



  function toKelvin(temp){
    return temp + 273.15;
    }

   function toCelcius(temp){
    return temp - 273.15;
    }

	
	convert.addEventListener("click", ()=>{
		let switchElement = document.getElementById("switch").value
		let output = document.getElementById("output");
		let input = document.getElementById("input").value
		if(input === ""){
			return output.innerHTML = "Enter a valid input";
		}
			let temperature = parseFloat(input);

			if(switchElement === "kelvin"){
				output.innerHTML = "";
				let solution = toKelvin(temperature);
				output.innerHTML  = `Temperature is ${solution} K`;
			} else if(switchElement === "celcius"){
				output.innerHTML = "";
				let solution = toCelcius(temperature);
				output.innerHTML  = `Temperature is ${solution} C`;
			}
			
		})

