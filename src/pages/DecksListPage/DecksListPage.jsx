import { useState,useEffect } from 'react'
import DecksListContainer from '../../components/DecksListContainer/DecksListContainer'
import Quote from '../../components/Quote/Quote'

export default function DecksListPage({ decks, handleDeleteDeck, user, handleHideDeck}) {
  // const [quote, setQuote] = useState('quote');
  // const timerRef = useRef();
  

  //get fun smart people quote!
  // useEffect(function() {
  //   timerRef.current = setInterval(function() {
  //   fetch("https://type.fit/api/quotes")
  //   .then(function(response) {
  //   return response.json();
  // })
  //   .then(function(data) {
  //   setQuote(data[Math.floor(Math.random()*1600)]);
  // });
  //   }, 9000);
  //   return function() {
  //     clearInterval(timerRef.current);
  //   };
  // }, []);

  return (
    <>
      <Quote></Quote>
      {/* <div className="quote-container">
        <p>{quote.text}</p>
        { quote.author==='' ?
        <p>-author unknown</p>
        :
        <p>-{quote.author}</p>
      }
      </div> */}
      <DecksListContainer decks={decks} handleDeleteDeck={handleDeleteDeck} user={user} handleHideDeck={handleHideDeck} />
    </>
  )
}