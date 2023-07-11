// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please provide a concise description of your project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please provide any installation instructions required to run your program.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'If there is any required usage information, please provide it here.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Are there any contribution guidelines you wish to include? If so, provide them here.',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'If there is any test information that is needed for your project, please provide it here.',
            name: 'test',
        },
        {
            type: 'checkbox',
            message: 'What licenses do you require for this project?',
            name: 'license',
            choices: ['Apache License 2.0', 'GNU v3.0', 'MIT', 'BSD 2', 'BSD 3', 'Boost Software 1.0', 'Creative Commons Zero v1.0', 'Eclipse Public 2.0', 'GNU Affero v3.0', 'GNU v2.0', 'GNU Lesser v2.1', 'Mozilla Public 2.0', 'The Unilicense'],
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },

    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
