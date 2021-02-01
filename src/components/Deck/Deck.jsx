import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './Deck.css'


export default function Deck({ deck, handleDeleteDeck, currentUser }) {

    function deleteDeck(evt) {

        handleDeleteDeck(deck)
    }

    // console.log('CURRNET', currentUser)

    // console.log('deckuser ', deck)
    if(currentUser._id === deck.user) {
        console.log('THESE ARE MINE')
    }
    // console.log('HI IM ON THE DECK PAGE', deck )
    return (
        <>
        <div className="card shdo-dk" id="card-attributes" style={{width: "15rem", justifySelf:"center"}}>
        {currentUser._id === deck.user ?
            <span className="disable-select delete-deck" onClick={deleteDeck}>×</span>
            :
            <>
            </>
        }
                <div className="card-head lt-bg-1">
                    <div className="md-txt-3">{deck.name}</div>
                    <span >Created By: <span style={{color:'blue'}}>{deck.userName}</span></span> 
                </div>
                <div className="card-body wt-bg md-txt-1">
                    <div>{deck.description}</div>
                </div>
                {currentUser._id === deck.user ?
                <div className="deck-buttons three-buts txt-white-a">
                    <Link className="cardl lt-bg-3 txt-white" to={{pathname: `/edit`, state:{deck}}}>UPDATE</Link>
                    <Link className="cardl lt-bg-2" to={{pathname: '/list', state:{deck}}}>Study</Link>
                    <Link className="cardl lt-bg-3" to={{pathname: '/flip', state:{deck}}}>Flip</Link>
                </div>
                :
                <div className="deck-buttons two-buts txt-white-a">
                    <Link className="cardl lt-bg-2" to={{pathname: '/list', state:{deck}}}>Study</Link>
                    <Link className="cardl lt-bg-3" to={{pathname: '/flip', state:{deck}}}>Flip</Link>
                </div>             
                }
        </div>       
        </>
    );
}
