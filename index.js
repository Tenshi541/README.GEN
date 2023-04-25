const inquirer = require('inquirer');
const fs = require('fs');
function generateBadge(license) { // here license can be apache, bsd, or cc
  switch (license) {
    case "apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "bsd":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";



    case "cc":
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
  }
}
function generateQuestions(){

  return'https://github.com/'
}

function generateTOC() {

  return `Installation(#installation),
Usage(#Usage),
License(#license)
  
  
  `;
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your app\'s title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is your app\'s description?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What is your app\'s installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is your app\'s usage instrctions?',
    },

    {
      type: 'list',
      message: 'What is your apps license?',
      name: 'license',
      choices: ['apache', 'bsd', 'cc'],
    },
    {
      type: 'input',
      message: 'who contributed?',
      name: 'contributions',
    },
    { 
      type:'input',
      message:'Enter Github Username',
      name: 'Questions',

  },
  ])
  .then((data) => {
    const filename = "README_OUTPUT.MD"
    let markdown = `${generateBadge(data.license)}

# ${data.title}

## Description
${data.description}

## Table of Contents
${generateTOC()}

## Installation

## Usage

# License

## Contributing 

## Questions
  ${generateQuestions()}
  
## License
This app is covered by this License ${generateBadge(data.license)}
    
    `
    fs.writeFile(filename, markdown, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

