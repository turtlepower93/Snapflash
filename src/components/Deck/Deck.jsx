import { Link } from 'react-router-dom'
import './Deck.css'


export default function Deck({ deck, handleDeleteDeck, currentUser }) {

    function deleteDeck(evt) {
        handleDeleteDeck(deck)
    }

    return (
        <>
        <div className="card shdo-dk" id="card-attributes" style={{width: "17rem", justifySelf:"center"}}>
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
                    <Link className="cardl lt-bg-3 txt-white md-txt-1" to={{pathname: `/edit`, state:{deck}}}>Update</Link>
                    <Link className="cardl lt-bg-2 md-txt-1" to={{pathname: '/list', state:{deck}}}>Study</Link>
                    <Link className="cardl lt-bg-3 md-txt-1" to={{pathname: '/flip', state:{deck}}}>Flip</Link>
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
