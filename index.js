const inquirer = require('inquirer');
const fs = require('fs');
//require class constructors
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
        ])
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
            } else if(answers.role === "Engineer"){
                const engineerRole = await inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "githubUsername",
                            message: "What is your github username? (Please enter a valid user)"
                        }
                    ])
                const newEngineer = new Engineer(
                    answers.name,
                    answers.employeeID,
                    answers.email,
                    engineerRole.githubUsername
                );
                team.push(newEngineer)
            } else if(answers.role === "Intern"){
                const internRole = await inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "school",
                            message: "What school are you enrolled in?"                            
                        }
                    ])
                    const newIntern = new Intern(
                        answers.name,
                        answers.employeeID,
                        answers.email,
                        internRole.school
                    )
                    team.push(newIntern)
                    console.log(team);
                    ask();
            }
        }


        const ask = async () => {
            const res = await inquirer.prompt([
                {
                    type: "confirm",
                    name: "restart",
                    message: "Continue?"
                }
            ])
            if(res.restart === 'y' || "Y"){
                console.log(res.restart)
                questions();
            } else {
                return;
            }
        }

        questions();