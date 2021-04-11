// Assignment 3

// (Super Bonus, not mandatory). Create a quiz app. (At least 3 questions.) The user should be able to choose one correct out of 4 given answers. If the players guesses correctly the user should get +1 point, and 0 of they guess wrong. At the end of the quiz, console.log() the user score.

// Hint: Questions could be stored in a .json file, along with the available answers.

const methodService = require(`./methods`);

const readlineSync = require('readline-sync');

let score = 0;


resultAllQuestions = methodService.getAllQuestions();
questions = resultAllQuestions.questions;
for (var i = 0; i < questions.length; i++) {
    quiz(questions[i].options, questions[i].question, questions[i].answer);
    console.log('*******************************');
}

function quiz(listOfAnswers, question, answer) {

    let userAnswer = readlineSync.keyInSelect(listOfAnswers, question);

    if (listOfAnswers[userAnswer] === answer) {
        score++;
        console.log("Correct answer!")
    } else {
        console.log("Incorrect answer!")
    }
   
}
console.log("Final score: ", score)