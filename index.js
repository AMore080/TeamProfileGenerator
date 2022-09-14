const inquirer = require('inquirer');
const fs = require('fs');
//require class constructors
const Employee = require('./public/scripts/Employee');
const Intern = require('./public/scripts/Intern');
const Manager = require('./public/scripts/Manager');
const Engineer = require('./public/scripts/Engineer');

const team = [];

//Start questions function with inquirer
const questions = async () => {
    const answers = await inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Who are you?"
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
            },
            {
                type: "list",
                name: "role",
                message: "What is your email?",
                choices: ["Engineer","Intern","Manager"]
            },
        // {
        //     type: "input",
        //     name: "officeNumber",
        //     message: "What's your office number?"
        // }
        ])
        // .then((answers) => {
        //     console.log(answers);
        //     team.push(manager);
        //     console.log(team)
        console.log(answers)
        if(answers.role === "Manager"){
            const managerAnswer = await inquirer
                .prompt([
                    {
                        type: "input",
                        name: "officeNumber",
                        message: "What is your office number?"
                    }
                ])
                const newManager = new Manager(
                    answers.name,
                    answers.employeeID,
                    answers.email,
                    managerAnswer.officeNumber
                );
                team.push(newManager);
            }
        }

        questions();