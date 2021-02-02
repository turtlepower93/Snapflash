export default function UpdateCard({card, cardKey, handleCardsInputChange, handleCardsDelete}) {

    function handleChangeWithKey(evt) {
        console.log({[evt.target.name]:evt.target.value})
        handleCardsInputChange(evt,cardKey);
    }

    function handleDeleteCardWithKey() {
        handleCardsDelete(cardKey);
    }

    return (
        <>  
            <div id={cardKey}>  
                    <div className="shdo-dk lt-bg-1">
                        <div className="card-number">#{cardKey + 1}</div>
                        <div className="disable-select delete-deck" onClick={handleDeleteCardWithKey}>
                            <span className="delete-anim">
                                ×
                            </span>
                        </div>
                        <div className="flx-spc-ard input-area-top">
                                <label className="txt-left" htmlFor="">Word:</label>
                                <label className="txt-left" htmlFor="">Definition:</label>
                        </div>
                        <div className="flx-spc-ard input-area-bottom">
                            <textarea className="flx-item-big" type="text" onChange={handleChangeWithKey} name="word" value={card.word}/>
                            <textarea className="flx-item-big" type="text" onChange={handleChangeWithKey} name="definition" value={card.definition}/>
                        </div>      
                    </div>
            </div>
        </>
    )
}