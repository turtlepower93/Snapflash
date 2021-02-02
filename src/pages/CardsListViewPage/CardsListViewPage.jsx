import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CardListContainer from '../../components/CardListContainer/CardListContainer';

export default function CardsListViewPage() {
  
  const location = useLocation() 

  const {state : {deck}} = useLocation()

  // console.log(location)
  // console.log(deck)
  // const thisDeck = useLocation().state.deck
  // console.log(deck)
  return (
    <>
    <h1>View Card List Page</h1>
      <CardListContainer location={location} deck={deck} />
    </>
  )
}