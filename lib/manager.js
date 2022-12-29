const employee = require("./employee");
const fs = require("fs");

class manager extends employee {
  constructor(name, id, email, offNum) {
    super(name, id, email, "manager");
    this.offNum = offNum;
  }
  getOffNum() {
    return this.offNum;
  }
  getRole() {
    return 'manager';
  }
}

module.exports = manager;
