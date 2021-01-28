import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CardListContainer from '../../components/CardListContainer/CardListContainer';

export default function CardsListViewPage() {
  
  

  const {state : {deck}} = useLocation()
  // const thisDeck = useLocation().state.deck
  // console.log(deck)
  return (
    <>
    <h1>View Card List Page</h1>
    {deck.name}: 
    {deck.description}
    <CardListContainer deck={deck} />
    </>
  )
}