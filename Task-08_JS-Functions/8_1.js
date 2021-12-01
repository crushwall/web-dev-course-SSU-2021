const numbers = "0123456789";
const englishLow = "abcdefghijklmnopqrstuvwxyz";
const englishUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function GetRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
  
function GetRandomSymbol(symbols) {
    return symbols[GetRandomInt(0, symbols.length - 1)];
}

function GeneratePassword(minLength, maxLength){
    let passLength = GetRandomInt(minLength, maxLength);
    let password = new Array(passLength);

    // Индексы требуемых символов
    let nessLowLetterIndex = GetRandomInt(0, passLength - 1);

    let nessUpLetterIndex = nessLowLetterIndex;
    while (nessUpLetterIndex == nessLowLetterIndex){
        nessUpLetterIndex = GetRandomInt(minLength, maxLength);
    }

    let nessNumberIndex = nessLowLetterIndex;
    while (nessNumberIndex == nessLowLetterIndex || nessNumberIndex == nessUpLetterIndex){
        nessNumberIndex = GetRandomInt(minLength, maxLength);
    }

    password[nessLowLetterIndex] = GetRandomSymbol(englishLow);
    password[nessUpLetterIndex] = GetRandomSymbol(englishUp);
    password[nessNumberIndex] = GetRandomSymbol(numbers);

    for (let i = 0; i < passLength; i++){
        if (i != nessLowLetterIndex && i != nessUpLetterIndex && i != nessNumberIndex){
            password[i] = GetRandomSymbol(numbers + englishLow + englishUp);
        }
    }

    return password.join('');
}

console.log("8.1. Генератор паролей");
console.log("Пароль №1: " + GeneratePassword(6, 20));
console.log("Пароль №2: " + GeneratePassword(6, 20));
console.log("Пароль №3: " + GeneratePassword(6, 20));