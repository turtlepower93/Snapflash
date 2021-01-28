import { useState } from 'react';

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