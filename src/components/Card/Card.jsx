import { useState } from 'react';

export default function Card({card}) {
    
    return (
        <>  
            <label htmlFor="">Word:</label>
            <input type="text" value={card.word}/>
            <label htmlFor="">Definition:</label>
            <input type="text" value={card.definition}/>
        </>
    );
}