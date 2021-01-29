import { useState } from 'react';
import './Card.css'

export default function Card({card}) {
    
    return (
        <>
        <div>
            {card.word}
        </div>
        <div>
            {card.definition}
        </div>
        </>
    );
}