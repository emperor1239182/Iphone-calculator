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

function toKelvin(){
	let result = document.getElementById("result").value;
    let output = parseFloat(result)+ 273.15;
    return "temp" + " " + "is" + ":" + output + "K";
    }

    function toCelcius(){
		let result = document.getElementById("result").value;
    let output = parseFloat(result) - 273.15;
    return "temp" + " " + "is" + ":" + output + "C";
    }

	let convert = document.getElementById("conversion");
	let metric = document.getElementById("metrics");
	let execute = document.getElementById("convert");
	let answer;
	
			execute.addEventListener("click", ()=>{
				if(metric.value === "celcius"){
					convert.innerHTML = "";
				answer = toCelcius();
				} else if(metric.value === "kelvin"){
					convert.innerHTML = "";
					answer = toKelvin();
				}
				 else{
					answer = "enter a unit";
				}
				convert.innerHTML = answer;
			}
		);
	function clear(){
		if(metric.value === "none"){
			convert.innerHTML = "";
		}
		
	}
	
