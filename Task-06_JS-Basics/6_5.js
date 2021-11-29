function IsIsogram(string) {
    return new Set(string.toLowerCase()).size == string.length
}

console.log("6.5. Изограммы");
console.log(IsIsogram('Dermatoglyphics'));
console.log(IsIsogram('aba'));
console.log(IsIsogram('moOse'));
console.log(IsIsogram(''));