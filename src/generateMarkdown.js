//main section for html
function generateMain(employees) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="mx-auto">
                <span class="navbar-brand mb-0 h1">Team Profile</span>
            </div>
        </nav>
    </header>
    <main>
        <div class="container">
            <div>
            ${employees}
            </div>
        </div>
    </main>
    
</body>
</html>
    `
};

//creates card for manager
const generateManager = manager => {
    return `
    <div class="card">
        <div class="card-header">
            <h3>${manager.name}</h3>
        </div>
        <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.office}</p>

        </div>
    </div>
    `
};

//creates card for engineer
const generateEngineer = engineer => {
    return `
    <div class="card">
        <div class="card-header">
            <h3>${engineer.name}</h3>
         </div>
        <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>

         </div>
     </div>
    `
};

//creates card for intern
const generateIntern = intern => {
    return `
    <div class="card">
        <div class="card-header">
              <h3>${intern.name}</h3>
         </div>
         <div class="card-body">
             <p class="id">ID: ${intern.id}</p>
             <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
             <p class="school">School: ${intern.school}</p>

         </div>
     </div>
    `
};

//adds cards to array when role is selected
generateMarkdown = (data) => {
    employeeArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();


        if (role === 'Manager') {
            const mCard = generateManager(employee);
            employeeArray.push(mCard);
        };

        if (role === 'Engineer') {
            const eCard = generateEngineer(employee);
            employeeArray.push(eCard);
        };

        if (role === 'Intern') {
            const iCard = generateIntern(employee);
            employeeArray.push(iCard);
        };

    };

    const employees = employeeArray.join('');

    const mainPage = generateMain(employees);
    return mainPage;

};

module.exports = generateMarkdown;