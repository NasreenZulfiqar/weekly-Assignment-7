//write a programe having an array of numbers if the number is negative
//it should remove the negative numer from the array.

function removeNegativeNumbers(array: number[]): number[] {
    return array.filter((num) => num >= 0);
}

var number = [1, -2, -3, -4, -5, -6, 56];
var result1 = removeNegativeNumbers(number);
console.log("Array with negative numbers removed:", result1);