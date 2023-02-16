// import generateMarkdown from './generateMarkdown';
const inquirer = require("inquirer");
let meResults = "test";

// fs is a Node standard library package for reading and writing files
const fs = require("fs");

// fs.writeFile('README.md', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );

//   fs.writeFile('README.md', getData((err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log('Success!');
//     }
//   }));

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title project?",
      name: "projectTitle",
    },
    {
      type: "input",
      message: "Enter a project description",
      name: "projectDescription",
      id: "descriptionSection"
    },
    {
      type: "checkbox",
      message: "Which sections do you want to include in the table of contents?",
      name: "tableOfContents",
      choices: [
        {
          name: "Installation",
          id:"installation"
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
  ])
  .then((response) => {
    meResults = response;
    const selectedChoices = response.tableOfContents;
    console.log(typeof selectedChoices);
    console.log(`Selected choices: ${selectedChoices.join(', ')}`);
    console.log(meResults);

    for (let i = 0; i < selectedChoices.length; i++) {
      const element = selectedChoices[i];
      console.log(element);

      let tableContents  = `${element}`
      console.log(tableContents);
    }


    const readmeContent = `# ${meResults.projectTitle}\n\n## Description\n\n${meResults.projectDescription}\n\n# Table of Contents\n\n| Section    | URL     |`;

    fs.appendFile("README.md", readmeContent, function (err) {
      if (err) throw err;
      console.log("README file created successfully!");
    });
  });

//   console.log(meResults);
