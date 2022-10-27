const inquirer = require("inquirer");
const employee = require("./lib/employee");
const manager = require("./src/manager")
const engineer = require("./src/engineer")
const intern = require("./src/intern")

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });