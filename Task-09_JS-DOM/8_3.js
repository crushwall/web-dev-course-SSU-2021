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
        return expression.operation(expression.operand, operand) 
    }
    else{
        return operand
    }
}

function IsNumberFunction(func){
    switch(func){
        case zero:
        case one:
        case two:
        case three:
        case four:
        case five:
        case six:
        case seven:
        case eight:
        case nine:
            return true;
        default:
            return false;
    }
}

function MulByTen(exp){
    return exp(times(one(plus(nine()))))
}

function empty(){

}

function CurrentExpression(exp){
    if (Number.isInteger(this.expression) && IsNumberFunction(exp)){
        this.expression = exp(plus(this.expression * 10));
    }

    if (exp != null){
        if (exp != empty){
            this.expression = exp(this.expression);
        }
        else{
            return this.expression;
        }
    }
    else{
        this.expression = null;
    }
}

function Zero(){
    document.getElementById("result").innerHTML += "0";
    CurrentExpression(zero);
}

function One(){
    document.getElementById("result").innerHTML += "1";
    CurrentExpression(one);
}

function Two(){
    document.getElementById("result").innerHTML += "2";
    CurrentExpression(two);
}

function Three(){
    document.getElementById("result").innerHTML += "3";
    CurrentExpression(three);
}

function Four(){
    document.getElementById("result").innerHTML += "4";
    CurrentExpression(four);
}

function Five(){
    document.getElementById("result").innerHTML += "5";
    CurrentExpression(five);
}

function Six(){
    document.getElementById("result").innerHTML += "6";
    CurrentExpression(six);
}

function Seven(){
    document.getElementById("result").innerHTML += "7";
    CurrentExpression(seven);
}

function Eight(){
    document.getElementById("result").innerHTML +=  "8";
    CurrentExpression(eight);
}

function Nine(){
    document.getElementById("result").innerHTML += "9";
    CurrentExpression(nine);
}

function Add(){
    document.getElementById("result").innerHTML += "+";
    CurrentExpression(plus);
}

function Sub(){
    document.getElementById("result").innerHTML += "-";
    CurrentExpression(minus);
}

function Mul(){
    document.getElementById("result").innerHTML += "*";
    CurrentExpression(times);
}

function Div(){
    document.getElementById("result").innerHTML += "/";
    CurrentExpression(dividedBy);
}

function Show(){
    document.getElementById("result").innerHTML = CurrentExpression(empty);
}

function Delete(){
    document.getElementById("result").innerHTML = "";
    CurrentExpression(null);
}