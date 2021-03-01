const inquirer = require('inquirer');
const chalk = require('chalk');
const ageCalc = require('./ageCalc')
const figlet = require('figlet')


console.log(
    chalk.cyan(
        figlet.textSync('Age Calculator', {
            font: 'Epic',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        })
    ))

const questionAnswer = () => {
    const questions = [
        {
            name: "NAME",
            type: "input",
            message: "What is your Name?"
        },
        {
            name: "DOB",
            type: "input",
            message: "What is your Date of Birth in (mm/dd/yyyy) format?"
        },
    ];
    return inquirer.prompt(questions);
}

questionAnswer().then(answers => {
    // display calculating
    console.log(
        chalk.yellow(
            `Calculating ${answers.NAME}'s age from the following date of birth ${answers.DOB}....`
        )
    );
    var ageString = ageCalc.ageCalc(answers.DOB)
    console.log(
        chalk.magenta(
            `Congratulations ${answers.NAME}, you are ${ageString}`
)
    )
        });