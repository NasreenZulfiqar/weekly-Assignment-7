//implements a program that takes a list of temperature in celcius as input 
//from the user .convert each temperature to Fahrenheit C * 9/5) + 32 and 
//store the converted temperature in an array . Use a for loop to perform
//the conversion for each temperature .

var celciusTemperatures: number[] =[15, 25, 35, 45, 55];
var FahrenheitTemperature: number[] = [];

for (var celcius of celciusTemperatures) {
    var Fahrenheit = (celcius * 9/5) + 32;
    FahrenheitTemperature.push(Fahrenheit);
}
console.log("Celcious Temperature:", celciusTemperatures);
console.log("FahrenhietTemperature:", FahrenheitTemperature);