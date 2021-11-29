const phoneFormat = "+7 (XXX) XXX-XX-XX";

function CreatePhoneNumber(array){
    if (array.length != 10 ) {
        return 'Invalid input';
    }


    let phone = phoneFormat;
    for(let i = 0; i < array.length; i++) {
        if(array[i] >= 0 && array[i] <= 9) {
            phone = phone.replace('X', array[i]);
        }
        else {
            phone = 'Invalid input';
            break;
        } 
    }

        return phone;
}

console.log("7.1. Форматирование телефонного номера")
console.log(CreatePhoneNumber([9, 0, 0, 1, 1, 1, 2, 2, 3, 3] ));
console.log(CreatePhoneNumber([9, 2, 7, 5, 5, 5, 6, 6, 9, 0] ));
console.log(CreatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, -11]));
console.log(CreatePhoneNumber([]));
console.log(CreatePhoneNumber('aw93fha='));