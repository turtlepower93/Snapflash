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
        <div className="shdo-dk lt-bg-1">
          <div className="card-number">#{cardKey + 1}</div>
          <div
            className="disable-select delete-deck"
            onClick={handleDeleteCardWithKey}
          >
            <span className="delete-anim">×</span>
          </div>
          <div className="flx-spc-ard input-area-top">
            <label className="txt-left">Word:</label>
            <label className="txt-left">Definition:</label>
          </div>
          <div className="flx-spc-ard input-area-bottom">
            <textarea
              required
              maxLength="25"
              className="flx-item-big"
              type="text"
              onChange={handleChangeWithKey}
              name="word"
              value={card.word}
            />
            <textarea
              required
              maxLength="100"
              className="flx-item-big"
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
