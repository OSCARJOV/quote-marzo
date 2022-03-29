import React, { useState } from 'react';
import './App.css';
import Quote from "./Quote.json";
import Colors from './colorsRandom';



function App() {

  const quotesArray = (Quote.quotes)
  const [quote, setQuote] = useState("Life isn’t about getting and having, it’s about giving and being. ");
  const [author, setAuthor] = useState("Kevin Kruse");
  const [randomNumber, setRandomNumber] = useState(0)

  const getRandomQuote = () => {
    let randomInteger = Math.floor(quotesArray.length*Math.random())
    setRandomNumber(randomInteger)
    setAccentColor(Colors[randomInteger])
    setQuote(quotesArray[randomInteger].quote)
    setAuthor(quotesArray[randomInteger].author)
  }
  const [accentColor, setAccentColor] = useState('#ff6347')

  
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: accentColor, color: accentColor}}>
        <div id='quote-box'>
        
        <p id="text">
          "{quote}"
        </p>
        <p id="author">- {author}</p>
        <a id="tweet-quote" href={`http://twitter.com/intent/tweet?text=${quote} -${author}`}> Cita Tweet</a>
        <button id="new-quote" onClick={() => getRandomQuote()}>Generar otra Cita</button>
        </div>
      </header>
    </div>
  );
}

export default App;
