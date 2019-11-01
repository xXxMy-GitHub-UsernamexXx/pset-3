const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const integer = readlineSync.question("\nEnter an integer: ");

if (integer < MIN || integer > MAX) {
        console.log("\nInvalid.");
} else if (integer.endsWith("0")) {
        console.log("\nEven.");
} else if (integer.endsWith("1")) {
        console.log("\nOdd.");
} else if (integer.endsWith("2")) {
        console.log("\nEven.");
} else if (integer.endsWith("3")) {
        console.log("\nOdd.");
} else if (integer.endsWith("4")) {
        console.log("\nEven.");
} else if (integer.endsWith("5")) {
        console.log("\nOdd.");
} else if (integer.endsWith("6")) {
        console.log("\nEven.");
} else if (integer.endsWith("7")) {
        console.log("\nOdd.");
} else if (integer.endsWith("8")) {
        console.log("\nEven.");
} else if (integer.endsWith("9")) {
        console.log("\nOdd.");
} else {
        console.log("\nInvalid.");
};
