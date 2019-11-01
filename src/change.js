const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const quarterValue = Number(0.25);
const dimeValue = Number(0.10);
const nickelValue = Number(0.05);
const pennyValue = Number(0.01);

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

let quartersNeeded = Number(0);
let dimesNeeded = Number(0);
let nickelsNeeded = Number(0);
let penniesNeeded = Number(0);
let remainingCents = amount;

if (amount >= MIN && amount <= MAX) {
        while (remainingCents >= 0.25) {
                quartersNeeded = ++quartersNeeded;
                remainingCents = remainingCents - quarterValue;
        }
        while (remainingCents >= 0.10) {
                dimesNeeded = ++dimesNeeded;
                remainingCents = remainingCents - dimeValue;
        }
        while (remainingCents >= 0.05) {
                nickelsNeeded = ++nickelsNeeded;
                remainingCents = remainingCents - nickelValue;
        }
        while (remainingCents > 0) {
                penniesNeeded = ++penniesNeeded;
                remainingCents = remainingCents - pennyValue;
        }
};

let quarterOrQuarters = (quartersNeeded == 1) ? "quarter" : "quarters";
let dimeOrDimes = (dimesNeeded == 1) ? "dime" : "dimes";
let nickelOrNickels = (nickelsNeeded == 1) ? "nickel" : "nickels";
let pennyOrPennies = (penniesNeeded == 1) ? "penny" : "pennies";

let changeMessage = `\n${quartersNeeded} ${quarterOrQuarters}, ${dimesNeeded} ${dimeOrDimes}, ${nickelsNeeded} ${nickelOrNickels}, and ${penniesNeeded} ${pennyOrPennies}.`;

if (Number.isNaN(amount)) {
        console.log("\nInvalid.");
} else if (amount < MIN || amount > MAX) {
        console.log("\nInvalid.");
} else {
        console.log(changeMessage);
};
