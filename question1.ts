// Create a function that takes an index an array,an index ,and a value as
// parameter.inside the function,use the splice method to insert the value
// at the specific index in yhe array. Return the modified array. 
function InsertValueIndex<I>(array: I[], index: number, value: I): I[] {
    if (index < 0 || index > array.length) {
        throw new Error('Index out of bounds');
    }

    array.splice(index, 0, value);

    return array;
}

var orignalArray: number[] = [1,5,10,15,20];
var modifiedArray = InsertValueIndex(orignalArray, 5,6);

console.log(modifiedArray);