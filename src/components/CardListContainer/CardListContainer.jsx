import { useState, useLocation } from 'react';
import Card from '../Card/Card'

export default function CardListContainer({deck}) {


    let card = deck.cards.map((c) => {
        return <Card card={c}/>
    })

    console.log(card)

    return (
        <>
            {card}
        </>
    );
}