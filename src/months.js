const readlineSync = require("readline-sync");

let month = readlineSync.question("\nEnter a month: ");

month = month.toLocaleUpperCase();
let numberOfDays = null

if (((((month == "JAN") || (month == "JANUARY")) || ((month == "MAR") || (month == "MARCH")))
|| ((month == "MAY") || ((month == "JUL") || (month == "JULY"))))
|| ((((month == "AUG") || (month == "AUGUST")) || ((month == "OCT") || (month == "OCTOBER")))
|| ((month == "DEC") || month == "DECEMBER"))) {
        numberOfDays = "31 days.";
} else if ((((month == "APR") || (month == "APRIL")) || ((month == "JUN") || (month == "JUNE")))
|| (((month == "SEP") || (month == "SEPTEMBER")) || ((month == "NOV") || (month == "NOVEMBER")))) {
        numberOfDays = "30 days.";
} else if ((month == "FEB") || (month == "FEBRUARY")) {
        numberOfDays = "28 or 29 days.";
} else {
        numberOfDays = false;
};

if (numberOfDays == false) {
        console.log("Invalid.");
} else {
        console.log(numberOfDays);
};
