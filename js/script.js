/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

// This holds all the quotes that were already been displayed.
var seed =[];

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
// generates a random number to be used as an index of the quotes array.
// the maximum number is based on the length of the array.
  let randomIndex; 
      randomIndex = Math.round(Math.random() * (quotesArr.length - 1));
// if all the quotes were already displayed, empty the seed array to start again.
  if(seed.length === quotesArr.length){
      seed =[];
  }
// to avoid repitition, this will generate another random quote if a quote has already been displayed.
  if(seed.indexOf(randomIndex) !== -1){
      return getRandomQuote(quotesArr);
  }
// quotes that were already printed are pushed to fill in the seed array and are used for comparison on the new random quote generated.  
  seed.push(randomIndex);
  return quotesArr[randomIndex];
}

/*
* This function generates a random number that will be used in getting a random color.
* @returns {integer}
*/
function randomRGB (){
    return Math.floor(Math.random() * 256);
}

/*
* This function returns a random rgb color e.g. rgb(17,98,178).
* @returns {string}
*/
function randomColor(){
    let color = 'rgb(';
    color += randomRGB() + ',';
    color += randomRGB() + ',';
    color += randomRGB() + ')';
    return color;
}

/*
* This funtion prints the generated random quote to the web page.
* @returns {void}
*/
function printQuote(){
  let ranQuote = getRandomQuote(quotes);
// adding objects to the html using the element Id
  let div = document.getElementById('quote-box');
  let html = '';
      html = '<p class="quote">' + ranQuote.quote + '</p>';
      html += '<p class="source">' +  ranQuote.source;
// Displays the "citation" property if there is any.      
    if('citation' in ranQuote )
    {
      html += '<span class="citation">' + ranQuote.citation + '</span>';
    }
// Displays the "year" property if there is any.
    if('year' in ranQuote)
    {
      html += '<span class="year">' + ranQuote.year + '</span>';
    }
/*
  * All html strings concatenation were inserted to the index.html div.
  * An additional "tags" property is added to index.html div.
  *** I added a style for the "tags" property in styles.css.
*/
    div.innerHTML = html + '<p class= "tags">' + 'tags: ' + ranQuote.tags + '</p>';
// A random background color is generated every quote.    
    document.body.style.backgroundColor = randomColor();
}

// If the "show another quote" button is not clicked for 15s, the page will automatically display another random quote.
setInterval(printQuote, 15000);

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.