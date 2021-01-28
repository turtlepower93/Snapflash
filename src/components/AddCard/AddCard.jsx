import { useState, useEffect, useRef } from 'react';
import Component from 'react'

export default function AddCard({card, cardKey, handleCardsInputChange}) {

    const focusForm = useRef(null);

    // useEffect(() => {
    //   focusForm.current.focus()
    // },[])

    function handleChangeWithKey(evt) {
        console.log({[evt.target.name]:evt.target.value})
        handleCardsInputChange(evt,cardKey);
    }

    return (
        <>  
            <label htmlFor="">Word:</label>
            <input type="text" onChange={handleChangeWithKey} name="word" value={card.word}/>
            <label htmlFor="">Definition:</label>
            <input type="text" onChange={handleChangeWithKey} name="definition" value={card.definition}/>
        </>
    )
}
