const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email){
        super(name, id, email);
    }

    getSchool (school){
        this.school = school;
    }

    getRole(){
        this.role = 'Intern'
    }
}


module.exports = Intern;