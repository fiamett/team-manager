const employee = require("./employee");

class manager extends employee{
    constructor(name,id,email,offNum){
        super(name,id,email,'manager')
        this.offNum = offNum
    }
}

module.exports = manager