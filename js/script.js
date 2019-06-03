/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

//
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


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote(getRandomObj){
  let randomIndex;
  let randomQuote;
  randomIndex = Math.floor(Math.random() * 10);
  randomIndex = parseInt(randomIndex);
  randomQuote = getRandomObj[randomIndex];
}


function randomRGB (){
    return Math.floor(Math.random() * 256);
}

function randomColor(){
    let color = 'rgb(';
    color += randomRGB() + ',';
    color += randomRGB() + ',';
    color += randomRGB() + ')';
    return color;
}

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote(){
  let ranQuote = getRandomQuote(quotes);
  let div = document.getElementById('quote-box');
  let html ='';
      html += '<p class="quote">' + ranQuote.quote + '</p>';
      html += '<p class="source">' +  ranQuote.source;
    if('citation' in ranQuote )
    {
      html += '<span class="citation">' + ranQuote.citation + '</span>';
    }
    if('year' in ranQuote)
    {
      html += '<span class="year">' + ranQuote.year + '</span>';
    }
    div.innerHTML = html + '<p class= "tags">' + 'tags: ' + ranQuote.tags + '</p>';
    document.body.style.backgroundColor = randomColor();
}
setInterval(printQuote, 10000);

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.