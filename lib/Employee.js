
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getRole(){
        this.role = 'Employee'
    }
}


module.exports = Employee;