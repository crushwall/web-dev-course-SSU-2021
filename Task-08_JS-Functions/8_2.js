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

console.log("8.2. Игра на выбывание");
console.log(CountigGame(7, 3));
console.log(CountigGame(13, 1));
console.log(CountigGame(50, 2));