// Include packages needed for this application
const { prompt } = require('inquirer');
const { writeFile } = require('fs');
const { promisify } = require('util');

// Create an array of questions for user input
const questions = require('./library/questions');

// Import the template generator function
const generateREADME = require('./library/template');

// Promisify the writeFile function to use async/await syntax
const writeFileAsync = promisify(writeFile);

// Welcome message for the user
console.log('Welcome to Github README generator!');

// Function to prompt user with questions
function promptUser() {
    // Use inquirer to prompt questions and return the answers
    return prompt(questions);
}

// Function to initialize the app
async function init() {
    try {
        // Prompt the user and wait for answers
        const answers = await promptUser();

        // Log the answers for debugging purposes
        console.log(JSON.stringify(answers, null, '\t'));

        // Generate the README content using the user's answers
        const readme = generateREADME(answers);

        // Write the generated README content to a file
        await writeFileAsync('README.md', readme);

        // Log success message
        console.log('Successfully wrote to README.md');
    } catch (err) {
        // Log any errors that occur during the process
        console.error(err);
    }
}

// Call the init function to start the app
init();