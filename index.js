const inquirer = require("inquirer");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const htmlGen = require("./src/htmlGen");

var log = [];
var promises =[]
var name;

function start() {
  log = [];
  name = "";

  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "name of the page? (no .html needed)",
      },
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "email",
        message: "what is your email",
      },
      {
        type: "input",
        name: "id",
        message: "id number?",
      },
      {
        type: "input",
        name: "offNum",
        message: "offNum?",
      },
    ])
    .then((answers) => {
      name = "./dist/" + answers.name + ".html";
      log.push(
        new manager(answers.name, answers.id, answers.email, answers.offNum)
      );
      htmlGen.start(name)
      ask();
    });
}
//starter names of the to be created file and manager information

function ask() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is your role?",
        choices: ["engineer", "intern"],
      },
    ])
    .then((answers) => {
      roleAsk(answers);
    });
}
//asks what role to make the employee

function roleAsk(response) {
  console.log(response);
  switch (response.role) {
    case "engineer":
      inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: "What is your name?",
          },
          {
            type: "input",
            name: "email",
            message: "what is your email",
          },
          {
            type: "input",
            name: "id",
            message: "id number?",
          },
          {
            type: "input",
            name: "github",
            message: "Github? (username only)",
          },
        ])
        .then((answers) => {
          log.push(
            new engineer(
              answers.name,answers.id,answers.email,answers.github)
          );
          another();
        });
      break;
    case "intern":
      inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: "What is your name?",
          },
          {
            type: "input",
            name: "email",
            message: "what is your email",
          },
          {
            type: "input",
            name: "id",
            message: "id number?",
          },
          {
            type: "input",
            name: "school",
            message: "School?",
          },
        ])
        .then((answers) => {
          log.push(
            new intern(answers.name, answers.id, answers.email, answers.school)
          );
          another();
        });
      break;
  }
}
//asks relevant questions corresponding to chosen role

function another() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "next",
        message: "what next?",
        choices: ["add another", "save and new", "done"],
      },
    ])
    .then((answers) => {
      switch (answers.next) {
        case "add another":
          ask();
          break;
        case "save and new":
          createHtml();
          start();
          break;
        case "done":
          createHtml();
          break;
      }
    });
}
//ask if you want to continue the current file/end and make a new file/finish current file

function createHtml() {
  for (var i = 0; i < log.length; i++) {
    switch (log[i].role) {
      case "intern":
        promises.push(htmlGen.intern(log[i], name));
        break;
      case "engineer":
        promises.push(htmlGen.engineer(log[i], name));
        break;
      case "manager":
        promises.push(htmlGen.manager(log[i], name));
        break;
    }
  }
  Promise.all(promises).then(()=>{htmlGen.end(name)})
  console.log('added '+i+' employees');
}
//creates html from the given answers

start();
