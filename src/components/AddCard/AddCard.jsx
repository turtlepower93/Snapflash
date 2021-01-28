import { useState, useEffect, useRef } from 'react';
import Component from 'react'

export default function AddCard({card, cardKey, handleCardsInputChange, handleCardsDelete}) {

    const focusForm = useRef(null);

    // useEffect(() => {
    //   focusForm.current.focus()
    // },[])

    function handleChangeWithKey(evt) {
        console.log({[evt.target.name]:evt.target.value})
        handleCardsInputChange(evt,cardKey);
    }

    function handleDeleteCardWithKey(evt) {
        console.log(evt.target.parentElement)
        
    }

    return (
        <>
            <div id={cardKey} >  
                <label htmlFor="">Word:</label>
                <input type="text" onChange={handleChangeWithKey} name="word" value={card.word}/>
                <label htmlFor="">Definition:</label>
                <input type="text" onChange={handleChangeWithKey} name="definition" value={card.definition}/>
                <p onClick={handleDeleteCardWithKey}>DELETE</p>
            </div>
        </>
    )
}
