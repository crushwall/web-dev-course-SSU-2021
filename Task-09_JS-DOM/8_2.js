function CountigGame(n, k) {
    if (n < 0 || k < 0){
        return "The n and k must be positive.";
    }

    let players = new Array(n).fill(1);

    let count = n - 1;
    let i = -1;
    while (count > 0){
        let temp = k;
        while (temp > 0){
            i = ++i % n;
            if (players[i] == 1){
                --temp;
            }
        }
        
        players[i] = 0;
        --count;
    }

    return players.indexOf(1) + 1;
}

function Validate(count, step){
    if (!Number.isInteger(count)){
        return "Count must be integer"
    }

    if (!Number.isInteger(step)){
        return " Step must be integer";
    }

    if (count < 1 || count > 1000){
        return " Count must be from 1 to 1000";
    }

    if (step < 1 || step > 1000){
        return " Step must be from 1 to 1000";
    }

    if (count < step){
        return " Step must be less than Count";
    }
}

function StartCountingGammeAndShow(){
    let count = parseInt(document.getElementById("count").value);
    let step = parseInt(document.getElementById("step").value);

    let validate = Validate(count, step);
    if (validate != null)
        document.getElementById("winner").innerHTML = validate;
    else
        document.getElementById("winner").innerHTML = CountigGame(count, step);
}