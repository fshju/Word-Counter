#!/usr/bin/env node 
import inquirer from "inquirer";
const answers = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "Enter your sentence"
});
let words = answers.sentence.trim().split(" ").length;
console.log(`Your sentence words count is ${words}`);
