function Factorial(n) 
{
    return n ? n * Factorial(n - 1n) : 1n;
}

function GetCoefficient(k, n){
    return Factorial(BigInt(n)) / (Factorial(BigInt(k)) * Factorial(BigInt(n - k)));
}

function GetPowFormula(n) {
    if (!Number.isInteger(n) || n < -200 || n > 200) {
        return 'The power must be an integer number between -200 and 200.';
    }

    let isPositive = n > 0 ? true : false;
    let temp = Math.abs(n);
    let result = "";

    if (temp == 0) {
        return "1";
    }
    else {
        {
            for (var i = 0; i <= temp; i++) {
                let coef = GetCoefficient(i, temp)
                if (coef != 1){
                    result += coef.toString();
                }

                if (i != 0 && i != temp){
                    result += `a${temp - i == 1 ? '' : `^${temp - i}`}b${i == 1 ? '' : `^${i}`}`; 
                }
                else{
                    if (i == 0){
                        result += `a${temp - i == 1 ? '' : `^${temp - i}`}`;
                    }
                    else{
                        result += `b${i == 1 ? '' : `^${i}`}`;  
                    }
                }

                if (i != temp){
                    result += " + ";
                }
            }
        }
    }

    if (!isPositive){
        result  = `1 / ( ${result} )`;
    }

    return result;

}

console.log("7.3. Формула для (a+b)^n.")
console.log(GetPowFormula(0));
console.log(GetPowFormula(1));
console.log(GetPowFormula(2));
console.log(GetPowFormula(-2));
console.log(GetPowFormula(3));
console.log(GetPowFormula(5));
console.log(GetPowFormula(201));
console.log(GetPowFormula(3.14));