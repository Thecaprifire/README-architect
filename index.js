// TODO: Include packages needed for this application
const { prompt } = require('inquirer');
const { writeFile } = require('fs');
const { promisify } = require('util');

// TODO: Create an array of questions for user input
const questions = require('./library/questions');

// TODO: Create a template
const generateREADME = require('./library/template');

// TODO: Create a function to write README file
const writeFileAsync = promisify(writeFile);

console.log('Welcome to Github README generator!');

// TODO: Create a function to prompt user questions
function promptUser() {
    return prompt(questions);
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await promptUser();
        console.log(JSON.stringify(answers, null, '\t'));

        const readme = generateREADME(answers);
        await writeFileAsync('README.md', readme);

        console.log('Successfully wrote to README.md');
    } catch (err) {
        console.error(err);
    }
}

// Function call to initialize app
init();