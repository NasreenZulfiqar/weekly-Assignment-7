//creat a function that takes an array of number as parameter . use a for
//loop to calculate and return the sum of all the number in the array.

function calculateSum(numbers: number[]): number {
    let sum = 0;

    for (let i =0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

var numberArray = [1,2,3,4,5];
var totalSum = calculateSum(numberArray);
console.log("Sum of numbers:", totalSum); 