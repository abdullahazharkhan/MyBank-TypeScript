import inquirer from "inquirer";
import figlet from "figlet";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";
import { Customer } from "./Customer.js";
const cust: Customer = new Customer();

const sleep = (ms = 4150) => new Promise((r) => setTimeout(r, ms));

async function Welcome() {
  const title = chalkAnimation.karaoke(
    figlet.textSync("My Bank", {
      font: "ANSI Regular",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    })
  );

  await sleep();
    title.stop();
}
await Welcome();

async function info(): Promise<void> {
    
let userInfo = await inquirer.prompt([
    {
      type: "input",
      name: "fname",
      message: chalk.yellow("Enter your first name here "),
    },
    {
      type: "input",
      name: "lname",
      message: chalk.yellow("Enter your last name here "),
    },
    {
      type: "list",
      name: "gender",
      message: chalk.yellow("Select gender "),
      choices: ["Male", "Female"],
    },
    {
      type: "number",
      name: "age",
      message: chalk.yellow("Enter your age "),
    },
    {
      type: "number",
      name: "contact",
      message: chalk.yellow("Enter your contact number "),
    },
  ]);
  
  if((userInfo.fname != '') && (userInfo.lname != '') && (userInfo.age != '') && (userInfo.contact != '')) {
      if(!isNaN(userInfo.age) && !isNaN(userInfo.contact)) {
          cust.FirstName = userInfo.fname;
          cust.LastName = userInfo.lname;
          cust.Gender = userInfo.gender;
          cust.Age = userInfo.age;
          cust.MobileNumber = userInfo.contact;
          console.log(chalk.green(`\n\tWelcome ${userInfo.fname} \n`));
          actions();
        } else {
          console.log(chalk.red(`> Your age and contact number must be number`));
          info();
      }
} else {
    console.log(`Enter full information`);
    info();
}
  
}
function actions(): void {
    inquirer.prompt([{
        type: "list",
        message: chalk.yellow("What do you want to do?"),
        name: "action",
        choices: ["Show Information", "Credit", "Debit", "Show Balance", "Exit"]
    }]).then(async ans => {
        switch (ans.action) {
            case "Show Information":
                console.log(chalk.green(cust.CustomerInfo()))
                actions();
                break;
            case "Credit":
                credit();
                break;
            case "Debit":
                debit();
                break;
            case "Show Balance":
                console.log(chalk.green(`\tYou have currently $${cust.AccountBalance}`));
                actions();
                break;
            case "Exit":
                console.log(chalk.yellow(`\tBye ${cust.FirstName}`));
                break;
            default:
                break;
        }
    })
}

function credit(): void {
    inquirer.prompt([{
        type: "number",
        message: chalk.yellow("How much amount you want to credit? ($1 will be deducted if the amount is more than $100)"),
        name: "amount"
    }]).then(ans => {
        if(ans.amount != "") {
            if(!isNaN(ans.amount)) {
                console.log(chalk.green(cust.Credit(ans.amount)))
                actions();
            } else {
                console.log(chalk.red(`Only numbers are valid`));
                credit();
            }
        } else {
            console.log(chalk.yellow(`Enter amount!!`))
            credit();
        }
    })
}
function debit(): void {
    inquirer.prompt([{
        type: "number",
        message: chalk.yellow("How much amount you want to debit?"),
        name: "amount"
    }]).then(ans => {
        if(ans.amount != "") {
            if(!isNaN(ans.amount)) {
                console.log(chalk.green(cust.Debit(ans.amount)))
                actions();
            } else {
                console.log(chalk.red(`Only numbers are valid`));
                debit();
            }
        } else {
            console.log(chalk.yellow(`Enter amount!!`))
            debit();
        }
    })
}
info()