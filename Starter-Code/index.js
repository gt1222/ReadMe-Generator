// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description for your project",
    },
    {
        type: "input",
        name: "installation",
        message: "Enter instructions for installation",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information",
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter contribution guidelines",
    },
    {
        type: "input",
        name: "test",
        message: "Enter any test instructions",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project",
        choices: ["None", "Apache2.0", "Boost Software License 1.0", "GNU GPL v3", "MIT License", "Mozilla Public License 2.0", "The Unilicense"],
    },
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.log(err) : console.log("Success! Your ReadMe File has been generated"))
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
