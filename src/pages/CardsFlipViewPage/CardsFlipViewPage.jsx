import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../../components/Card/Card';
import FlipViewContainer from '../../components/FlipViewContainer/FlipViewContainer';

export default function CardsFlipViewPage() {
  

  const {state : {deck}} = useLocation()

  console.log(deck)

  return (
    <>
      <h1>Flippy Time</h1>
      <h2>Created By: {deck.user.name}</h2>
      <h2>Name Of Deck: {deck.name}</h2>
      <h2>Description: {deck.description}</h2>
      <FlipViewContainer deck={deck}/>
    </>
  )
}