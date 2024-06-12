// Array of questions for user input
const questions = [
	{
		// Question for the author's full name
		type: 'input',
		message: 'Enter your FULL Name',
		name: 'authorName',
		// Validate the input to ensure it matches a pattern for full names
		validate: function(name) {
			let pass = name.match(/^[a-zA-Z]+ [a-zA-Z]+$/g);
			if (pass) {
				return true;
			}
			return 'Please enter a valid FULL Name.';
		},
	},
	{
		// Question for the author's email
		type: 'input',
		message: 'Enter your email',
		name: 'email',
		// Validate the input to ensure it matches a basic email pattern
		validate: function(email) {
			let pass = email.match(/\S+@\S+\.\S+/g);
			if (pass) {
				return true;
			}
			return 'Please enter a valid email.';
		},
	},
	{
		// Question for the author's GitHub username
		type: 'input',
		message: 'Enter your Github Username',
		name: 'username',
		// Validate the input to ensure it is not empty
		validate: function(username) {
			if (username) {
				return true;
			}
			return 'It is required to enter your Github Username.';
		},
	},
	{
		// Question for the GitHub repository name
		type: 'input',
		message: 'Enter your Project Github Repository name (* Be sure your input is the SAME as your repository name on Github.)',
		name: 'repoName',
		// Validate the input to ensure it is not empty
		validate: function(reponame) {
			if (reponame) {
				return true;
			}
			return 'It is required to enter your Github Project Repository name.';
		},
	},
	{
		// Confirmation if additional project links will be provided
		type: 'confirm',
		name: 'isLinks',
		message: 'Besides the project repo link, would you like to add additional project link(s)?',
		default: false,
	},
	{
		// Question for additional project links if the user opted to provide them
		type: 'input',
		name: 'projectLinks',
		message: 'Enter the additional project link(s) using the entire link, including the http(s):. (* Use comma "," to separate each link)',
		// Display this question only if the user answered 'yes' to adding additional links
		when: function(answers) {
			return answers.isLinks !== false;
		},
		// Validate each provided link to ensure it matches a URL pattern
		validate: function(projectLinks) {
			for (let i = 0; i < projectLinks.split(',').length; i++) {
				let pass = projectLinks.split(',')[i].trim().match(/^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$/g);
				if (pass) {
					return true;
				}
			}
			return 'Provide the valid links of the project using the entire link, including the http(s):';
		},
	},
	{
		// Question for the project title
		type: 'input',
		message: 'Enter your Project Title',
		name: 'title',
		// Validate the input to ensure it is not empty
		validate: function(title) {
			if (title) {
				return true;
			}
			return 'A professional README has a Project Title.';
		},
	},
	{
		// Confirmation if screenshots or demo will be added
		type: 'confirm',
		name: 'screenshots',
		message: 'Would you like to add screenshots or demo to README?',
		default: false,
	},
	{
		// Question for image paths or URLs if the user opted to provide screenshots or demo
		type: 'input',
		name: 'imageURL',
		message: 'Enter the image paths or URLs of the screenshots or demo. (* Use comma "," to separate each path or url)',
		// Display this question only if the user answered 'yes' to adding screenshots or demo
		when: function(answers) {
			return answers.screenshots !== false;
		},
		// Validate the input to ensure it is not empty
		validate: function(imageURL) {
			if (imageURL) {
				return true;
			}
			return 'Provide the image paths or URLs of the screenshots or demo.';
		},
	},
	{
		// Question for the project description
		type: 'input',
		message: 'What is your Project Description?',
		name: 'description',
		// Validate the input to ensure it is not empty
		validate: function(description) {
			if (description) {
				return true;
			}
			return 'A professional README provides the Project Description.';
		},
	},
	{
		// Question for the steps required to install the project
		type: 'input',
		message: 'What are the steps required to install your project?',
		name: 'installation',
		// Validate the input to ensure it is not empty
		validate: function(install) {
			if (install) {
				return true;
			}
			return 'A professional README provides steps on how to install the project.';
		},
	},
	{
		// Question for instructions on how to use the project
		type: 'input',
		message: 'Provide instructions on how to use your project',
		name: 'usage',
		// Validate the input to ensure it is not empty
		validate: function(use) {
			if (use) {
				return true;
			}
			return 'A professional README provides instructions on how to use the project.';
		},
	},
	{
		// Question for the contributing guidelines
		type: 'input',
		message: 'Enter the contributing guidelines for your project.',
		name: 'contributing',
		// Validate the input to ensure it is not empty
		validate: function(contributing) {
			if (contributing) {
				return true;
			}
			return 'Not possible! Think again.';
		},
	},
	{
		// Question for how to test the project
		type: 'input',
		message: 'How do you test your project?',
		name: 'test',
		// Provide a default value for testing instructions
		default: 'npm test'
	},
	{
		// Question for selecting a license for the project
		type: 'list',
		message: 'Please select a License for your project.',
		name: 'license',
		// List of available licenses to choose from
		choices: [
			{
				name: 'MIT',
				value: 'mit',
			},
			{
				name: 'GNU GPLv3',
				value: 'gpl-3.0',
			},
			{
				name: 'GNU AGPLv3',
				value: 'agpl-3.0',
			},
			{
				name: 'GNU LGPLv3',
				value: 'lgpl-3.0',
			},
			{
				name: 'APACHE 2.0',
				value: 'apache-2.0',
			},
			{
				name: 'Mozilla Public 2.0',
				value: 'mpl-2.0',
			},
			{
				name: 'The Unlicense',
				value: 'unlicense',
			},
			{
				name: 'Boost Software 1.0',
				value: 'bsl-1.0',
			},
		],
	},
];

// Export the questions array for use in other modules
module.exports = questions;