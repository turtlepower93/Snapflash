import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function NewCardInput({ cards }) {
    
    console.log(cards)
    return (
        <>
            <label>Word: </label>
            <input name="word" type="text"/>
            <label>Definition: </label>
            <input name="definition" type="text"/>
        </>
    );
}