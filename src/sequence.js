const valueQuestion1 = require("readline-sync");
const valueQuestion2 = require("readline-sync");
const valueQuestion3 = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

console.log("\nEnter three numbers.");

const value1 = Number(valueQuestion1.question("\n"));
const value2 = Number(valueQuestion2.question());
const value3 = Number(valueQuestion3.question());

if (((value1 < MIN || value1 > MAX) || (value2 < MIN || value2 > MAX)) || (value3 < MIN || value3 > MAX)) {
        console.log("\nInvalid.");
} else if (((Number.isNaN(value1)) || Number.isNaN(value2)) || Number.isNaN(value3)) {
        console.log("\nInvalid.");
} else if (value1 == value2 && value2 == value3) {
        console.log("\nEqual.");
} else if (value1 < value2 && value2 < value3) {
        console.log("\nStrictly increasing.");
} else if (value1 > value2 && value2 > value3) {
        console.log("\nStrictly decreasing.");
} else if (value1 < value2 && value1 < value3) {
        console.log("\nIncreasing.");
} else if (value1 > value2 && value1 > value3) {
        console.log("\nDecreasing.");
} else {
        console.log("\nUnordered.");
};
