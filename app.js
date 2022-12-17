const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

const fs = require('fs')
const inquirer = require('inquirer')

let employeeArray = [];
let cards = ''


const promptInputs = function (){

inquirer
    .prompt([
        {
            name: 'managerName',
            type: 'input',
            message: "What is the manager's name?"
        },
        {
            name: 'managerId',
            type: 'input',
            message: "What is the manager's ID number?"
        },
        {
            name: 'managerEmail',
            type: 'input',
            message: "What is the manager's email?"
        },
        {
            name: 'managerOffice',
            type: 'input',
            message: "What is the manager's office number?"
        }
    ])
    .then(( answers ) => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail)
        manager.getOffice(answers.managerOffice);
        manager.getRole();
        employeeArray.push(manager)
        console.log(employeeArray)
        confirmAdd()
    })
}

const confirmAdd = function(){
    inquirer
    .prompt([
        {
            name: 'confirmAdd',
            type: 'confirm',
            message: 'Would you like to add another team member'
        }
    ])
    .then(( {confirmAdd}) => {
        if(confirmAdd === true){
            nextMember()
        }
        else{
            getMembers();
            generatePage();
        }
    })
}


const nextMember = function(){
console.log('adding member')
inquirer
.prompt([
    {
        name: 'employeeType',
        type: 'list',
        choices: ['Engineer', 'Intern'],
        message: "What is the team member's role?"
    },
    {
        name: 'employeeName',
        type: 'input',
        message: "What is the employee's name?"
    },
    {
        name: 'employeeId',
        type: 'input',
        message: "What is the employee's id number?"
    },
    {
        name: 'employeeEmail',
        type: 'input',
        message: "What is the employee's email?"
    }
])
.then(( answers ) => {
    if(answers.employeeType === 'Engineer'){
       let engineer = new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail)
        engineer.getRole();
        inquirer
        .prompt({
            type: 'input',
            name: 'github',
            message: "What is the employee's github username?"
        })
        .then(( {github} ) => {
            engineer.getGitHub(github)
            employeeArray.push(engineer);
            console.log(employeeArray)
            confirmAdd();
        })
    }
    if(answers.employeeType === 'Intern'){
        console.log('Intern')
        let intern = new Intern (answers.employeeName, answers.employeeId, answers.employeeEmail)
        intern.getRole();
        inquirer
        .prompt({
            type: 'input',
            name: 'school',
            message: "What is the employee's school?"
        })
        .then(( {school} ) => {
            intern.getSchool(school)
            employeeArray.push(intern);
            console.log(employeeArray)
            confirmAdd();
        })
    }
})
}

// const generatePage = function(employeeArray){
//     employeeArray.forEach(function(employee){
//         console.log(employee.role, employee.id, employee.email)
//     })
// }

const getMembers = function(){
    let finalLine = '';
    employeeArray.forEach(function(employee){  
    if(employee.role === 'Manager'){
        finalLine = `<p>Office: ${employee.officeNumber}</p>`
    }
    if(employee.role === 'Engineer'){
        finalPoint = employee.github
        finalLine = `<a href="${employee.github}">GitHub</a>`
    }
    if(employee.role === 'Intern'){
       finalLine = `<p>School: ${employee.school}</p>`
    }
cards = cards +
    `<div class='card-content white-text'>
    <span class='card-title'>${employee.name}
</span>
<p>Role: ${employee.role}</p>
<p>Id: ${employee.id}</p>
<p>Email: ${employee.email}</p>    
${finalLine}
    </div>`
    })
}


const generatePage = function(){
console.log('generating page')

let htmlText = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <title>Document</title>
</head>
<body>

<div class= 'row'>
<div class='col s12 m4'>
<div class='card blue-grey darken-2'>
${cards}
</div>
</div>
</div>
</body>
</html>
`

    fs.writeFile('index.html', htmlText, err =>{
        if(err) throw err;
        console.log('HTML complate!')
    })
}



promptInputs();
