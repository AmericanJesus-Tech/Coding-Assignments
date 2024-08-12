const ages = [3, 9, 23, 64, 2, 8, 28, 93, 100];

const firstValue = ages.filter(element => typeof element 
    !== undefined).shift();
    const lastValue = ages[ages.length - 1];
    
    console.log(lastValue - firstValue);

    let sumOfAges = 0;
    for (let i = 0; i < ages.length; i++) {
        sumOfAges += ages[i];
        console.log("index:", i, "sumOfAges:", sumOfAges);
    }

    let averageAge = sumOfAges / ages.length;
    console.log("Average age:", averageAge);


const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

function calculateAverageLetters(arr) {

    let totalLetters = 0;

    for (let i = 0; i < arr.length; i++) {
        totalLetters += arr[i].length;
    }

    const averageLetters = totalLetters / arr.length;
    return averageLetters;
}

const average = calculateAverageLetters(names);

console.log(`Average letters per word: ${average.toFixed(2)}`);

let concatNames = "";

for (let i = 0; i < names.length; i++) {
    concatNames = concatNames.concat(names[i]);
    console.log(concatNames);
}
console.log("First element of ages:", ages[0]);

console.log("Last element of ages:", ages[ages.length - 1]);

const nameLengths = [];

for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log("Name lengths:", nameLengths);

let totalLetters = 0;

for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}

console.log(totalLetters);

function concatWords(word, n) {
let concat = word.repeat(n);
console.log(concat);
}
concatWords("Hello", 3);

function fullName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    console.log(fullName);
}
fullName("Mason", "Pfingston");

let numbers1 = [100, 200, 300, 400];
let numbers2 = [1, 2, 3, 4];

function sumNumbersArray(array) {
    let total = 0;

    for (let i =0; i < array.length; i++) {
        //console.log(i, "test");
        total += array[i];
        console.log("Total:", total);
    }

    if (total > 100) {
        console.log("Total:", total, true);
        return true;
    }   else {
        console.log("Total:", total, false);
        return false;
    }
}
sumNumbersArray(numbers1);
sumNumbersArray(numbers2);

function calcNumAverage (array) {
    let total = 0;

    for (let i = 0; i < array.length; i++){
        total += array[i];
        console.log("Total:", total);
    }

    let average = total / array.length;
    console.log("Average:", average);
    return average;
}

calcNumAverage(numbers1);

let numbers3 = [100, 100, 100];
let numbers4 = [100, 99, 100];

function twoAverages(array1, array2) {
    let total1 = 0;
    let total2 = 0;
    for (const number of array1) {
        total1 += number;
        console.log("Current number loop 1:", number, "Total 1:", total1);
    }

    for (const number of array2) {
        total2 += number;
        console.log("Current number loop 2:", number, "Total 2:", total2);
    }
    let average1 = total1 / array1.length;
    let average2 = total2 / array2.length;

    console.log("Averages:", average1, average2);

    if (average1 > average2){
        console.log(true);
        return true;
    } else if (average1 < average2) {
        console.log(false);
        return false;
    } else {
        console.log("Numbers are equal");
    }
}

twoAverages(numbers3, numbers4);


function willBuyDrink(isHotOutside, moneyInPocket) {
    let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
    console.log("Buy drink?", buyDrink);
    return buyDrink
}

willBuyDrink(true, 20);