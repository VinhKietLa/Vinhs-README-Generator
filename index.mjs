import inquirer from "inquirer";
import fs from "fs/promises";

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
  projectQuestion
} = await inquirer.prompt([
  {
    type: "input",
    message: "What is your project called??",
    name: "projectTitle",
  },
  {
    type: "input",
    message: "Provide a summary of what your project is about, what it does and why it's useful.",
    name: "projectDescription",
  },
  {
    type: "checkbox",
    message: "Which sections do you want to include in the table of contents?",
    name: "tableOfContents",
    choices: [
      {
        name: "Installation",
      },
      {
        name: "Usage",
      },
      {
        name: "License",
      },
      {
        name: "Contributing",
      },
      {
        name: "Tests",
      },
      {
        name: "Questions",
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
    type: "list",
    message: "Choose a license for your project:",
    name: "projectLicense",
    choices: ["MIT License", "Apache License 2.0", "ISC", "MOZILLA"],
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
    type: "input",
    message: "Provide information on how to get support for your project",
    name: "projectQuestion",
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

//This variable is what we will use to create the README taking value taken from the keys in the response//
let readMe = `# ${projectTitle}\n\n**License**\n\nThis application is covered under the ${projectLicense}\n${licenseBadge}\n\n## Description\n\n${projectDescription}\n\n## Installation\n\n${projectInstallation}\n\n## Usage\n\n${projectUsage}\n\n## Contributing\n\n${projectContribution}\n\n## Tests\n\n${projectTest}\n\n## Questions\n\n${projectQuestion}`;

//This function writes creates the "README.md" file using the contents from the readme variable
await fs.writeFile("README.md", readMe);

//   console.log("Project Title:", projectTitle);
//   console.log("Project Description:", projectDescription);
//   console.log("Table Contents:", tableOfContents);
