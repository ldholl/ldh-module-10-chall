const Employee = require('./Employee');


class Engineer extends Employee {
    constructor(name, id, email){
        super(name, id, email);
    }

    getGitHub (info){
        this.github = info
    }

    getRole(){
        this.role = 'Engineer'
    }
}




module.exports = Engineer