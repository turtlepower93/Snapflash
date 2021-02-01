import { STATES } from 'mongoose';
import {useEffect, useState} from 'react';
import * as decksAPI from '../../utilities/decks-api'
import DecksListContainer from '../../components/DecksListContainer/DecksListContainer'

export default function DecksListPage({ decks, handleDeleteDeck, user }) {
  
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
      <DecksListContainer decks={decks} handleDeleteDeck={handleDeleteDeck} user={user} />
    </>
  )
}