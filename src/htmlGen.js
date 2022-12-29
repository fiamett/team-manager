const fs = require("fs");

const genny = {
  start: (file) => {
    fs.appendFile(
      file,
      `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>Document</title>
      </head>
      <body>
        <ul class="d-inline-flex list-unstyled">`,
      (err) => (err ? console.error(err) : console.log(" "))
    );
  },
  end: (file) => {
    fs.appendFile(
      file,
      `
        </ul>
      </body>
      </html>`,
      (err) => (err ? console.error(err) : console.log("end made"))
    );
  },
  intern: ({ name, role, id, email, school }, file) => {
    fs.appendFile(
      file,
      `
        <li class="mx-3">
          <h2>${name}</h2>
          <sub>${role}</sub>
          <ul class="list-unstyled">
            <li>Id: ${id}</li>
            <li>Email: <a href=mailto:https://${email}> ${email}</a></li>
            <li>School: ${school}</li>
          </ul>
        </li>`,
      (err) => (err ? console.error(err) : console.log("intern added"))
    );
  },
  engineer: ({ name, role, id, email, github }, file) => {
    fs.appendFile(
      file,
      `
        <li class="mx-3">
          <h2>${name}</h2>
          <sub>${role}</sub>
          <ul class="list-unstyled">
            <li>Id: ${id}</li>
            <li>Email: <a href=mailto:https://${email}> ${email}</a></li>
            <li>Github: <a href=https://github.com/${github}>https://github.com/${github}</a></li>
          </ul>
        </li>`,
      (err) => (err ? console.error(err) : console.log("engineer added"))
    );
  },
  manager: ({ name, role, id, email, offNum }, file) => {
    fs.appendFile(
      file,
      `
        <li class="mx-3">
          <h2>${name}</h2>
          <sub>${role}</sub>
          <ul class="list-unstyled">
            <li>Id: ${id}</li>
            <li>Email: <a href=mailto:https://${email}> ${email}</a></li>
            <li>Office number: ${offNum}</li>
          </ul>
        </li>`,
      (err) => (err ? console.error(err) : console.log("manager added"))
    );
  },
};

module.exports = genny;
