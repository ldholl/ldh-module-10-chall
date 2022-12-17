const inquirer = require('inquirer');
const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email){
        super(name, id, email);
    }

    getOffice(officeNumber){
        this.officeNumber = officeNumber
        
    }

    getRole(){
        this.role = 'Manager'
    }
}



module.exports = Manager;