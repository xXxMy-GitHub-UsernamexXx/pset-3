const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;
const FAHRENHEIT_MELTING_POINT = 32;
const FAHRENHEIT_BOILING_POINT = 212;
const CELSIUS_MELTING_POINT = 0;
const CELSIUS_BOILING_POINT = 100;
const KELVIN_MELTING_POINT = 273.2;
const KELVIN_BOILING_POINT = 373.2;

const temperature = Number(readlineSync.question("\nEnter a temperature: "));
const scale = String(readlineSync.question("Enter a scale: "));

if (Number.isNaN(temperature)) {
        console.log("\nInvalid.");
} else if (temperature < MIN || temperature > MAX) {
        console.log("\nInvalid.");
} else if ((scale == "F") || (scale == "f")) {
        if ((temperature >= MIN) && (temperature < FAHRENHEIT_MELTING_POINT)) {
                console.log("\nSolid.");
        } else if ((temperature >= FAHRENHEIT_MELTING_POINT) && (temperature < FAHRENHEIT_BOILING_POINT)) {
                console.log("\nLiquid.");
        } else if ((temperature >= FAHRENHEIT_BOILING_POINT) && (temperature <= MAX)) {
                console.log("\nGas.");
        };
} else if ((scale == "C") || (scale == "c")) {
        if ((temperature >= MIN) && (temperature < CELSIUS_MELTING_POINT)) {
                console.log("\nSolid.");
        } else if ((temperature >= CELSIUS_MELTING_POINT) && (temperature < CELSIUS_BOILING_POINT)) {
                console.log("\nLiquid.");
        } else if ((temperature >= CELSIUS_BOILING_POINT) && (temperature <= MAX)) {
                console.log("\nGas.");
        };
} else if ((scale == "K") || (scale == "k")) {
        if ((temperature >= MIN) && (temperature < KELVIN_MELTING_POINT)) {
                console.log("\nSolid.");
        } else if ((temperature >= KELVIN_MELTING_POINT) && (temperature < KELVIN_BOILING_POINT)) {
                console.log("\nLiquid.");
        } else if ((temperature >= KELVIN_BOILING_POINT) && (temperature <= MAX)) {
                console.log("\nGas.");
        };
} else {
        console.log("\nInvalid.")
};
