const inquirer = require('inquirer');
const fs = require('fs');

// Function to generate the Markdown content based on user responses
function generateMarkdown(response) {
  return `# ${response.title}

## Description
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## Contributions
${response.contributions}

## Test
${response.test}

## License
${response.license.join(', ')}

## Contact
GitHub: ${response.username}
Email: ${response.email}
`;
}

// Function to write the README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log(`Successfully generated ${fileName}!`);
    }
  });
}

// Function to initialize the application
function init() {
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
    .then((response) => {
      const markdown = generateMarkdown(response);
      const fileName = 'README.md'; // Changed the output file name to README.md
      writeToFile(fileName, markdown);
    })
    .catch((error) => {
      console.error('Error occurred:', error);
    });
}

// Function call to initialize the app
init();



