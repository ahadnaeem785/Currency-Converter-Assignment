#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
while (true) {
    let currency = {
        "PKR": {
            "USD": 0.0035,
            "GBP": 0.0027,
            "PKR": 1
        },
        "USD": {
            "PKR": 287.93,
            "GBP": 0.79,
            "USD": 1
        },
        "GBP": {
            "PKR": 365.53,
            "USD": 1.27,
            "GBP": 1
        }
    };
    let answer = await inquirer.prompt([{
            name: "from",
            type: "list",
            message: chalk.cyan("Covert From :"),
            choices: ["PKR", "GBP", "USD"]
        }, {
            name: "to",
            type: "list",
            message: chalk.cyan("Convert to :"),
            choices: ["PKR", "GBP", "USD"]
        },
        {
            name: "amount",
            type: "number",
            message: chalk.cyan("Enter Amount :"),
            validate: (input) => {
                if (isNaN(input)) {
                    return "Enter any number :\n(Arrow up to re-enter) ";
                }
                return true;
            }
        }]);
    if (answer.from && answer.to && answer.amount) {
        let result = (currency[answer.from][answer.to]) * answer.amount;
        console.log(chalk.magenta.bold(`Conversion from ${answer.from} to ${answer.to} is :  ${result}`));
    }
    let again = await inquirer.prompt([{
            name: "decision",
            type: "list",
            message: chalk.cyan("Do you want to use again?"),
            choices: ["Yes", "No"]
        }]);
    if (again.decision == "Yes") {
        continue;
    }
    else {
        console.log(chalk.green.bold.italic("Thanks for the use!"));
        break;
    }
}
