// import {useState} from 'react';
import Deck from '../Deck/Deck'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function SearchDecksContainer({ otherDecks, user }) {

    const deck = otherDecks.map((i,idx) => {
        console.log('In the map function' , i)
        return <Deck key={i._id} deck={i} currentUser={user}/>
    })
    
    console.log('returned from map' , deck)

    return (
        <>
            <h1>DecksContainer</h1>
            {deck}
        </>
    )
}