const fs = require('fs');
const inquirer = require('inquirer');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const generateMarkdown = require('./src/generateMarkdown.js')

const employeeArray = [];

//inquirer prompt for asking manager questions
const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter your name',
            name: 'name',
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
    ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            employeeArray.push(manager);
            console.log(manager);
        });
};

//inquirer prompt for adding employee questions
const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Do you want to add an employee?',
            name: 'addEmployee',
            choices: [
                'Engineer',
                'Intern',
            ]
        },
        {
            type: 'input',
            message: 'Please enter your employees name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Please enter your employees id',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Please enter your employees email address',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Please enter your employees school',
            name: 'school',
        },
        {
            type: 'input',
            message: 'Please enter your employees Github username',
            name: 'github',
        },
        {
            type: 'confirm',
            message: 'Would you like to add more employees?',
            name: 'confirmation',
        }
    ])
        .then(employees => {
            let { name, id, email, addEmployee, github, school, confirmation } = employees;
            let employee;

            //adding employee info to the array if a new employee is chosen
            if (addEmployee === 'Intern') {
                employee = new Intern(name, id, email, school);
                console.log(employee)
            } else if (addEmployee === 'Engineer') {
                employee = new Engineer(name, id, email, github);
            };

            if (confirmation) {
                return addEmployee(employeeArray)
            } else {
                return employeeArray
            };
        });
};

//write file function to generate html
function writeToFile(data) {
    fs.writeFile('./output/index.html', data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Success! Generating HTML!')
    });
};


managerQuestions()
    .then(addEmployee)
    .then(employeeArray => {
        return generateMarkdown(employeeArray);
    })
    .then(userInput => {
        return writeToFile(userInput);
    })
    .catch(err => {
        console.log(err);
    });
