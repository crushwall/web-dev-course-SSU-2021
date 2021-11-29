const vowels = ['a', 'e', 'i', 'o', 'u'];
function VowelsCount(string) {
    let result = 0;
    string.toLowerCase()
          .split('')
          .forEach((letter) => {
          if (vowels.includes(letter)){
              result++;
          }
    });

    return result;
}

console.log("6.3. Подсчёт гласных");
console.log(VowelsCount('abracadabra'));
console.log(VowelsCount('ABRACADABRA'));
console.log(VowelsCount('o a kak ushakov lil vo kashu kakao'));
console.log(VowelsCount('my pyx'));