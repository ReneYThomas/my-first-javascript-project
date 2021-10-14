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

for (let position = 0; position < scores.length; position = position + 1) {
    totalScore = totalScore + scores[position]
    // console.log('Total score', totalScore, position);
}

if (totalScore > 200) {
    console.log('Well Done! Your total score is', totalScore);  
} else {
    console.log('Good try. Your total score is', totalScore);
}