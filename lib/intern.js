const employee = require("./employee");

class intern extends employee{
    constructor(name,id,email,school){
        super(name,id,email,'intern')
        this.school = school
    }
    getSchool(){
        return this.school;
    }
}

module.exports = intern;