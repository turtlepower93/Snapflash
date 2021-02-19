export default function UpdateCard({
  card,
  cardKey,
  handleCardsInputChange,
  handleCardsDelete,
}) {
  function handleChangeWithKey(evt) {
    handleCardsInputChange(evt, cardKey);
  }

  function handleDeleteCardWithKey() {
    handleCardsDelete(cardKey);
  }

  return (
    <>
      <div id={cardKey}>
        <div className="shdo-dk lt-bg-1" style={{margin:'1rem auto 1rem auto'}}>
          <div className="card-number">#{cardKey + 1}</div>
          <div
            className="disable-select delete-deck"
            onClick={handleDeleteCardWithKey}
          >
            <span className="delete-anim">×</span>
          </div>
          <div id="mobile-deck-container" className="deck-container flx-spc-ard input-area-top">
            <label id="front-label" className="txt-left" htmlFor="">
              Word:
            </label>
            <label id="back-label" className="txt-left" htmlFor="">
              Definition:
            </label>
            <textarea
              type="text"
              id="front-textarea"
              onChange={handleChangeWithKey}
              name="word"
              value={card.word}
            />
            <textarea
              type="text"
              id="back-textarea"
              onChange={handleChangeWithKey}
              name="definition"
              value={card.definition}
            />
        </div>
      </div>
    </div>
    </>
  );
}
