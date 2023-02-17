import inquirer from "inquirer"; //Importing inquirer
import fs from "fs/promises"; // Importing FR 

//The inquirer returns an object and we can use destructuring to access the object key and values//
let {
  projectTitle,
  projectDescription,
  tableOfContents,
  projectInstallation,
  projectUsage,
  projectLicense,
  projectContribution,
  projectTest,
  projectQuestionGithub,
  projectQuestionEmail
} = await inquirer.prompt([
  {
    type: "input",
    message: "What is your project called?",
    name: "projectTitle",
    validate: (projectTitle) => {
      if (projectTitle) {
        return true;
      } else {
        console.log("Please enter a project title.");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Provide a summary of what your project is about?",
    name: "projectDescription",
    validate: (projectDescription) => {
      if (projectDescription) {
        return true;
      } else {
        console.log("Please enter a project description.");
        return false;
      }
    },
  },
  {
    type: "checkbox",
    message: "Which sections do you want to include in the table of contents?",
    name: "tableOfContents",
    choices: [
      {
        name: "installation",
      },
      {
        name: "usage",
      },
      {
        name: "license",
      },
      {
        name: "contributing",
      },
      {
        name: "tests",
      },
      {
        name: "questions",
      },
    ],
  },
  {
    type: "input",
    message: "Provide instructions on how to install and set up the project.",
    name: "projectInstallation",
  },
  {
    type: "input",
    message: "Explain how to use the product",
    name: "projectUsage",
  },
  {
    type: "input",
    message: "Explain how to contribute to the project",
    name: "projectContribution",
  },
  {
    type: "input",
    message: "Explain how to run any tests for the project",
    name: "projectTest",
  },
  {
    type: "list",
    message: "Choose a license for your project:",
    name: "projectLicense",
    choices: ["MIT License", "Apache License 2.0", "ISC", "MOZILLA"],
  },
  {
    type: "input",
    message: "What's your Github Username?",
    name: "projectQuestionGithub",
  },
  {
    type: 'input',
    name: 'projectQuestionEmail',
    message: 'What is your email address?',
    validate: function (value) {//This function validates that the users input is an email address.
      const pass = value.match(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ // email address regular expression
      );
      if (pass) {
        return true;
      }
      return 'Please enter a valid email address';//This message is printed if a valid email is not provided.
    },
  },
]);

//This switch statement starts with an empty string and uses the license selection as the parameter// 
let licenseBadge = "";
switch (projectLicense) {
  case "MIT License":
    licenseBadge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    break;
  case "Apache License 2.0":
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)";
    break;
  case "ISC":
    licenseBadge =
      "[![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    break;
  case "Mozilla":
    licenseBadge =
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    break;
}

let tableText = '';

tableOfContents.forEach(element => {
  // t += '- '+ '#' + element;
  tableText += `- [${element}](#${element})\n`
});


//This variable is what we will use to create the README taking value taken from the keys in the response//
let readMe = `# ${projectTitle}\n\n**License**\n\nThis application is covered under the ${projectLicense}\n\n${licenseBadge}\n\n## Table Contents\n\n${tableText}\n\n## Description\n\n${projectDescription}\n\n## Installation\n\n${projectInstallation}\n\n## Usage\n\n${projectUsage}\n\n## Contributing\n\n${projectContribution}\n\n## Tests\n\n${projectTest}\n\n## Questions\n\nGithub Username: ${projectQuestionGithub}. A direct link to my Github profile is available here [link](https://github.com/${projectQuestionGithub})\nMy email is ${projectQuestionEmail}, feel free to drop me an email with any questions you have :)
`;

//This function writes creates the "README.md" file using the contents from the readme variable
await fs.writeFile("README.md", readMe);

console.log('Thank you, the application has finished :)')

//   console.log("Project Title:", projectTitle);
//   console.log("Project Description:", projectDescription);
  // console.log("Table Contents:", tableOfContents);


// console.log(tableContent);

// tableOfContents.forEach(element => {
//    let t = '- '+ '#' + element;
//    console.log(t);
// });
