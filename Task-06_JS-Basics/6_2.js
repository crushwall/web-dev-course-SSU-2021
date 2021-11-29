function ToBinaryArray(string){
    let result = [];
    for (let i = 0; i < string.length; i++){
        let temp = string[i].charCodeAt(0).toString(2);
        result.push('0'.repeat(8 - temp.length) + temp);
    }
    
    return result;
}

console.log("6.2. Бинарное слово");
console.log(ToBinaryArray('man'));
console.log(ToBinaryArray('AB'));
console.log(ToBinaryArray('wecking'));
console.log(ToBinaryArray('Ruby'));
console.log(ToBinaryArray('Yosemite'));