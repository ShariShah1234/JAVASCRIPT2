

// Chapter 21-25 STRING METHODS

// Q1 

function con() {

    var fname = prompt("Enter your first Name : ");
    var lname = prompt("Enter your last Name : ");


    var fullName = fname + " " + lname;

    document.write("Welcome " + fullName);

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// Q2 
function lengthFinder() {
    var mobile = prompt("Enter your favorite Mobile : ")

    var lengthOfMobile = mobile.length;

    document.write("My favorite mobile is " + mobile + "<br> Length of string : " + lengthOfMobile);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// Q3 
function indexOfLetter() {

    var stringGiven = "Pakistani";

    var indexOfString = stringGiven.indexOf("n");

    document.write("String : " + stringGiven + "<br> Index of 'n' : " + indexOfString);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}


// Q4
function lastIndex() {

    var LastIndexString = "Hello World";

    var lastIndex = LastIndexString.lastIndexOf('l');

    document.write("String : " + LastIndexString + "<br> Last Index of 'l' : " + lastIndex);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}

// Q5

function thridIndex() {
    var thirdIndex = 'Pakistani';

    var findThirdIndex = thirdIndex.charAt(3);

    document.write("String : " + thirdIndex + "<br> Character at index 3 : " + findThirdIndex);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}

// Q6
function concatination() {

    var fname = prompt("Enter your first Name : ");
    var lname = prompt("Enter your last Name : ");


    var fullName = fname.concat(lname);

    document.write("Welcome " + fullName);

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// Q7

function replaceWord() {

    var currentCity = "Hyderabad";

    var ReplacedCity = currentCity.replace("Hyderabad", "Islamabad")

    document.write("City : " + currentCity + "<br>" + "After replacement: " + ReplacedCity);


    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}

// Q8 
function messageReplace() {
    var message = "Ali and Sami are best friends. They play cricket and football together.";

    var replaceWords = message.replace(/and/g, "&");


    document.write("Current Message  : " + message + "<br>" + "After replacement: " + replaceWords);


    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// Q9 

function convertsString() {
    var stringNumber = "472";
    var numberToString = +stringNumber;


    document.write("Value : " + stringNumber + "<br>" + "Type :  " + typeof (stringNumber) + "<br>");
    document.write("Value : " + numberToString + "<br>" + "Type :  " + typeof (numberToString));


    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// Q10 
function UpperCaseLetter() {

    var UserIpnut = prompt("Enter a Letter or Word")

    var UpperLetterWord = UserIpnut.toLocaleUpperCase();

    document.write("User Input : " + UserIpnut + "<br>" + "Upper Case  :  " + UpperLetterWord);


    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}


// Q11 

function titleCaseLetter() {
    var userInput = prompt("Enter a word or Letter");

    document.write("User Input : " + userInput + "<br>")

    document.write("Title case : ")

    var userInput = userInput.split(' ');
    for (i = 0; i < userInput.length; i++) {
        userInput[i] = userInput[i].charAt(0).toUpperCase() + userInput[i].slice(1) + " ";
        document.write(userInput[i])
    }
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}


// Q12

function variableIntoNumbers() {

    var num = 35.36;
    document.write("Number : " + num + "<br>")
    var strings = '' + num;
    var removedDot = strings.replace(".", "")
    document.write("Result : " + removedDot)
}

// Q13
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

function InvalidPass() {

    var userPass = prompt("Enter a name : ")
    var flag = false
    var splitPass = userPass.split('');

    for (i = 0; i < splitPass.length; i++) {

        if ((splitPass[i] === "!") || (splitPass[i] === ",") || (splitPass[i] === ".") || (splitPass[i] === "@")) {

            flag = true;
            alert("Please enter a valid username");
        }
    }
    if (flag === false) {

        alert("Valid password")
    }



}


// Q14
function SnacksFinding() {
    var A = ["cake", "apple pie", "cookie", "chips", "patties"];
    var snakcsInput = prompt("Enter a snacks").toLowerCase();

    if (A.indexOf(snakcsInput) !== -1) {
        document.write(snakcsInput + " is available at index " + A.indexOf(snakcsInput))
    }
    else {
        document.write("We are sorry.  " + snakcsInput + " is not available in our bakery")

    }

}


// // // Q15
function userPassword() {
    var pass = prompt("Enter your password");
    var a = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    var b = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    var c = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    var isNumber = false;
    var isAlpha = false;
    var isInvalid = false;

    if (c.indexOf(pass[0]) !== -1) {
        alert("Number is not allowed on index 0")
    }
    else if (pass.length < 6) {
        alert("Password should be at leasat 6")
    }

    else {

        for (i = 0; i < pass.length; i++) {

            if (a.indexOf(pass[i]) !== -1) {

                isAlpha = true;
            }
            else if (b.indexOf(pass[i]) !== -1) {

                isAlpha = true;
            }
            else if (c.indexOf(pass[i]) !== -1) {

                isNumber = true;
            }
            else {

                isInvalid = true;

            }
        }
        if (isNumber && isAlpha && !isInvalid) {

            alert("Correct !")
        }
        else {

            alert("password not meet the requirement ")
        }
    }


}


// Q16

function splitString() {
    var university = "University of Karachi";

    var splitiedvalues = university.split('').join("<br>")
    document.write(splitiedvalues);

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');



}

// Q17
function lastChar() {

    var character = "Pakistan";

    var LastChar = (character.length) - 1;

    document.write(character[LastChar])
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}


// Q18

function countOccurrences() {
    var n = "The quick brown fox jumps over the lazy dog.";

    var lowest = n.toLowerCase()
    var splitedvalue = lowest.split(" ");
    var coutString = 'the';

    var count = 0;
    for (var i = 0; i < splitedvalue.length; i++) {
        if (coutString == (splitedvalue[i]))
            count++;
    }

    document.write("Text : " + n + "<br>")
    document.write("There are " + count + "occurrence(s) of the word 'the' ");
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');


}

// Chapter 26-30 : Math Method

// q1 

function mathFunctions() {
    var number = +prompt("Enter a positive integer : ")

    document.write("Number:  " + number + "<br>");
    document.write("round of value: " + Math.round(number) + "<br>");
    document.write("floor value: " + Math.floor(number) + "<br>");
    document.write("Ceil value: " + Math.ceil(number) + "<br>");
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');


}


// q2 

function mathFunctionsNegative() {
    var number = +prompt("Enter a negative floating value : ")

    document.write("Number:  " + number + "<br>");
    document.write("round of value: " + Math.round(number) + "<br>");
    document.write("floor value: " + Math.floor(number) + "<br>");
    document.write("Ceil value: " + Math.ceil(number) + "<br>");
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');


}

// q3
function absoluteValue() {

    var number = prompt("Enter a number : ")
    if (number < 0) {

        var absNumber = number * -1;
        document.write("The Absolute value of " + number + "is" + absNumber)
    }
    else {
        document.write("The Absolute value of " + number + " is " + number)
    }
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');



}

// q4
function rollDice() {
    var randomvalues = + prompt("How many random value do you want to after roll the dice?")
    for (i = 1; i < randomvalues; i++) {
        var randomeNumber = Math.floor((Math.random() * 6)) + 1;
        document.write("Randome dice value : " + randomeNumber + "<br>")
    }
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// q5
function headtail() {
    for (i = 1; i < 5; i++) {
        var HT = ["Heads", "Tails"]
        var randomNumber = Math.floor(Math.random() * HT.length);
        var word = HT[randomNumber];
        document.write(randomNumber + 1 + "<br>" + "Random coin value : " + word + "<br>")


    }
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// q7
function randomNumber() {
    for (i = 1; i < 5; i++) {
        var randomNumber = Math.floor(Math.random() * 100);
        document.write("Random number between 1 to 100 : " + randomNumber + "<br>")
    }
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}
// q8
function parseInteger() {

    userInput = prompt("Enter your weight in kilogram");

    if (userInput.indexOf('.')) {

        document.write("The Weight of user is : " + parseFloat(userInput) + " Kilogram")
    }
    else {
        document.write("The Weight of user is : " + parseInt(userInput) + " Kilogram")


    }
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// q9
function randomNumbers() {
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    var userInput = +prompt("Enter a guess number : ")
    if (userInput === randomNumber) {
        alert("you Win")
    }
    else {
        alert("Try again !")
    }
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// Chapter 31-34 : DATE METHODS

// q1
function currentDate() {
    var currentDate = new Date();
    document.write(currentDate);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

function currentMonth() {
    var Month = ["Jan", "Feb", "Marach", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov"]
    var currentMonth = new Date().getMonth();
    alert("Current Month : " + Month[currentMonth]);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

function currentDay() {

    var day = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
    var currentDay = new Date().getDay();
    alert = ("Today is " + day[currentDay]);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}

function funDay() {

    var currentDay = new Date().getDay();
    var day = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]

    if (day[currentDay] === "Sun" || day[currentDay] === "Sun") {

        document.write("Its fun day")
    }
    else {
        document.write("Its NOT fun day")

    }
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}


function firstFifteendays() {
    var currentDate = new Date().getDay();

    if (currentDate === 15 || currentDate < 16) {
        alert('First Fifteen Days of the month')
    } else {
        alert('Last Fifteen Days of the month')
    }
}



function currentTime() {

    var currentDate = new Date();

    document.write("Current Date : " + currentDate);
    document.write("<br>")

    var MidNightJan = new Date("jan 1, 1970").getTime();


    var diff = currentDate - MidNightJan;
    document.write("Elapsed Millisecond since January 1, 1970: " + diff);
    document.write("<br>")

    var Minutes = diff / (1000 * 60);

    document.write("Elapsed Minutes since January 1, 1970: " + Minutes);

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');


}

function AmPM() {

    var date = new Date().getHours();
    if (date >= 12) {
        alert("Its PM")
    }
    else {
        alert("Its Am")
    }

}

function laterday() {

    var date = new Date("Dec 31, 2020");
    document.write("Later Date" + date);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

function ramzanDays() {
    var date = new Date("June 18, 2015");
    var current = new Date();
    var diff = current - date;

    var RamzanDaysPassed = Math.round(diff / (1000 * 60 * 60 * 24))
    alert(RamzanDaysPassed + " days have Passed since 1st Ramzan, 2015")
}

function daysLeft() {
    var date = new Date("Jan 01, 2015");
    var current = new Date();
    var diff = current - date;

    var secPassed = Math.round(diff / (1000 * 60))
    document.write("On Refernce date " + date + "," + secPassed + "  Passed since begning of 2015");
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}


function timeCalculate() {
    var dateTime = new Date("Jan 01, 2015 23:08:16")
    document.write("Current date" + dateTime)


    var beforeHr = new Date("Jan 01, 2015 22:08:16").getTime();

    dateTime.setTime(beforeHr)
    document.write("1 hour ago, it was " + dateTime)
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

function yearCalculator() {
    // // Year Calculator

    var user = prompt("Enter your year");

    var userYear = new Date(user).getTime();

    var currentYear = new Date().getTime();

    var diff = currentYear - userYear;
    var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

    document.write("Your age is : " + age + "<br>");
    document.write("Your birth year is : " + user)

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

function yearCalculation() {
    var currentDate = new Date();
    alert("Current date" + currentDate)

    var yearsBack = new Date("1992 Dec 05").getTime();

    currentDate.setTime(yearsBack);

    alert("100 years back it was" + currentDate);


}

function KEBill() {
    // // KE bill
    var Month = ["Jan", "Feb", "Marach", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov"]

    var customerName = prompt("Enter your Name : ");
    var currentMonth = new Date().getMonth();
    var numberOfUnit = +prompt("Enter number of Units :");
    var ChargesOfUnit = +prompt("Enter Charges per unit :");
    var LatePaymentSurcharge = +prompt("Enter Late Payment Surcharge :");
    var netAmount = +prompt("Enter Net Amount Payable (within Due Date)");

    var net_Amount_Payable = numberOfUnit * ChargesOfUnit;
    var Gross_Amount_Payable = netAmount + LatePaymentSurcharge;




    document.write(`<h1>K-Electric Bill <br> </h1>`)
    document.write(`<p>Customer Name: <b>${customerName}</b> <br> </p>`)
    document.write(`<p>Month: <b>${Month[currentMonth]}</b> <br></p>`)
    document.write(`<p> Number of Units: <b>${numberOfUnit} </b><br></p>`)
    document.write(`<p>Charges per unit: <b>${ChargesOfUnit}</b> <br> </p>`)

    document.write(`<p>Net Amount Payable (within Due Date): <b>${net_Amount_Payable}</b> <br> </p>`)
    document.write(`<p>Late Payment Surcharge: <b>${LatePaymentSurcharge}</b> <br> </h4>`)
    document.write(`<p>Gross Amount Payable (after Due Date): <b>${Gross_Amount_Payable}</b> <br> </p>`)

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');


}


// Chapter 31-34 : Functions
// Q1
function currentDateTime() {

    var date = new Date();
    document.write(date)
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

    // return date;
}




// Q2

function fullName() {

    var fName = prompt("Enter you first Name: ")
    var lName = prompt("Enter you Last Name: ")
    var fullName = fName + " " + lName
    document.write(fullName)

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

    // another method
    // return firstName + " " + LastName;
}

// Q3

function sum() {
    var firstNum = +prompt("Enter you first Number: ")
    var secNum = +prompt("Enter you Last Number: ")

    var Numbers = firstNum + secNum;
    document.write("Sum of two numbers: " + parseInt(Numbers));

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

    // another method
    // return Numbers

}

function calculator(firstNum, secNum) {
    var firstNum = +prompt("Enter you first Number: ")
    var secNum = +prompt("Enter you Last Number: ");
    var operator = prompt("Enter your operator : (+,-,*,/,%")
    if (operator === "+") {

        result = firstNum + secNum;
        document.write("Sum of two number is : " + result)

    }
    else if (operator === "-") {

        result = firstNum - secNum;
        document.write("Subtraction of two number is : " + result)

    }
    else if (operator === "*") {

        result = firstNum * secNum;
        document.write("Multiplication of two number is : " + result)

    }
    else if (operator === "/") {

        result = firstNum / secNum;
        document.write("Divide of two number is : " + Math.round(result))

    }
    else if (operator === "%") {
        result = firstNum % secNum;
        document.write("Reminder of two number is : " + result)

    }
    else {
        document.write("Invalid result")
    }

    // another method
    //  return result;


}

function squares(squareNum) {

    var squareNum = +prompt("Enter a number to find the sqaure of it  : ")

    var findSquare = squareNum * squareNum;

    document.write("Reminder of two number is : " + findSquare)

    // another method
    // return squareNum * squareNum;

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');


}


function factorial() {
    // Factorial of n = n! = n × (n – 1) × (n – 2) × … × 1
    var fact = 1;
    var factorialNumber = +prompt("Enter a number to find the factorical that number : ")
    document.write("Factorial Of " + factorialNumber + " ! <br>")

    // factorial of negative number is not possible 
    if (factorialNumber < 0) {
        document.write("The factorial of the negative number doesnot perform")
    }

    // factorial of 0! = 1
    else if (factorialNumber === 0) {

        document.write("The factorial of 0 is 1")
    }
    else if (factorialNumber >= 1) {
        for (i = 1; i <= factorialNumber; i++) {

            fact *= i;
            document.write(i + " ")

        }
        document.write(" =  " + fact)

    }
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

function counting() {
    document.write("<h1>Countring</h1> <br>================")
    var startNumber = +prompt("Enter a start Number : ");
    var EndNumber = +prompt("Enter a End Number : ");


    for (i = startNumber; i <= EndNumber; i++) {

        document.write(i + "<br>")
    }
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}



function calculateHypotenuse(base, prep) {

    var base = +prompt("Enter a base :")
    var prep = +prompt("Enter a prependicular :")
    var Findbase = base * base;
    var FindPrep = prep * prep;
    var hyp = Math.sqrt(FindPrep + Findbase);
    document.write("Hypotenous of the triangle is : " + hyp)
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}





function area(width, height) {

    var width = +prompt("Enter a width :");
    var height = +prompt("Enter a height :");

    A = width * height;

    document.write("(Argument as variable) Area of the Rectangle is " + A);

    document.write("<br>")

    var area = 45 * 54;
    document.write("(Argument as value) Area of the Rectangle is : " + area)

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}


function palindrome() {


    var text = '';
    var userInput = prompt("Enter a string");

    for (var i = userInput.length - 1; i >= 0; i--) {
        text += userInput[i];
    }

    if (text === userInput) {
        swal("its palindrome");
    }
    else {
        swal("its not palindrome");
    }
}

function titledcase() {

    var userInput = prompt("Enter a word or Letter").toLowerCase();

    document.write("User Input : " + userInput + "<br>")

    document.write("Title case : ")

    var userInput = userInput.split(' ');
    for (i = 0; i < userInput.length; i++) {
        userInput[i] = userInput[i].charAt(0).toUpperCase() + userInput[i].slice(1) + " ";
        document.write(userInput[i])
    }
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');


}

function letterOccurence(strings, character) {

    var strings = prompt("Enter a string :").toLowerCase();
    var character = prompt("Enter a character: ")

    var count = 0;
    for (var i = 0; i < strings.length; i++) {
        if (strings.charAt(i) == character)
            count++;
    }

    document.write("Text : " + strings + "<br>")
    document.write("There are " + count + " occurrence(s) of the word " + character);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');


}

function longestWord(str) {

    var str = prompt("Enter your string : ")
    var splitArrayValue = str.split(' ');

    var storeWord = "";

    for (var i = 0; i < splitArrayValue.length; i++) {
        if (splitArrayValue[i].length > storeWord.length) {
            storeWord = splitArrayValue[i];
        }
    }
    // return storeWord;
    document.write("Actual String is : " + str + "<br>")
    document.write("Longest word in String is : " + storeWord)

}




function CircumferenceAndArea() {

    function Circumference(r) {
        var r = parseFloat(prompt("Enter a radius for Circumference of Cricle : "))
        var coc = 2 * Math.PI * r;
        document.write("Circumference of circle " + coc + "<br>");
    }
    function Area(r) {
        var r = parseFloat(prompt("Enter a radius for Area of circle : "))
        var area = Math.PI * r * r;
        document.write("Area of the circle: " + area);
    }

    Circumference();
    Area();
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');


}




// Chapter  38-42  FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS

// Q1
var result = 1;
function power(a, b) {
    for (i = 1; i <= b; i++) {
        result = result * a;
        // another method 
        // result*=a;
    }
    return result;
}
var p = power(2, 10)
console.log(p)

// Q2

var year = +prompt("Enter year")
if (year % 4 === 0) {
    if (year % 400 === 0) {
        if (year % 100 === 0) {
            console.log(`${year} its leap year`)
        }
        else {
            console.log(`${year} its not leap year becasue not divided by 100`)
        }
    }
    else {
        console.log(`${year} its not leap year becuase not divide by 400`)
    }
}
else {
    console.log(`${year} its not leap year becuase not divided by 4`)
}


// Q3
function side(a, b, c) {
    return a + b + c / 2
}
function area(triSides, a, b, c) {
    return triSides * (triSides - a) * (triSides - b) * (triSides - c)
}
var sideA = +prompt("Enter a side 1")
var sideB = +prompt("Enter a side 2")
var sideC = +prompt("Enter a side 3")



var s = side(sideA, sideB, sideC)
var area = area(s, sideA, sideB, sideC)
console.log(`Area of triangle is : ${area}`)


// Q4
function avg(s1, s2, s3) {
    return (s1 + s2 + s3) / 3
}
function percentage(s1, s2, s3) {

    obtM = s1 + s2 + s3;
    return (obtM / 300) * 100;
}

function main(a, b) {
    // return a,b
    console.log(`Average of the student :  ${Math.round(a)}`)
    console.log(`Percentage of the student :  ${Math.round(b)}`)
}

var m1 = +prompt("Enter marks 1 out of 100")
var m2 = +prompt("Enter marks 2 out of 100")
var m3 = +prompt("Enter marks 3 out of 100")

var a = avg(m1, m2, m3)
var p = percentage(m1, m2, m3)
main(a, p)


// Q5 

function indexOf(str, findIndex) {
    for (i = 0; i < str.length; i++) {
        if (findIndex === str.slice(i, findIndex.length + i)) {
            console.log(i, str.slice(i, findIndex.length + i))
        }
        else {
            console.log(-1)
            break;
        }
    }
}
var str = prompt("Enter a sentence : ")
var Index = prompt("Enter a index word : ")
indexOf(str, Index)



// Q6

function removedVowels(str) {
    var updatedStr = ""
    var vowels = ["a", "e", "i", "o", "u"]
    for (i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) === -1) {
            updatedStr += str[i];
        }
    }
    return updatedStr;
}
userInput = prompt("Enter a sentece for remove vowels : ")
var fun = removedVowels(userInput)
console.log(fun)



// Q7
var count = 0;
function removedVowels(str) {

    var vowels = ["ae", "ea", "ei", "ie", "ia", "ai", "ui", "oa", "ao", "ua", "au"]
    for (i = 0; i < str.length; i++) {
        for (j = 0; j < vowels.length; j++) {
            if (str.slice(i, i + 2) == vowels[j]) {
                count++;
            }
        }
    }
    return count;
}
var str = prompt("Enter your sentence");
console.log(removedVowels(str))




// Q8
function kmToMeter(km) {

    // 1km = 1000 meter
    return km * 1000;
}
function kmToInches(km) {

    // 1km = 39370.0787inches
    return km * 39370.0787;
}

function kmTofeet(km) {

    // 1km = 3280.8399feet
    return km * 3280.8399
}

function kmToCentimeter(km) {

    // 1km = 100000cm

    return km * 100000
}
function KmConversion(m, inches, feet, cm) {

    console.log(`${km} is eqaul to ${m}`)
    console.log(`${km} is eqaul to ${inches}`)
    console.log(`${km} is eqaul to ${feet}`)
    console.log(`${km} is eqaul to ${cm}`)
}
var km = +prompt("Enter kilometer")
var k2cm = kmToCentimeter(km)
var k2inc = kmToInches(km)
var k2m = kmToMeter(km)
var k2f = kmTofeet(km)

KmConversion(k2cm, k2inc, k2f, k2m)




// Q9
function overTime(hours, currentSalary) {
    var nonFractional = Math.floor(hours)
    var overTimeAmount = 12;
    if (hours > 40) {
        return (overTimeAmount * (nonFractional - 40)) + currentSalary;
    }
    else {
        return currentSalary;
    }
}
var hours = +prompt("Enter your hours")
var currentSalary = +prompt("Enter your Current Salary")
console.log(overTime(hours, currentSalary))



// Q10
function denominationsCashier(amount) {
    if (amount > 0) {

        var hund = Math.floor(amount / 100)
        amount = amount % 100;

        var fifty = Math.floor(amount / 50)
        amount = amount % 50;

        var ten = Math.floor(amount / 10)

        console.log(`you will have ${hund} hundred notes ${fifty} fifty notes and ${ten} ten notes`)
    }
    else {
        console.log("Invalid Input");

    }
}
amount = +prompt("Enter a amount to withdraw : ")
denominationsCashier(amount)
