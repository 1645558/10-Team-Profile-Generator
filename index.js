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
    {
        type: 'input',
        message: 'Please enter your name',
        name: 'intern-name',
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
        message: 'Please enter your school',
        name: 'school',
    },
];

const engineerQuestions = [
    {
        type: 'input',
        message: 'Please enter your name',
        name: 'engineer-name',
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
        message: 'Please enter your Github username',
        name: 'github',
    },
];


function init() {
    inquirer.prompt(managerQuestions, internQuestions, engineerQuestions)
};

init();