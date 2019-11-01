const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const value = Number(readlineSync.question("\nEnter a number: "));

if (Number.isNaN(value)) {
        console.log("\nInvalid.");
} else if (value < MIN || value > MAX) {
        console.log("\nInvalid.");
} else if (value == 0) {
        console.log("\nZero.");
} else if (value > 0) {
        console.log("\nPositive.");
} else if (value < 0) {
        console.log("\nNegative.");
};
