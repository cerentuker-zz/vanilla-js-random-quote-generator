/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/
'use strict';

//quote objects to be randomly printed on the screen
var quotes = [
  {
    quote: "The true measure of a shinobi is not how he lives but how he dies. It’s not what they do in life but what they did before dying that proves their worth.",
    source: "Jiraiya (Naruto) "
  },
  {
    quote: "I want you to be happy. I want you to laugh a lot. I don’t know what exactly I’ll be able to do for you, but I’ll always be by your side.",
    source: "Kagome (Inuyasha)", year: "1988"
  },
  {
    quote: "I don’t want to conquer anything. I just think that the guy with the most freedom in this ocean is the Pirate King.",
    source: "Monkey D. Luffy",
    citation: "One Piece"
  },
  {
    quote: "If you only face forward, there is something you will miss seeing.",
    source: "Vash the Stampede",
    citation: "Trigun",
    year: "1991",
    category: "Manga"
  },
  {
    quote: "We are all like fireworks. We climb, shine, and always go our separate ways and become further apart. But even if that time comes, let’s not disappear like a firework, and continue to shine forever.",
    source: "Hitsugaya Toushirou",
    citation: "Bleach",
    year: "1956",
    category: "Shonen"
  },
  {
    quote: "Don’t be so quick to throw away your life. No matter how disgraceful or embarrassing it may be, you need to keep struggling to find your way out until the very end.",
    source: "Clare",
    citation: "Claymore",
    year: "2006",
    category: "Anime Remake"
  }
]

/**
 * fetches a random quote object from the global array
 */
function getRandomQuote() {
  var quoteIndex = Math.floor(Math.random() * (quotes.length));
  return quotes[quoteIndex];
}

/**
 * gets a random quote from the array and prints it on the screen 
 */
function printQuote() {
  document.body.style.backgroundColor = getRandomColorHex();
  var quote = getRandomQuote();
  document.getElementById("quote").textContent = quote.quote;
  if (quote.category != undefined) {
    $('#category').text("( " + quote.category+ " )");
  } else {
    $('#category').text("");
  }
  if (quote.citation != undefined) {
    $('#citation').text(", " + quote.citation);
  } else {
    $('#citation').text("");
  }
  if (quote.year != undefined) {
    $('#year').text(", " + quote.year);
  } else {
    $('#year').text("");
  }
  var childrenElems = $('.source').children();
  $('.source').text(quote.source);
  $('.source').append(childrenElems);
}

/**
 * returns a random color
 */
function getRandomColorHex() {
  return "#" + parseInt(Math.random() * 0xffffff).toString(16);
}

/**
 * checks if jquery library is properly loaded
 */
function load() {
  if (!window.jQuery) {
    var s = document.createElement('script');
    s.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js');
    s.setAttribute('type', 'text/javascript');
    document.getElementsByTagName('head')[0].appendChild(s);
  }
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
setInterval(printQuote, 3000);
window.onload=load;