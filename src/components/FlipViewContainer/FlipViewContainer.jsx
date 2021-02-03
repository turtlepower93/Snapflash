import { useState } from 'react';

import CardFlip from '../../components/CardFlip/CardFlip';

export default function FlipViewContainer({ deck }) {

    const [currentCard, setCurrentCard] = useState(deck.cards[0])
    const [cardIdx, setCardIdx] = useState(1)

    function HandleChangeCard(evt) {
        let deckSize = deck.cards.length;
        let startingCard = currentCard;
        let whereAmI = deck.cards.indexOf(startingCard);

        if(evt.target.innerHTML === 'Previous') {
            whereAmI -= 1;
            if(whereAmI < 0) {
                whereAmI = deckSize-1;
            }
        }
        if(evt.target.innerHTML === 'Next') {
                whereAmI += 1;
            if(deck.cards[deckSize-1]._id === startingCard._id) {
                whereAmI = 0;
            }
        }
        setCardIdx(whereAmI + 1);
        setCurrentCard(deck.cards[whereAmI])
    }

    return (
    <>
        <CardFlip currentCard={currentCard} cardIdx={cardIdx}/>
        <span id="butt-grid">
            <button className="butt" onClick={HandleChangeCard}>Previous</button>
            <button className="butt" onClick={HandleChangeCard}>Next</button>
        </span>
    </>
    )
}