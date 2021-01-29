import {useState} from 'react';
import DecksListContainer from '../../components/DecksListContainer/DecksListContainer'

export default function DecksListPage({ decks, handleDeleteDeck }) {
  
  console.log(typeof handleDeleteDeck)

  return (
    <>
      <h1>My Decks</h1>
      <DecksListContainer decks={decks} handleDeleteDeck={handleDeleteDeck} />
    </>
  )
}