// packages needed for this application
const inquirer = require('inquirer');
//const generateSVG = require('./utils/generateSVG.js'); 
const fs = require('fs');

// array of questions that gather content for generated README file
const questions = [
    {
        type: 'input',
        message: 'What text would you like your logo to display? Enter up to three characters.',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color would you like your text to be? Enter a keyword or a hexadecimal number.',
        name: 'textColor',
    },
    {
        type: 'list',
        message:'What shape would you like your logo to be?',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        message: 'What color would you like your logo to be? Enter a keyword or a hexadecimal number.',
        name: 'shapeColor',
    },
];

// function that writes README file
function writeToFile(response) {
    const fileName = 'logo.svg';

    fs.writeFile(fileName, response, function (err) {
        err ? console.error(err) : console.log('Generated logo.svg!')
    });
}
 
// function that initializes app
function init() {
    inquirer.prompt(questions)
    .then (response => writeToFile(generateMarkdown(response)));
}

// calls function that initializes app
init();
