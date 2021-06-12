const quotes = [

    {
        quote:"We hate some persons because we do not know them; and we will not know them because we hate them.",
        author:"Charles Caleb Colton",
    },

    {
        quote:"Life is an adventure in forgiveness.",
        author:"Norman Cousins",
    },

    {
        quote:"The sweat of hard work is not to be displayed. It is much more graceful to appear favored by the gods.",
        author:"Maxine Hong Kingston",
    },

    {
        quote:"Only I can change my life. No one can do it for me.",
        author:"Carol Burnett",
    },
];


const quote = document.querySelector("#quote span:first-child");

const author = document.querySelector("#quote span:last-child");


const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
