let result = document.getElementById("result");
let posneg = document.getElementsByClassName("unique");
let met = document.getElementById("convertMetrics");
let units = document.getElementById("metrics");
let details = document.getElementById("details");
let convert = document.getElementById("convert");

let switchElement = document.getElementById("switch").value
		let output = document.getElementById("output");
		

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

//conversions display
function display(){
	if(units.value === "temperature" || units.value === "weight" || units.value === "distance"){
	met.style.display = "block";
	details.innerHTML = "Convert" + " " + units.value;
	} 
	else{
		met.style.display = "none"
	}
}


//temperature conversion
  function toKelvin(temp){
    return temp + 273.15;
    }

   function toCelcius(temp){
    return temp - 273.15;
    }

	//mass conversion
	function toKg(weight){
		return weight / 1000;
	}

	function toGram(weight){
		return weight * 1000;
	}
	
	//trigger the conversion functions
	convert.addEventListener("click", ()=>{
		if(units.value === "temperature"){
			return showTemp();
		} else if(units.value === "weight"){
			return showWeigth();
		}	
		})

		//show temperature conversion result 
		function showTemp(){
		let switchElement = document.getElementById("switch").value;
		let output = document.getElementById("output");
		let input = document.getElementById("input").value;

		if(input === ""){
			return output.innerHTML = "Enter a valid input";
		}

		let realValue = parseFloat(input);
			let temperature = realValue;

		if(switchElement === "kelvin"){
			output.innerHTML = "";
			let solution = toKelvin(temperature);
			output.innerHTML  = `Temperature is ${solution} K`;
		} else if(switchElement === "celcius"){
			output.innerHTML = "";
			let solution = toCelcius(temperature);
			output.innerHTML  = `Temperature is ${solution} C`;
		}
		}
		//show weight conversion result
		function showWeigth(){
			let switchElement = document.getElementById("switch").value;
			let output = document.getElementById("output");
			let input = document.getElementById("input").value;

			if(input === ""){
				return output.innerHTML = "Enter a valid input";
			}
	
			let realValue = parseFloat(input);
				let weight = realValue;
	
			if(switchElement === "kelvin"){
				output.innerHTML = "";
				let solution = toKg(weight);
				output.innerHTML  = `Weight is ${solution} Kg`;
			} else if(switchElement === "celcius"){
				output.innerHTML = "";
				let solution = toGram(weight);
				output.innerHTML  = `Weight is ${solution} G`;
			}
			}

