import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Deck({deck}) {
    
    console.log(deck)
    return (
        <>
                <div>{deck.name}</div>
                <div>{deck.description}</div>
                {/* <Link to={{pathname: '/edit', state:{deck}}}>UPDATE</Link> */}
                <Link to={{pathname: '/list', state:{deck}}}>List View</Link>
                {/* <Link to={{pathname: '/flip', state:{deck}}}>Flip View</Link> */}
                {/* Link to CardsFlipViewPage */}
                {/* Link to CardsListViewPage */}
        </>
    );
}