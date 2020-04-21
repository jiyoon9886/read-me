const inquirer = require("inquirer");
const fs = require("fs");

//need inquirer for user input


const questions = [
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
      },
      
    {
        type: "input",
        message: "What is your GitHub email?",
        name: "email"
      },

    {
        type: "input",
        message: "What is your project title?",
        name: "projectTitle"
      },
    {
        type: "input",
        message: "Write a short description of your project.",
        name: "description"
      },

    {
        type: "rawList",
        message: "What would you like in your table of contents?",
        name: "contents"
      },

    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation"
      },

    {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "usage"
      },

    {
        type: "input",
        message: "Input licensing information:",
        name: "license"
      },

    {
        type: "input",
        message: "Are there any contributors?",
        name: "contributors"
      },

    {
        type: "input",
        message: "Include any tests:",
        name: "tests"
      },

      
];

//Expected output from GitHub API:
    //email and profile image

function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) => console.log(err))
    //generate a file 
    //populate with data 
    
}


function init() {
    //use inquirer on our array
    inquirer.prompt(questions)
    .then(response => console.log(response))
    //once we get our responses use .then and writeToFile

}

init();