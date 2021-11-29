function Isogram(string) {
    return new Set(string.toLowerCase()).size == string.length
}

console.log("6.5. Изограммы");
console.log(Isogram('Dermatoglyphics'));
console.log(Isogram('aba'));
console.log(Isogram('moOse'));
console.log(Isogram(''));