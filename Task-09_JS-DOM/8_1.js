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

    for (let i = 0; i < passLength - 3; i++){
        if (i != nessLowLetterIndex && i != nessUpLetterIndex && i != nessNumberIndex){
            password[i] = GetRandomSymbol(numbers + englishLow + englishUp);
        }
    }

    return password.join('');
}

function ValidateLength(min, max){
    if (!Number.isInteger(min)){
        return "Min must be integer"
    }

    if (!Number.isInteger(max)){
        return " Max must be integer";
    }

    if (min < 0 || min > 50){
        return " Min must be from 0 to 50";
    }

    if (max < 0 || max > 50){
        return " Max must be from 0 to 50";
    }

    if (max < min + 3){
        return " Min must be less than Max";
    }
}

function GeneratePasswordAndShow(){
    let minLength = parseInt(document.getElementById("minLength").value);
    let maxLength = parseInt(document.getElementById("maxLength").value);

    let validate = ValidateLength(minLength, maxLength);
    if (validate != null)
        document.getElementById("password").innerHTML = validate;
    else
        document.getElementById("password").innerHTML = GeneratePassword(minLength, maxLength);
}