// console.log('Hello Project');

// Activty 1: Calculate the sum of 2 numbers and display it in the terminal
let num1 = 3
let num2 = 2
let num3 = 4
let sum = num2 + num1 
// console.log('sum is', sum);

{/*
    Activity 2:
    Calculate the sum of a list of 5 scores (which are integers) and output
    'Well done! Your total score was <totalScore>' if the sum
    is over 200 else, output 'Good try. Your total score was <totalScore>'
*/}
const scores = [25, 12, 15, 5, 2]
let totalScore = 0

for (let position = 0; position < 5; position = position + 1) {
    totalScore = totalScore + scores[position]
    // console.log('Total score', totalScore, position);
}

if (totalScore > 200) {
    console.log('Well Done! Your total score is', totalScore);  
} else {
    console.log('Good try. Your total score is', totalScore);
}

{/* 
    Activity 3:
    Calculate and print the square of all even numbers between 8 and 64
*/}
for (let numbers = 8; numbers < 65; numbers = numbers + 2) {
    let square = numbers * numbers
    console.log('The square is', square)
}

{/* 
    Activity 4:
    Write a function that accepts an integer as a parameter that represents the time of day (between 0 & 23)
    and display 'Good morning Beautiful' if time is between 0 & 12, 'Good afternoon' if time 
    is between 13 & 15, Good evening if time is between 16 and 19, and ''Good night gorgeous' if time is
    between 20 and 23.
*/}

function showGreeting (time) {
    if (time >= 0 && time <= 12) {
        console.log('Good morning Beautiful')
    } else if (time >= 13 && time <= 15) {
        console.log('Good afternoon')
    } else if (time >= 16 && time <= 19) {
        console.log('Good evening')
    } else if (time >= 20 && time <= 23) {
        console.log('Good night gorgeous')
    } else {
        console.log('Sorry mi G') 
    }   
}

showGreeting(24)

{/*
 Activity 5:
    Write a function that accepts an integer as a parameter that represents the time of day (between 0 & 23)
    and returns 'Good morning Beautiful' if time is between 0 & 12, 'Good afternoon' if time 
    is between 13 & 15, Good evening if time is between 16 and 19, and ''Good night gorgeous' if time is
    between 20 and 23.
*/}

function getGreeting (time) {
    if (time >= 0 && time <= 12) {
        return 'Good morning Beautiful'
    } else if (time >= 13 && time <= 15) {
        return 'Good afternoon'
    } else if (time >= 16 && time <= 19) {
        return 'Good evening'
    } else if (time >= 20 && time <= 23) {
        return 'Good night gorgeous'
    } else {
        return 'Sorry mi G'
    }
}

let greeting = getGreeting(12)
 
function getGreeting2 (time) {
    let greeting = ''
    
    if (time >= 0 && time <= 12) {
       greeting = 'Good morning Beautiful'
    } else if (time >= 13 && time <= 15) {
        greeting = 'Good afternoon'
    } else if (time >= 16 && time <= 19) {
       greeting = 'Good evening'
    } else if (time >= 20 && time <= 23) {
       greeting =  'Good night gorgeous'
    } else {
        greeting = 'Sorry mi G'
    }

    return greeting 
}

let greeting2 = getGreeting2(4)
console.log(greeting2)

{/*
 Activity 6:
    Write a function that accepts an array of integers as its only argument and calculates
    their sum. If the sum is over 200, then the function should return 'Well done! Your total score was <totalScore>' 
    else, return 'Good try. Your total score was <totalScore>'.

    Call the function and print out the value of sum to the screen.

    Note: Based on Activity 2
*/}

