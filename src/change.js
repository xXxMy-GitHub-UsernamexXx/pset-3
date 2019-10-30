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

if (amount >= 0.25) {
        while (amount >= 0.25) {
                quartersNeeded = quartersNeeded++;
                amount = amount - 0.25;
        }
} else if (amount >= 0.10) {
        while (amount >= 0.10) {
                dimesNeeded = dimesNeeded++;
                amount = amount - 0.10;
        }
} else if (amount >= 0.05) {
        while (amount >= 0.05) {
                nickelsNeeded = nickelsNeeded++;
                amount = amount - 0.05
        }
} else {
        while (amount >= 0.01) {
                penniesNeeded = penniesNeeded++;
                amount = amount - 0.01;
        }
}

let quarterOrQuarters = (quartersNeeded == 1) ? "quarter" : "quarters";
let dimeOrDimes = (dimesNeeded == 1) ? "dime" : "dimes";
let nickelOrNickels = (nickelsNeeded == 1) ? "nickel" : "nickels";
let pennyOrPennies = (penniesNeeded == 1) ? "penny" : "pennies";

let changeMessage = `${quartersNeeded} ${quarterOrQuarters}, ${dimesNeeded} dimes, ${nicklesNeeded} nickles, and ${penniesNeeded} pennies.`;

if (Number.isNaN(amount)) {
    console.log("\nInvalid.");
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid.");
} else {
   console.log(\nchangeMessage);
};
