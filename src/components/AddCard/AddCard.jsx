import { useState, useEffect, useRef } from 'react';
import Component from 'react'

export default function AddCard({card, cardKey, handleCardsInputChange, handleCardsDelete}) {

    function handleChangeWithKey(evt) {
        console.log({[evt.target.name]:evt.target.value})
        handleCardsInputChange(evt,cardKey);
    }

    function handleDeleteCardWithKey(evt) {
        handleCardsDelete(cardKey);
    }

    return (
        <>
            <div id={cardKey}>  
                <label htmlFor="">Word:</label>
                <textarea type="text" onChange={handleChangeWithKey} name="word" value={card.word}/>
                <label htmlFor="">Definition:</label>
                <textarea type="text" onChange={handleChangeWithKey} name="definition" value={card.definition}/>
                <p onClick={handleDeleteCardWithKey}>DELETE</p>
            </div>
        </>
    )
}
