// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        name: "github",
        message: "What's your Github username?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerAnswers) => {
        console.log("Please Wait While Creating File...");
        writeToFile(".README.md", generateMarkdown({ ...inquirerAnswers}));
    })
}

// Function call to initialize app
init();
