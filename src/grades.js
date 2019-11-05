const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = 100;

const grade = Number(readlineSync.question("\nEnter a grade: "));

if (grade < MIN || grade > MAX) {
        console.log("\nInvalid.");
} else if (grade == Number.isNaN()) {
        console.log("\nInvalid.");
} else if (grade <= MAX && grade >= 90) {
        console.log("You received an A.");
} else if (grade <= 89 && grade >= 80) {
        console.log("You received a B.");
} else if (grade <= 79 && grade >= 70) {
        console.log("You received a C.");
} else if (grade <= 69 && grade >= 60) {
        console.log("You received a D.");
} else if (grade <= 59 && grade >= MIN) {
        console.log("You received an F.");
};
