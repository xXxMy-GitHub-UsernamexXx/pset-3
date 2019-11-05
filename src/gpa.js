const readlineSync = require("readline-sync");

const letterGrade = String(readlineSync.question("\nEnter a letter grade: "));

let gpa = Number(0);

if (letterGrade == "A" || letterGrade == "A+") {
        gpa = Number(4.00);
} else if (letterGrade == "A-") {
        gpa = Number(3.67);
} else if (letterGrade == "B+") {
        gpa = Number(3.33);
} else if (letterGrade == "B") {
        gpa = Number(3.00);
} else if (letterGrade == "B-") {
        gpa = Number(2.67);
} else if (letterGrade == "C+") {
        gpa = Number(2.33);
} else if (letterGrade == "C") {
        gpa = Number(2.00);
} else if (letterGrade == "C-") {
        gpa = Number(1.67);
} else if (letterGrade == "D+") {
        gpa = Number(1.33);
} else if (letterGrade == "D") {
        gpa = Number(1.00);
} else if (letterGrade == "D-") {
        gpa = Number(0.67);
} else if (letterGrade == "F") {
        gpa = Number(0.00);
} else {
        gpa = Number.isNaN();
};

const gpaMessage = `\nYour GPA is ${gpa}.`;

if (gpa == Number.isNaN()) {
        console.log("\nInvalid.");
} else {
        console.log(gpaMessage);
};
