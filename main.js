// variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

// array of objects
const quotes = [
    {
        quote : `"That's one small step for a man, a giant leap for mankind."`,
        person : "Neil Armstrong"
    },
    {
        quote : `"The only thing we have to fear is fear itself."`,
        person : "Franklin D. Roosevelt"
    },
    {
        quote : `"All the world's a stage, and all the men and women merely players."`,
        person : "William Shakespeare"
    },
    {
        quote : `"Ask not what your country can do for you; ask what you can do for your country."`,
        person : "John Kennedy"
    },
    {
        quote : `"Genius is one percent inspiration and ninety-nine percent perspiration."`,
        person : "Thomas Edison"
    },
    {
        quote : `"Three can keep a secret, if two of them are dead.	"`,
        person : "	Benjamin Franklin"
    },
    {
        quote : `"You must be the change you wish to see in the world.	"`,
        person : "	Mahatma Ghandi"
    },
    {
        quote : `"Life is like riding a bicycle. To keep your balance, you must keep moving."`,
        person : "Albert Einstein"
    }
];

btn.addEventListener('click',change);

function change(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

}