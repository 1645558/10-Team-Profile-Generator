const fs = require('fs');
const inquirer = require('inquirer');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');

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
        type: 'input',
        message: 'Please enter your email address',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please enter your office number',
        name: 'office',
    },
    {
        type: 'list',
        message: 'Do you want to add an employee?',
        name: 'add-employee',
        choices: [
            'Engineer',
            'Intern'
        ]
    },
];

const internQuestions = [

];

const engineerQuestions = [

];


function init() {
    inquirer.prompt(employeeQuestions, managerQuestions, internQuestions, engineerQuestions)
};

init();