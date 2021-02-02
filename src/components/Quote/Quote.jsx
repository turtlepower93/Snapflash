import { useState,useEffect, useRef } from 'react'

export default function Quote() {
  
  const [quote, setQuote] = useState('');
  const timerRef = useRef();
  const [quoteAnim, setQuoteAnim] = useState('quote-anim');

  //set initial fun smart people quote!
    useEffect(function() {
        console.log('did I run at start?')
        async function fetchFirst() {
            await fetch("https://type.fit/api/quotes")
            .then(function(response) {
            return response.json();
            })
            .then(function(data) {
            setQuote(data[Math.floor(Math.random()*1600)]);
            });
        }
    fetchFirst();
    }, []);
  
  //update quote!
  useEffect(function() {
    timerRef.current = setInterval(function() {
    setQuoteAnim('')
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
    return response.json();
  })
    .then(function(data) {
    setQuote(data[Math.floor(Math.random()*1600)]);
    setQuoteAnim('quote-anim')
  });
    }, 5000);
    return function() {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
      <div className={`quote-container ${quoteAnim}`}>
        <p>{quote.text}</p>
        { quote.author===undefined ?
        <p>-author unknown</p>
        :
        <p>-{quote.author}</p>
      }
      </div>
  )
}