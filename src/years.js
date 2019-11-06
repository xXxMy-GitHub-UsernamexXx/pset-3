const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

let year = Number(readlineSync.question("\nEnter a year: "));

year = Math.round(year);
let leapStatus = "";
const yearMessage = `\n${year} is ${leapStatus}a leap year.`;

if (true == Number.isNaN(year)) {
        console.log("\nInvalid.");
} else if (year <= MIN || year > MAX) {
        console.log("\nInvalid.");
} else if ((year % 4) == 0) {
        leapStatus = "";
        console.log(yearMessage);
} else if (!((year % 4) == 0)) {
        leapStatus = "not ";
        console.log(yearMessage);
};
