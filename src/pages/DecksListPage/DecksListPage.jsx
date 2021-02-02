import { STATES } from 'mongoose';
import {useEffect, useState, useRef} from 'react';
import * as decksAPI from '../../utilities/decks-api'
import DecksListContainer from '../../components/DecksListContainer/DecksListContainer'

export default function DecksListPage({ decks, handleDeleteDeck, user }) {
  
  const [quote, setQuote] = useState('quote');
  
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const timerRef = useRef();

  useEffect(function() {
    timerRef.current = setInterval(function() {
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
    return response.json();
  })
    .then(function(data) {
    setQuote(data[Math.floor(Math.random()*1600)]);
  });
    }, 9000);
    return function() {
      clearInterval(timerRef.current);
    };
  }, []);


  async function handleQuoteClick() {
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
    return response.json();
  })
    .then(function(data) {
    setQuote(data[Math.floor(Math.random()*1600)]);
  });
  }

  

  // const [decks ,setDecks] = useState();

  // console.log('awfeipnwaeifunwaef', user)

  // useEffect( function() {
  //   async function getDecks() {
  //   const decksObj = await decksAPI.getAll();
  //   setDecks(decksObj)
  //   }
  //   getDecks();
  // },[])

  return (
    <>
      <div className="quote-container">
        <p>{quote.text}</p>
        <p>-{quote.author}</p>
      </div>
      <DecksListContainer decks={decks} handleDeleteDeck={handleDeleteDeck} user={user} />
    </>
  )
}