import {useState} from 'react';
import Deck from '../Deck/Deck'
import { useLocation } from 'react-router-dom'

export default function DecksListContainer({ decks, handleDeleteDeck }) {

  console.log(typeof handleDeleteDeck)

    const deck = decks.map((i,idx) => {
        console.log('In the map function' , i)
        return <Deck key={i._id} deck={i} handleDeleteDeck={handleDeleteDeck}/>
      })
    
      console.log('returned from map' , deck)

  return (
    <>
      <h1>DecksContainer</h1>
      {deck}
    </>
  )
}