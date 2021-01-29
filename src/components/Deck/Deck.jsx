import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function Deck({ deck, handleDeleteDeck }) {

    function deleteDeck(evt) {
        handleDeleteDeck(deck)
    }

    console.log('HI IM ON THE DECK PAGE', deck )
    return (
        <>
                <div>{deck.name}</div>
                <div>{deck.description}</div>
                <Link to={{pathname: `/edit`, state:{deck}}}>UPDATE</Link>
                <Link to={{pathname: '/list', state:{deck}}}>List View</Link>
                <Link to={{pathname: '/flip', state:{deck}}}>Flip View</Link>
                <button onClick={deleteDeck}>DELETE</button>
                {/* Link to CardsFlipViewPage */}
                {/* Link to CardsListViewPage */}
        </>
    );
}