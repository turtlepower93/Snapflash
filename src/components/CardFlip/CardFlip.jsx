import './CardFlip.css'

export default function CardFlip({currentCard, cardIdx}) {
    
    return (
        <div className="flex-ctr-ctr align-ctr">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div className="card-index">{cardIdx}</div>
                        <div className="flex-ctr-ctr card-content">{currentCard.word}</div>
                    </div>
                    <div class="flip-card-back">
                        <div className="flex-ctr-ctr card-content">{currentCard.definition}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}