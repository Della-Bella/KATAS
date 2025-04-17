/* if / Else*/

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(evenOrOdd(10));
console.log(evenOrOdd(7));  // Output: Odd

/* if / Else* Negative & p\ositive numbers*/

function makeNegative(num) {
    if (num < 0) {
        return num
    } else {
        return -num
    }
}

/*Convert boolean values to strings 'Yes' or 'No' (if & else).*/
function boolToWord(bool) {
    if (bool === true) {
        return "Yes"
    } else {
        return "No"
    }
}

/*Is n divisible by x and y?*/
function isDivisible(n, x, y) {
    if ((n % x === 0) && (n % y === 0)) {
        return true;
    } else {
        return false;
    }
}

/*Car Rent disconts Daly*/
function rentalCarCost(d) {

    if (d >= 7) {
        return 40 * d - 50;
    }

    else if (d >= 3) {
        return 40 * d - 20;
    }

    else {
        return 40 * d;
    }
}

console.log("Cost for 1 day:", rentalCarCost(1));   
console.log("Cost for 2 days:", rentalCarCost(2)); 
console.log("Cost for 3 days:", rentalCarCost(3));  
console.log("Cost for 4 days:", rentalCarCost(4));  
console.log("Cost for 6 days:", rentalCarCost(6));  
console.log("Cost for 7 days:", rentalCarCost(7)); 
console.log("Cost for 10 days:", rentalCarCost(10)); 