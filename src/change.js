const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const QUARTER_VALUE = Number(0.25);
const DIME_VALUE = Number(0.10);
const NICKEL_VALUE = Number(0.05);
const PENNY_VALUE = Number(0.01);

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

let quartersNeeded = Number(0);
let dimesNeeded = Number(0);
let nickelsNeeded = Number(0);
let penniesNeeded = Number(0);
let remainingCents = amount;

if (amount >= MIN && amount <= MAX) {
        while (remainingCents >= 0.25) {
                quartersNeeded = ++quartersNeeded;
                remainingCents = remainingCents - QUARTER_VALUE;
        }
        while (remainingCents >= 0.10) {
                dimesNeeded = ++dimesNeeded;
                remainingCents = remainingCents - DIME_VALUE;
        }
        while (remainingCents >= 0.05) {
                nickelsNeeded = ++nickelsNeeded;
                remainingCents = remainingCents - NICKEL_VALUE;
        }
        while (remainingCents > 0) {
                penniesNeeded = ++penniesNeeded;
                remainingCents = remainingCents - PENNY_VALUE;
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
