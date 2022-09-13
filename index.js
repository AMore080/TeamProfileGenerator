const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./public/scripts/Employee')

const questions = inquirer
    .prompt({
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "employeeID",
            message: "What is your ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        }
        .then((answers) => {
            console.log(answers);
        })
        
    )