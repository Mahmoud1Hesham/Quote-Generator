var arrayOfQuotes = [
    {
        "author" : "William W. Purkey",
        "quote" : "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth."
    },
    {
        "author" : "Dr. Seuss",
        "quote" : "You know you're in love when you can't fall asleep because reality is finally better than your dreams."
    },
    {
        "author" : "Mae West",
        "quote" : "You only live once, but if you do it right, once is enough."
    },
    {
        "author" : "Mahatma Gandhi",
        "quote" : "Be the change that you wish to see in the world."
    },
    {
        "author" : "Robert Frost",
        "quote" : "In three words I can sum up everything I've learned about life: it goes on."
    },
    {
        "author" : "J.K. Rowling",
        "quote" : "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."
    },
    {
        "author" : "Albert Camus",
        "quote" : "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend"
    },
    {
        "author" : "Mark Twain",
        "quote" : "If you tell the truth, you don't have to remember anything."
    },
    {
        "author" : "Maya Angelou",
        "quote" : "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
    },
    {
        "author" : "Mahmoud Hesham",
        "quote" : "You must have hope and trust, or the world will be ash and dust."
    }
];

var arrIndex = -1;

function generateQuote(){
    var randomQuote;
    do {
        randomQuote = Math.floor(Math.random()*arrayOfQuotes.length);

    } while (randomQuote === arrIndex);
    arrIndex = randomQuote;
document.getElementById('quote').innerText =arrayOfQuotes[randomQuote].quote;
document.getElementById('author').innerText =arrayOfQuotes[randomQuote].author;
console.log(arrayOfQuotes[randomQuote].quote);
console.log(arrayOfQuotes[randomQuote].author);
console.log(randomQuote);
}