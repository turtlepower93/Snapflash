import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'


export default function Deck({ deck, handleDeleteDeck, currentUser }) {

    function deleteDeck(evt) {
        handleDeleteDeck(deck)
    }

    console.log('CURRNET', currentUser)

    console.log('deckuser ', deck)
    if(currentUser._id === deck.user) {
        console.log('THESE ARE MINE')
    }
    // console.log('HI IM ON THE DECK PAGE', deck )
    return (
        <>
                <div>CreatedBy: {deck.userName}</div>
                <div>{deck.name}</div>
                <div>{deck.description}</div>
                {currentUser._id === deck.user ?
                <>
                    <Link to={{pathname: `/edit`, state:{deck}}}>UPDATE</Link>
                    <Link to={{pathname: '/list', state:{deck}}}>List View</Link>
                    <Link to={{pathname: '/flip', state:{deck}}}>Flip View</Link>
                    <button onClick={deleteDeck}>DELETE</button>  
                </>
                :
                <>

                    <Link to={{pathname: '/list', state:{deck}}}>List View</Link>
                    <Link to={{pathname: '/flip', state:{deck}}}>Flip View</Link>

                </>                
                }

                
                {/* Link to CardsFlipViewPage */}
                {/* Link to CardsListViewPage */}
        </>
    );
}