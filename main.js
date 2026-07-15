// let generateBtn = document.querySelector(".generate");
// let autoBtn = document.querySelector(".auto");
// let stopBtn = document.querySelector(".stop");
// let quoteDiv = document.querySelector(".quote-display");
// let quoteId = document.querySelector(".quote-id");
// let autoStatus = document.querySelector(".auto-status");
// let intervalId;
// generateBtn.onclick = generateQuote;
// autoBtn.onclick = autoGenerate;
// stopBtn.onclick = stopGenerate;

// async function getQuotes() {
//     const response = await fetch("quotes.json");
//     const data = await response.json();
//     return data;
// }

// async function generateQuote() {
//     const quotes = await getQuotes();
//     const quote = quotes[Math.floor(Math.random() * quotes.length)];
//     quoteDiv.innerHTML = quote.text;
//     quoteId.innerHTML = quote.id;
// }
// function autoGenerate() {
//     intervalId = setInterval(generateQuote, 2000);
//     autoStatus.innerHTML = "Auto : ON ";
// }
// function stopGenerate() {
//     clearInterval(intervalId);
//     autoStatus.innerHTML = "";
// }
//=================================RELODE===========================//
// let generateBtn = document.querySelector(".generate");
// let autoBtn = document.querySelector(".auto");
// let stopBtn = document.querySelector(".stop");
// let quoteDiv = document.querySelector(".quote-display");
// let quoteId = document.querySelector(".quote-id");
// let autoStatus = document.querySelector(".auto-status");
// let intervalId;
// generateBtn.onclick = generateQuote;
// autoBtn.onclick = autoGenerate;
// stopBtn.onclick = stopGenerate;

// async function getQuotes() {
//     let response = await fetch("quotes.json");
//     let data = await response.json();
//     return data;
// }
// async function generateQuote() {
//     let quotes = await getQuotes();
//   let quote = quotes[Math.floor(Math.random() * quotes.length)];
//     quoteDiv.innerHTML = quote.text;
//     quoteId.innerHTML = quote.id;
// }
// function autoGenerate() {
//     intervalId = setInterval(generateQuote,2000)
//     autoStatus.innerHTML = 'Auto : ON '
// }
// function stopGenerate() {
//     clearInterval(intervalId)
//     autoStatus.innerHTML = ''
// }
//===========================againe===============================//
// let generateBtn = document.querySelector(".generate");
// let autoBtn = document.querySelector(".auto");
// let stopBtn = document.querySelector(".stop");
// let quoteDiv = document.querySelector(".quote-display");
// let quoteId = document.querySelector(".quote-id");
// let autoStatus = document.querySelector(".auto-status");
// let intervalId;

// generateBtn.onclick = generateQuote;
// autoBtn.onclick = autoGenerate;
// stopBtn.onclick = stopGenerate;

// async function getQuotes() {
//     const response = await fetch("quotes.json");
//     const data = await response.json();
//     return data;
// }

// async function generateQuote() {
//     const quotes = await getQuotes();
//     const quote = quotes[Math.floor(Math.random() * quotes.length)];
//     quoteDiv.innerHTML = quote.text;
//     quoteId.innerHTML = quote.id;
// }

// function autoGenerate() {
//     intervalId = setInterval(generateQuote, 2000);
//     autoStatus.innerHTML = "Auto ON";
// }

// function stopGenerate() {
//     clearInterval(intervalId);
//     autoStatus.innerHTML = "";
// }
//===========================================againe========================================//
let generateBtn = document.querySelector(".generate");
let autoBtn = document.querySelector(".auto");
let stopBtn = document.querySelector(".stop");
let quoteDiv = document.querySelector(".quote-display");
let quoteId = document.querySelector(".quote-id");
let autoStatus = document.querySelector(".auto-status");
let intervalId;

generateBtn.onclick = generateQuote;
autoBtn.onclick = autoGenerate;
stopBtn.onclick = stopGenerate;

async function getQuotes() {
    const response = await fetch("quotes.json");
    const data = await response.json();
    return data;
}

async function generateQuote() {
    const quotes = await getQuotes();
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDiv.innerHTML = quote.text;
    quoteId.innerHTML = quote.id;
}

function autoGenerate() {
    intervalId = setInterval(generateQuote, 2000);
    autoStatus.innerHTML = "Auto ON";
}

function stopGenerate() {
    clearInterval(intervalId);
    autoStatus.innerHTML = " ";
}
//=======================================againe========================================================//










