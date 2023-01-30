// get quotes from API https://type.fit/api/quotes
let apiQuotes = [];

function newQuote() {
    const myQuote = document.getElementById('quote')
    const myAuthor = document.getElementById('author')

    let index = Math.floor(Math.random() * apiQuotes.length);
    const quote = apiQuotes[index];
    myQuote.innerHTML = quote.text;
    myAuthor.innerHTML = quote.author;

}

async function getQuotes() {
    const apiUrl = "https://type.fit/api/quotes";
    console.log("start");

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
        console.log(apiQuotes)
    } catch (error) {
        console.log(error);
        // Handle error here
    }
}

getQuotes();