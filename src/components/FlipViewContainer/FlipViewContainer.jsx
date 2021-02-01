import { useState } from 'react';

import CardFlip from '../../components/CardFlip/CardFlip';

export default function FlipViewContainer({ deck }) {

    const [currentCard, setCurrentCard] = useState(deck.cards[0])
    const [cardIdx, setCardIdx] = useState(1)

    function HandleChangeCard(evt) {
        let deckSize = deck.cards.length;
        let startingCard = currentCard;
        let whereAmI = deck.cards.indexOf(startingCard);

        console.log(startingCard);
        if(evt.target.innerHTML === 'Previous') {
            console.log('boop left');
            whereAmI -= 1;
            if(whereAmI < 0) {
                console.log('GotoEndOFDeck');
                whereAmI = deckSize-1;
            }
        }
        if(evt.target.innerHTML === 'Next') {
            console.log('boop Right');
            whereAmI += 1;
            if(deck.cards[deckSize-1]._id === startingCard._id) {
                console.log('GotoStartOFDeck');
                whereAmI = 0;
            }
        }
        console.log(whereAmI)
        setCardIdx(whereAmI + 1);
        setCurrentCard(deck.cards[whereAmI])
    }
    console.log(currentCard);

    return (
    <>
    <div>
        <CardFlip currentCard={currentCard} cardIdx={cardIdx}/>
    </div>
    <span id="butt-grid">
        <button className="butt" onClick={HandleChangeCard}>Previous</button>
        <button className="butt" onClick={HandleChangeCard}>Next</button>
    </span>
    </>
    )
}