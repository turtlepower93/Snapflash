import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../../components/Card/Card';
import FlipViewContainer from '../../components/FlipViewContainer/FlipViewContainer';

export default function CardsFlipViewPage() {
  

  const {state : {deck}} = useLocation()



  return (
    <>
      <h1>I am a PAGE</h1>
      <h2>Name Of Deck: {deck.name}</h2>
      <h2>Description: {deck.description}</h2>
      <FlipViewContainer deck={deck}/>
    </>
  )
}