/********************
*Variables and data types
*/
/*
var firstName = 'Cameron';
console.log(firstName);

var lastName = 'Malone';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job='Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
*/




/********************
*Variables mutation and type coercion


var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a '+ age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job ='driver';

alert(firstName + ' is a '+ age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);


*/
/***************
* Basic Operators


var year, yearJohn, yearMark;
now = 2020;
ageJohn = now - 28;
ageMark = now - 33;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


//Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);

/**********************************
* Operator


var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 // 32-6 // 26
console.log(x, y);

// More operators
x += 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);

*/


/*************************
* Coding Challenge


var massJohn, massMark, heightJohn, heightMark;
massJohn = 150;
massMark = 120;
heightJohn = 2.4;
heightMark = 1.4;
console.log(massJohn);

var JohnBMI = massJohn / (heightJohn * heightJohn);
var MarkBMI = massMark / (heightMark * heightMark);
console.log(JohnBMI, MarkBMI);

var johnHigherBMI = JohnBMI > MarkBMI;
console.log('Is John\'s BMI higher than Mark\'s? ' + johnHigherBMI);
*/

/*********************
If / else statements


var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {console.log(firstName + ' is single');}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {console.log(firstName + ' is single');}


var massJohn, massMark, heightJohn, heightMark;
massJohn = 150;
massMark = 120;
heightJohn = 2.4;
heightMark = 1.4;
console.log(massJohn);

var JohnBMI = massJohn / (heightJohn * heightJohn);
var MarkBMI = massMark / (heightMark * heightMark);
console.log(JohnBMI, MarkBMI);

if (JohnBMI > MarkBMI) {console.log('Mark\'s BMI is higher than John\'s');}
else {console.log('John\'s BMI is higher than Mark\'s');}


/*var johnHigherBMI = JohnBMI > MarkBMI;
console.log('Is John\'s BMI higher than Mark\'s? ' + johnHigherBMI)*/

// Boolean Logic************


/*var firstName = 'Cameron';
var age = 25;

if (age < 23) {console.log(firstName + ' is a young man. ');}
else if (age >= 13 && age > 20) {console.log(firstName + ' is a middle aged man.');}
else { console.log(firstName + ' is a grown man.');}*/

// The Ternary Operator and Switch Statements

/*var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


// SWITCH Statement*******

var job = 'cop';
switch (job) {
    case 'teacher':
    case 'professor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + 'drives an uber in Memphis');
        break;
    case 'cop':
        console.log(firstName + ' arrests ppl ');
        break;
    case 'homeless':
        console.log(firstName + ' doesn\'t have a home.');
}
*/



// Truthy and falsy value and equality oper

// falsy values: undefined, null, 0, '', NaN
// truth values: NOT falsy values

/*var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');}

// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');}
*/

// Code challenge*************

/*var JohnAverage = (89 + 94 +123) / 3;
    console.log(JohnAverage);
var MikeAverage = (116 + 94 + 123) / 3;
    console.log(MikeAverage);
var MaryAverage = (33 + 33 + 333) / 3;

if (JohnAverage > MikeAverage && JohnAverage > MaryAverage) {
    console.log('John\'s team has the higher average with ' + JohnAverage);
} else if (MikeAverage > JohnAverage && MikeAverage >  MaryAverage) {
    console.log('Mike\'s team has the higher average with ' + MikeAverage);
} else if (MaryAverage > JohnAverage && MaryAverage >  MikeAverage) {
    console.log('Mary\'s team has the higher average with ' + MaryAverage)
} else {
    console.log('There is a draw');
}

*/

// FUNCTIONS *********************

/*function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageCam = calculateAge(1994);
var ageKristian = calculateAge(1948);
console.log(ageJohn, ageCam,ageKristian);


function yearUntilRetirement(year, firstname)
{
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstname + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstname + ' is already retired.');
    }

}
yearUntilRetirement(1990, 'John');
yearUntilRetirement(1994, 'Cam');
yearUntilRetirement(1948, 'Kristian');*/



// Function Statements and Expressions

// Function declaration
// function whatDoYouDo(job, firstName) {}




/*var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + 'designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}


console.log(whatDoYouDo('teacher', 'Cam'));*/


// Arrays ************************



/*var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);


// Mutate array data
names[1] = 'Ben'; //By changing Mark n2 Mary
names[names.length] = 'Mary'; // Will be last
console.log(names);


// Different Data types
var john = ['John', 'Smith', 1990, 'teacher', false, 'designer'];

john.push('blue');
john.unshift('Mr');
john.pop();
john.shift();

console.log(john.indexOf(false));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);*/





// Coding Challenge ***************
/*
function tipCalculator(bill) {
    var percent;
    if (bill < 50) {
        percent = .2;
    } else if (bill >= 50 && bill < 200) {
        percent = .15;
    } else {
        percent = .1;
    }
    return percent * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),                     tipCalculator(bills[1]),                     tipCalculator(bills[2])];
console.log(tips);
*/



// Objects and properties

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: '1990',
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false

};

console.log(john.firstName);
console.log(john['lastName']);

// Can mutate data redefining var
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

*/
//Objects and methods

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: '1992',
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) {
        this.age = 2018 - this.birthYear;
    }

};

john.calcAge();
console.log(john);

*/ // Coding Challenge

/*
var mark = {
    fullName: 'Mark White',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

*/




































































































































































