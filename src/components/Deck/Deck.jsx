import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './Deck.css'


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
        <div className="card" style={{width: "15rem", justifySelf:"center"}}>
        {currentUser._id === deck.user ?
            <span className="disable-select delete-deck"onClick={deleteDeck}>×</span>
            :
            <>
            </>
        }
                <div className="card-header">
                    <div>{deck.name}</div>
                    <span>Created By: <span style={{color:'blue'}}>{deck.userName}</span></span> 
                </div>
                <div className="card-body">
                    <div>{deck.description}</div>
                </div>
                    <div className="deck-buttons">
                    {currentUser._id === deck.user ?
                    <>
                        <Link className="cardl" to={{pathname: `/edit`, state:{deck}}}>UPDATE</Link>
                        <Link className="cardl" to={{pathname: '/list', state:{deck}}}>Study</Link>
                        <Link className="cardl" to={{pathname: '/flip', state:{deck}}}>Flip</Link>
                    </>
                    :
                    <>
    
                        <Link className="cardl" to={{pathname: '/list', state:{deck}}}>Study</Link>
                        <Link className="cardl" to={{pathname: '/flip', state:{deck}}}>Flip</Link>
    
                    </>                
                    }
                    </div>
        </div>       
        </>
    );
}
