const arrayOfQuotes = [
  {'author': 'Epictetus', 'quote': 'It\'s not what happens to you, but how you react to it that matters.'},
  {'author': 'Frank Sinatra', 'quote': 'The best revenge is massive success.'},
  {'author': 'Oscar Wilde', 'quote': 'Be yourself; everyone else is already taken.'},
  {'author': 'Frank Zappa', 'quote': 'So many books, so little time.'},
  {'author': 'Robert Frost', 'quote': 'In three words I can sum up everything Ive learned about life: it goes on.'},
  {'author': 'Nelson Mandela', 'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'},
  {'author': 'Oscar Wilde', 'quote': 'To live is the rarest thing in the world. Most people exist, that is all.'},
  {'author': 'Elbert Hubbard', 'quote': 'Do not take life too seriously. You will not get out alive.'},
  {'author': 'Mark Twain', 'quote': 'If you tell the truth, you dont have to remember anything.'},
];

let lastIndex = -1;

function generateQuote(){
  let random;
  do {
    random = Math.floor(Math.random() * arrayOfQuotes.length);
  } while(random === lastIndex);

  lastIndex = random;

  const quote = arrayOfQuotes[random];
  document.querySelector('#quoteOutput').textContent = '"' + quote.quote + '"';
  document.querySelector('#authorOutput').textContent = '-' + quote.author + '-';

}