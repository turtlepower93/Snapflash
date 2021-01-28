import {useState} from 'react';
import DecksListContainer from '../../components/DecksListContainer/DecksListContainer'

export default function DecksListPage({ decks }) {
  
  

  return (
    <>
      <h1>My Decks</h1>
      <DecksListContainer decks={decks} />
    </>
  )
}