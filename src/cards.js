const readlineSync = require("readline-sync");

const card = String(readlineSync.question("\nEnter a playing card: "));

let suit = null;
let rank = null;

if (true == (card.includes("S") || card.includes("s"))) {
        suit = "Spades";
} else if (true == (card.includes("C") || card.includes("c"))) {
        suit = "Clubs";
} else if (true == (card.includes("D") || card.includes("d"))) {
        suit = "Diamonds";
} else if (true == (card.includes("H") || card.includes("h"))) {
        suit = "Hearts";
} else {
        suit = false;
};

if (true == card.includes("2")) {
        rank = "Two";
} else if (true == card.includes("3")) {
        rank = "Three";
} else if (true == card.includes("4")) {
        rank = "Four";
} else if (true == card.includes("5")) {
        rank = "Five";
} else if (true == card.includes("6")) {
        rank = "Six";
} else if (true == card.includes("7")) {
        rank = "Seven";
} else if (true == card.includes("8")) {
        rank = "Eight";
} else if (true == card.includes("9")) {
        rank = "Nine";
} else if (true == (card.includes("T") || card.includes("t"))) {
        rank = "Ten";
} else if (true == (card.includes("J") || card.includes("j"))) {
        rank = "Jack";
} else if (true == (card.includes("Q") || card.includes("q"))) {
        rank = "Queen";
} else if (true == (card.includes("K") || card.includes("k"))) {
        rank = "King";
} else if (true == (card.includes("A") || card.includes("a"))) {
        rank = "Ace";
} else {
        rank = false;
};

const cardMessage = `\n${rank} of ${suit}.`;

if ((suit == false) || (rank == false)) {
        console.log("\nInvalid.");
} else {
        console.log(cardMessage);
};
