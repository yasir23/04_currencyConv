#! /usr/bin/env node 
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(`lets do the currency exchange? \n`);
    await sleep();
    rainbowTitle.stop();
}
await welcome();
let conversion = {
    "PKR": {
        PKR: 1,
        USD: 0.00390625,
        BTC: 0.0028985507246377,
    },
    "USD": {
        PKR: 256,
        USD: 1,
        BTC: 0.005,
    },
    "BTC": {
        PKR: 345,
        USD: 200,
        BTC: 1,
    }
};
const answers = await inquirer
    .prompt([
    {
        type: "list",
        name: "from",
        message: "which currency you want change",
        choices: ["PKR", "USD", "BTC"],
    },
    {
        type: "list",
        name: "to",
        message: "choose to exchange the currency",
        choices: ["PKR", "USD", "BTC"],
    },
    {
        type: "number",
        name: "amount",
        message: "what is the amount you want to change?",
    }
]);
let { from, to, amount } = answers;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`your conversion from ${from} to ${to} is ${result}`);
}
else {
    console.log(`your answer is invalid`);
}
