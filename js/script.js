/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


var displayedQuotes =[];
var IDLE_TIMER_IN_MILISECONDS = 15000;
var idleTimer;
// A list of quotes and some other properties that will be randomly printed on the user's screen thereafter.
var quotes = [
  { 
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    source: "Martin Fowler",
    tags: "code-smells, codes , programming, refractoring"
  },
  { 
    quote: "I'm not a great programmer; I'm just a good programmer with great habits.",
    source: "Kent Beck",
    tags: "programming"
  },
  { 
    quote: "Truth can only be found in one place: the code.",
    source: "Robert C. Martin",
    citation: "A Handbook of Agile Software Craftsmanship",
    year: 2007,
    tags: "programming, software-craftmanship, software-design, software-engineering"
  }, 
  { 
    quote: "A language that doesn't affect the way you think about programming is not worth knowing.",
    source: "Alan J. Perlis",
    tags: "programming"
  },
  {
    quote: "The most disastrous thing that you can ever learn is your first programming language.",
    source: "Alan Kay",
    tags: "programming"
  },
  {
    quote: "The most important property of a program is whether it accomplishes the intention of its user.",
    source: "C.A.R. Hoare",
    tags: "programming, computer-science"
  },
  {
    quote: "A conscious human is driven by their conscience, not popular opinion.",
    source: "Suzy Kassem",
    citation: "Rise Up and Salute the Sun: The Writings of Suzy Kassem",
    year: 2010,
    tags: "politics,leadership,culture"
  },
  {
    quote: "Take positive care of your mind, and it would surely take positive care of your life.",
    source: "Edmond Mbiaka",
    tags: "programming, beliefs, outcomes, affirmations"
  },
  {
    quote: "Progress is possible only if we train ourselves to think about programs without thinking of them as pieces of executable code. ",
    source: "Edsger W. Dijkstra",
    tags: "programming"
  },
  {
    quote: "Programmers are not to be measured by their ingenuity and their logic but by the completeness of their case analysis.",
    source: "Alan J. Perlis",
    tags: " debugging, programming"
  },
  {
    quote: "Some of the best programming is done on paper, really. Putting it into the computer is just a minor detail.",
    source: "Max Kanat-Alexander",
    citation: "Code Simplicity: The Fundamentals of Software",
    year: 2012,
    tags: "programming"
  }
];  

/*
 * This function generates a random quote from the list of quotes above.
 * @param quotesArr {array}
 * @returns {object}
 */
function getRandomQuote(quotesArr){
/* 
 * Generate a random number to be used as an index of the quotes array.
 * The maximum number is based on the number of indexes inside the array.
 */
  let randomIndex; 
      randomIndex = Math.round(Math.random() * (quotesArr.length - 1));
// If all the quotes were already displayed, empty the displayedQuotes array to start again.
  if(displayedQuotes.length === quotesArr.length){
      displayedQuotes =[];
  }
// To avoid repitition, this will generate another random quote if a quote has already been displayed.
  if(displayedQuotes.indexOf(randomIndex) !== -1){
      return getRandomQuote(quotesArr);
  }
// Quotes that were already printed are pushed to fill in the displayedQuotes array and are used for comparison on the new random quote generated.  
  displayedQuotes.push(randomIndex);
  return quotesArr[randomIndex];
}

/*  
 * This function generates a random number that will be used in getting a random color.
 * @returns {integer}
 */
let getRandomRGB = () => Math.floor(Math.random() * 256);

/*
 * This function returns a random rgb color e.g. rgb(17,98,178).
 * @returns {string}
 */
let getRandomColor = () => `rgb(${getRandomRGB()},${getRandomRGB()},${getRandomRGB()})`;

/*
 * This funtion prints the generated random quote to the web page.
 * @returns {void}
 */
function printQuote(){
  let randomQuote = getRandomQuote(quotes);
  let randomColor = getRandomColor();
// Reset the timer every time user clicks the button
  clearInterval(idleTimer);
// Adding objects to the html using the element Id.
  let div = document.getElementById('quote-box');
  let html = `<p class="quote"> ${randomQuote.quote}</p>`
      html += `<p class="source"> ${randomQuote.source}`
// Displays the "citation" property if there is any.      
    if('citation' in randomQuote )
    {
      html += `<span class="citation">${randomQuote.citation}</span>`
    }
// Displays the "year" property if there is any.
    if('year' in randomQuote)
    {
      html += `<span class="year">${randomQuote.year}</span>`
    }
      html += `<p class= "tags"> tags: ${randomQuote.tags}</p>`
/*
 * All html strings concatenation will be inserted to the index.html div.
 * An additional "tags" property is added to index.html div.
 *** I added a style for the "tags" property in styles.css.
 */
  div.innerHTML = html;
// A random background color is generated every quote.    
  document.body.style.backgroundColor = randomColor;
// The color of the button should match the random color generated everytime the quote changes.  
  document.getElementById('loadQuote').style.backgroundColor = randomColor;

// Start the timer
  idleTimer = setInterval(printQuote, IDLE_TIMER_IN_MILISECONDS);
}

// Auto - refresh the quote after 15 seconds.
  idleTimer = setInterval(printQuote, IDLE_TIMER_IN_MILISECONDS);

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. 
***/
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);