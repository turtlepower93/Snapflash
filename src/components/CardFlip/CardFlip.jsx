import './CardFlip.css'
import { useState } from 'react'

export default function CardFlip({currentCard, cardIdx}) {
    
    const [flipped,setFlip] = useState('');

    const flipCard = () => {
        if(flipped === '') {
            setFlip('flippit')
        } else {
            setFlip('')
        }
    }

    return (
        <div className="flex-ctr-ctr align-ctr">
            <div class={`flip-card ${flipped}`} onClick={flipCard}>
                <div  class={`flip-card-inner ${flipped}`}>
                    <div class="big-txt flip-card-front">
                        <div style={{opacity:'50%'}} className="card-index">{cardIdx}</div>
                        <div className="flex-ctr-ctr card-content">
                            <div className="flip-text">{currentCard.word}</div>
                        </div>
                    </div>
                    <div class="md-txt-2 flip-card-back">
                        <div className="flex-ctr-ctr card-content">
                            <div className="flip-text">{currentCard.definition}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}