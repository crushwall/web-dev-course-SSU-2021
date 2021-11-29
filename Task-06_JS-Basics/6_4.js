function Format(string) {
    let result = [];
    string
        .split('')
        .forEach((item, index) => result.push(item.toUpperCase() + item.repeat(index)));
    
    return result.join('-');
};

console.log("6.4. Форматирование строки");
console.log(Format('abcd'));
console.log(Format('RqaEzty'));
console.log(Format('cwAt'));