import inquirer from "inquirer"

const questions = [
  {
    type: "input",
    name: "numberone",
    message: "Enter your first number:",
    validate: (input: string) => {
      return !isNaN(Number(input)) || "Please enter a valid number."
    }
  },
  {
    type: "input",
    name: "numbertwo",
    message: "Enter your second number:",
    validate: (input: string) => {
      return !isNaN(Number(input)) || "Please enter a valid number."
    }
  },
  {
    type: "list",
    name: "Operator",
    message: "Select your operator",
    choices: ["+", "-", "*", "/"]
  }
]

async function main() {
  const answers = await inquirer.prompt(questions)
  const numberone = Number(answers.numberone)
  const numbertwo = Number(answers.numbertwo)
  console.log({ numberone, numbertwo, operator: answers.Operator })
}

main()
