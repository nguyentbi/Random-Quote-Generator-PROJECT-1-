// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
  {quote  : "Whatever the mind of man can conceive and believe, it can achieve",
   source : "Napoleon Hill"},
  {quote  : "You miss 100% of the shots you don’t take",
   source : "Wayne Gretzky"},
  {quote  : "We become what we think about",
   source : "Earl Nightingale"},
  {quote  : "The mind is everything. What you think you become",
   source : "Buddha"},
  {quote  : "An unexamined life is not worth living",
   source : "Socrates"},
  {quote  : "But man is not made for defeat. A man can be destroyed but not defeated",
   source : "Ernest Hemingway"},
  {quote  : "When you reach the end of your rope, tie a knot in it and hang on",
   source : "Franklin D. Roosevelt"},
  {quote  : "There is nothing permanent except change",
   source : "Heraclitus"},
];

// generate a random quote from the quotes array
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}


var colors = [
  "red",
  "gray",
  "blue",
  "green",
  "purple"
];


// generate a random color
function getRandomColor() {
  var randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
}


// print the random quote and display random background-color to the webpage
function printQuote() {
  var randomQuote = getRandomQuote();
  var randomColor = getRandomColor();
  document.querySelector(".quote").innerHTML = randomQuote.quote;
  document.querySelector(".source").innerHTML = randomQuote.source;
  document.querySelector("body").style.backgroundColor = randomColor;
}


// Quotes and backgroundColor change automatically after 10 seconds 
setInterval(printQuote, 10000);
