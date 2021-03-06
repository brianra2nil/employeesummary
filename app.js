const { prompt } = require("inquirer")
const fs = require('fs')
const path = require('path')

const render = require('./lib/htmlRenderer.js')

const Employee = require('./lib/Employee.js')
const Intern = require('./lib/Intern.js')
const Engineer = require('./lib/Engineer.js')
const Manager = require('./lib/Manager.js')
let employees = []



const buildIntern = employee => {
    prompt([
      {
        type: 'input',
        name: 'school',
        message: 'what school did they attend?:'
      }
    
    ])
      .then(({ school }) => {
        employees.push(new Intern(employee.name, employee.id, employee.email, school))
        subMenu()
      })
      .catch(err => console.log(err))
  }
  
  const buildEngineer = employee => {
    prompt([
      {
        type: 'input',
        name: 'github',
        message: 'What is the Github Username?:'
      }
    ])
      .then(({ github }) => {
        employees.push(new Engineer(employee.name, employee.id, employee.email, github))
        subMenu()
      })
      .catch(err => console.log(err))
  }
  
  const buildManager = employee => {
    prompt([
      {
        type: 'number',
        name: 'officeNumber',
        message: 'what is your office number?:'
      }
    ])
      .then(({ officeNumber }) => {
        employees.push(new Manager(employee.name, employee.id, employee.email, officeNumber))
        subMenu()
      })
      .catch(err => console.log(err))
  }
  

  const subMenu = () => {
    prompt({
      type: 'list',
      name: 'action',
      choices: ['Add another employee?', 'Finished'],
      message: 'What would you like to do now?'
    })
      .then(({ action }) => {
        switch (action) {
          case 'Add another employee?':
            questionStart()
            break
          case 'Finished':
            const html = render(employees)
            fs.writeFileSync(path.join(__dirname, 'output', 'team.html'), html)
            break
        }
      })
      .catch(err => console.log(err))
  }

const questionStart = () => {
    prompt([
        {
            type: 'list',
            name: 'role',
            choices: ['Employee', 'Intern', 'Engineer', 'Manager'],
            message: 'what is the role?'
        },
        {
            type: 'input',
            name: 'name',
            message: 'what is the name?'
        },
        {
            type: 'number',
            name: 'id',
            message: 'what is the id number?'  
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is the email address?'
        }

    ])
    .then(employee => {
    switch (employee.role) {
        case 'Employee':
        employees.push(new Employee(employee.name, employee.id, employee.email))
        subMenu()
        break
        case 'Intern':
            
            buildIntern(employee)
            break
        case 'Engineer':
            
            buildEngineer(employee)
            break
        case 'Manager':
           
            buildManager(employee)
            break
    }    
    })
    .catch(err => console.log(err))
}

questionStart()

// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const inquirer = require("inquirer");
// // const path = require("path");
// // const fs = require("fs");

// // const OUTPUT_DIR = path.resolve(__dirname, "output");
// // const outputPath = path.join(OUTPUT_DIR, "team.html");

// // const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
