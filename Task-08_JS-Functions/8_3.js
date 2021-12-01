function Expression(operation, operand){
    this.operation = operation;
    this.operand = operand;
}

function zero(expression){
    return calculate(0, expression)
}

function one(expression){
    return calculate(1, expression)
}

function two(expression){
    return calculate(2, expression)
}

function three(expression){
    return calculate(3, expression)
}

function four(expression){
    return calculate(4, expression)
}

function five(expression){
    return calculate(5, expression)
}

function six(expression){
    return calculate(6, expression)
}

function seven(expression){
    return calculate(7, expression)
}

function eight(expression){
    return calculate(8, expression)
}

function nine(expression){
    return calculate(9, expression)
}

function plus(operand){
    return new Expression((a, b) => (a + b), operand)
}

function minus(operand){
    return new Expression((a, b) => (a - b), operand)
}

function times(operand){
    return new Expression((a, b) => (a * b), operand)
}

function dividedBy(operand){
    return new Expression((a, b) => Math.floor((a / b)), operand)
}

function calculate(operand, expression){
    if(expression != null){
        return expression.operation(operand, expression.operand) 
    }
    else{
        return operand
    }
}

console.log("8.3. Калькулятор из функций");
console.log(seven(times(five())))
console.log(four(plus(nine())))
console.log(eight(minus(three())))
console.log(six(dividedBy(two())))
console.log(eight(dividedBy(three())))
console.log(three(times(three(times(three())))))
console.log(two(plus(two(times(two(minus(one())))))))
console.log(zero(plus(one(dividedBy(one())))))
console.log(one(dividedBy(zero())))
console.log(one())