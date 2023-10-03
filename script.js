function toFahrenheit(celsius) {
 // Write your code here
	return (celsius*(9/5))+32;
}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
