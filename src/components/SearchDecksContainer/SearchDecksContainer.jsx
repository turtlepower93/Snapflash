// import {useState} from 'react';
import Deck from '../Deck/Deck'

export default function SearchDecksContainer({ otherDecks, user }) {

    const deck = otherDecks.map((i,idx) => {
        return <Deck key={i._id} deck={i} currentUser={user}/>
    })
    

    return (
        <div className="container md-bg">
            <div className="txt-white big-txt">Other Users Decks</div>
                <div className="card-grid">
                    {deck}
                </div>
        </div>
    )
}