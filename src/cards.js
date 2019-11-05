const readlineSync = require("readline-sync");

const card = String(readlineSync.question("\nEnter a playing card: "));

let suit = "";
let rank = "";
const cardMessage = `\n${rank} of ${suit}.`;

if (true == (card.includes("S") || card.includes("s"))) {
        suit = "Spades";
} else if (true == (card.includes("C") || card.includes("c"))) {
        suit = "Clubs";
} else if (true == (card.includes("D") || card.includes("d"))) {
        suit = "Diamonds";
} else if (true == (card.includes("H") || card.includes("h"))) {
        suit = "Hearts";
};

if
