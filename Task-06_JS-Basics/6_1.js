function ToFlatArray(array){
    return array.flat().sort();
}

console.log("6.1. Плоский массив");
console.log(ToFlatArray([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));
console.log(ToFlatArray([]));
console.log(ToFlatArray([[], []]));
console.log(ToFlatArray([[], [1]]));
console.log(ToFlatArray([[1, 3, 5], [-100], [2, 4, 6]]));