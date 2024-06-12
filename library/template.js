// Get the current year
let year = new Date().getFullYear();

// Function to create a README template
function generateREADME(answers) {
	// Set additional project links
	let additionalProjectLinks = '';

	// Check if the user provided any additional project links
	if (answers.projectLinks) {
		// Join the links using <br> for line breaks in Markdown
		additionalProjectLinks = answers.projectLinks.split(',').join('<br>');
	}

	// Set screenshots template according to the user's input
	let screenshots = '';

	// Check if the user provided any image URLs for screenshots or demo
	if (answers.imageURL) {
		// Iterate over the provided URLs and format them for Markdown
		for (let i = 0; i < answers.imageURL.split(',').length; i++) {
			screenshots += `<kbd>![screenshot-demo${i + 1}](${answers.imageURL.split(',')[i].trim()})</kbd>`;
		}
	}

	// Main README structure
	return ` 
  # ${answers.title.toUpperCase()}

  [![github-follow](https://img.shields.io/github/followers/${answers.username
      .trim()
      .toLowerCase()}?label=Follow&logoColor=purple&style=social)](https://github.com/${answers.username.trim().toLowerCase()})
  [![license](https://img.shields.io/badge/License-${answers.license
      .toUpperCase()
      .split('-')
      .join('v')}-brightgreen.svg)](https://choosealicense.com/licenses/${answers.license}/)

  ## Table of Contents
  * [Description](#description)
  * [Project Links](#project-links)
  * [Screenshots-Demo](#screenshots-demo)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  #

  ## Description
  ${answers.description}

  ## Project Links
  https://github.com/${answers.username.trim().toLowerCase()}/${answers.repoName.trim()}<br>
  ${additionalProjectLinks}

  ## Screenshots-Demo
  ${screenshots}
  
  ## Installation
  ${answers.installation}

  ## Usage 
  ${answers.usage}
  
  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.test}

  ## Questions
  Contact the author with any questions!<br>
  Github link: [${answers.username
		.trim()
		.toLowerCase()}](https://github.com/${answers.username.trim().toLowerCase()})<br>
  Email: ${answers.email}

  ## License
  This project is [${answers.license.toUpperCase()}](https://choosealicense.com/licenses/${answers.license}/) licensed.<br />

  Copyright © ${year} [${answers.authorName.trim().toUpperCase()}](https://github.com/${answers.username.trim().toLowerCase()})
  
  <hr>
  <p align='center'><i>
  Here’s to your coding journey! 🎉 ${answers.authorName.trim().toUpperCase()}
  </i></p>
  `;
}

// Export the generateREADME function for use in other modules
module.exports = generateREADME;