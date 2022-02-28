//Get Quotes from API
let apiQuotes = [];
const quoteText = document.getElementById("quote");
const twitterBtn = document.getElementById("twitter");
let authorText = document.getElementById("author");

function getQuotes() {
  const apiURI = "https://motivational-quotes1.p.rapidapi.com/motivation";
  const options = {
    method: "POST",
    headers: {
      "X-RapidAPI-Key":
        "777903343e0d3m599sh613818cda936e3a0307p178fbcjsna089f02f7983", //Generate your own API key from rapidapi.com
    },
    body: {
      key1: "value",
      key2: "value",
    },
  };
  try {
    console.log("here", options, apiURI);
    let dfetchRes;
    fetch(apiURI, options)
      .then((res) => {
        console.log("Good going", res);
        return res.text();
      })
      .then((data) => {
        // newQuote(data);
        const [quote, author] = data.split("-");
        quoteText.innerHTML = quote;
        authorText.innerHTML = author;
      });
  } catch (error) {}
}

function tweetQuote() {
  const twitterURL = `https://www.twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterURL, "_blank");
}
// EvenListener
twitterBtn.addEventListener("click", tweetQuote);
//on Load
getQuotes();
