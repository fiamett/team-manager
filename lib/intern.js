const employee = require("./employee");
const fs = require("fs");

class intern extends employee {
  constructor(name, id, email, school) {
    super(name, id, email, "intern");
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return 'intern'
  }
}

module.exports = intern;
