// packages needed for this application
const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('./lib/shapes.js'); 
const fs = require('fs');

// svg class, constructor includes methods for rendering text and shape elements
class SVG {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    } 
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text, color) {
        this.textElement = `<text x = '150' y = '125' font-size = '60' text-anchor = 'middle' fill = '${color}'>${text}</text>`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    }
}

// array of questions that gather content for generated svg file
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        err ? console.error(err) : console.log('Generated logo.svg!');
    });
}
 
// async function that initializes app
async function init() {
    const svgFile = 'logo.svg';
    let svgString = '';

    // calls questions
    const choices = await inquirer.prompt(questions);

    // handles text
    let logoText = '';
    if(choices.text.length > 0 && choices.text.length < 4) {
        logoText = choices.text;
    } else {
        console.log('Invalid response. Please ensure your text is three letters long!');
        return;
    }

    // handles text color
    let logoFontColor = choices['textColor'];

    // handles shape type
     let logoShapeType = choices.shape;

    // handles shape color
    let logoShapeColor = choices['shapeColor'];

    // handles shape
    let logoShape;
    if(logoShapeType === 'Circle'|| logoShapeType === 'circle') {
        logoShape = new Circle();
    } else if(logoShapeType === 'Triangle' || logoShapeType === 'triangle') {
        logoShape = new Triangle();
    } else if(logoShapeType === 'Square' || logoShapeType === 'square') {
        logoShape = new Square();
    } else {
        console.log('Invalid shape!');
    }

    // applies logo color
    logoShape.colorChoice(logoShapeColor);

    // console logs to check user inputs
    console.log('Your text: ' + logoText);
    console.log('Your text color: ' + logoFontColor);
    console.log('Your logo shape: ' + logoShapeType);
    console.log('Your logo color: ' + logoShapeColor);

    // creates the new svg shape and applies the above elements to it
    let svg = new SVG();
    svg.setTextElement(logoText, logoFontColor);
    svg.setShapeElement(logoShape);
    svgString = svg.render();

    // prints shape to log and calls writeToFile function
    console.log('Your logo code: ' + svgString);
    writeToFile(svgFile, svgString);
}

// calls function that initializes app
init();
