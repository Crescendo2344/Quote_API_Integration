const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

const API_Quotes = 'https://dummyjson.com/quotes';


async function fetchAndDisplayQuote() {
  try {
    const response = await fetch(API_Quotes);
    const data = await response.json();

    if (!data.quotes || data.quotes.length === 0) {
      throw new Error("No quotes found.");
    }

    const randomIndex = Math.floor(Math.random() * data.quotes.length);
    const quoteData = data.quotes[randomIndex];

    quoteElement.textContent = quoteData.quote;
    authorElement.textContent = `- ${quoteData.author}`;
  } catch (error) {
    quoteElement.textContent = "Oops! Could not fetch a quote.";
    authorElement.textContent = "";
    console.error("Error fetching quote:", error);
  }
}

fetchAndDisplayQuote();


newQuoteBtn.addEventListener("click", fetchAndDisplayQuote);
