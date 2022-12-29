const employee = require("./employee");
const fs = require("fs");

class engineer extends employee {
  constructor(name, id, email, github) {
    super(name, id, email, "engineer");
    this.github = github;
  }
  getGit() {
    return this.github;
  }
  getRole() {
    return 'engineer';
  }
}

module.exports = engineer;
