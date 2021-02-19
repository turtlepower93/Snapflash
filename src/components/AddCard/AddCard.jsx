export default function AddCard({
  card,
  cardKey,
  handleCardsInputChange,
  handleCardsDelete,
}) {
  function handleChangeWithKey(evt) {
    handleCardsInputChange(evt, cardKey);
  }

  function handleDeleteCardWithKey(evt) {
    handleCardsDelete(cardKey);
  }

  return (
    <>
      <div id={cardKey}>
        <div className="shdo-dk lt-bg-1" style={{margin:'1rem auto 1rem autos'}}>
          <div className="card-number">#{cardKey + 1}</div>
          <div
            className="disable-select delete-deck"
            onClick={handleDeleteCardWithKey}
          >
            <span className="delete-anim">×</span>
          </div>
          <div id="mobile-deck-container" className="deck-container flx-spc-ard input-area-top">
            <label id="front-label" className="txt-left">Word:</label>
            <label id="back-label" className="txt-left">Definition:</label>
            <textarea
              required
              maxLength="25"
              id="front-textarea"
              type="text"
              onChange={handleChangeWithKey}
              name="word"
              value={card.word}
              />
            <textarea
              required
              maxLength="100"
              id="back-textarea"
              type="text"
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
