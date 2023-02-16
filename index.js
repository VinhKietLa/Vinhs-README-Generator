// fs is a Node standard library package for reading and writing files
const fs = require('fs');


fs.writeFile('README.md', process.argv[2], (err) =>
  err ? console.error(err) : console.log('Success!')
);