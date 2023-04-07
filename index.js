//Uzduotis #1:

function addition(num) {
    return num + 1;
}

console.log(addition(2));
console.log(addition(9));
console.log(addition(-3));
console.log("#1 - END");

//Uzduotis #2:

function howManySeconds(hours){
    return hours * 60 * 60;
}

console.log(howManySeconds(2));
console.log(howManySeconds(10));
console.log(howManySeconds(24));
console.log("#2 - END");

//Uzduotis #3:

function basketballPoints(penalty, twopoints, threepoints){
    return penalty + (twopoints * 2) + (threepoints * 3);
}

console.log(basketballPoints(5,25,10));
console.log(basketballPoints(1,1,1));
console.log(basketballPoints(10,20,5));
console.log("#3 - END");

//Uzduotis #4:

function lessThan100(num1, num2){
    if(num1 + num2 <= 100){
        return true;
    } else {
        return false;
    }
}

console.log(lessThan100(22,15));
console.log(lessThan100(83,34));
console.log(lessThan100(3,77));
console.log("#4 - END");

//Uzduotis #5:

function isSameNum(num1, num2){
    if(num1 === num2){
        return true;
    } else {
        return false;
    }
}

console.log(isSameNum(4,8));
console.log(isSameNum(2,2));
console.log(isSameNum(2,"2"));
console.log("#5 - END");

//Uzduotis #6:

