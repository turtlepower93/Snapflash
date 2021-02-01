import {useState} from 'react';
import Deck from '../Deck/Deck'
import { useLocation } from 'react-router-dom'
import './DecksListContainer.css'

export default function DecksListContainer({ decks, handleDeleteDeck, user }) {


    const deck = decks.map((i,idx) => {
        console.log('In the map function' , i)
        return <Deck key={i._id} deck={i} handleDeleteDeck={handleDeleteDeck} currentUser={user} />
      })
    
      console.log('returned from map' , deck)

  return (
    <>
    <div className="container">
    <div className='big-txt txt-white'>My Decks</div>
      <div className="card-grid">
          {deck}
        </div>
    </div>
    </>
  )
}