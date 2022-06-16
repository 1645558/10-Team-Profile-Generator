const fs = require('fs')
const inquirer = require('inquirer')
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')
const Manager = require('./lib/manager')

const employeeQuestions = [

]

const managerQuestions = [
    {
        type: 'input',
        message: 'Please enter your name',
        name: 'manager-name',
    },
    {
        type: 'input',
        message: 'Please enter your id',
        name: 'id',
    },
    {
        
    }
]

const internQuestions = [

]

const engineerQuestions = [

]


function init() {
    inquirer.prompt(employeeQuestions, managerQuestions, internQuestions, engineerQuestions)
}

init();