import { useEffect, useState, useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";
import UpdateCard from "../../components/UpdateCard/UpdateCard";

export default function UpdateDeckPage({ handleUpdateDeck }) {
  let history = useHistory();

  const [updateDeck, setUpdateDeck] = useState({
    name: "",
    description: "",
  });
  const [newCard, setNewCard] = useState({
    word: "",
    definition: "",
  });
  const [cards, setCards] = useState([]);
  const {
    state: { deck },
  } = useLocation();
  const wordInput = useRef();
  const definitionInput = useRef();
  const formRef = useRef();
  const [invalidForm, setInvalidForm] = useState(false);
  const [addingNewCard, setAddingNewCard] = useState(true);

  // This unpacks the deck to set initial values
  useEffect(() => {
    setUpdateDeck({
      _id: deck._id,
      name: deck.name,
      description: deck.description,
      user: deck.user,
    });
    const cards = [...deck.cards];
    let dupeCards = [...cards];
    let lastCard = dupeCards.splice(-1, 1);
    wordInput.current.value = lastCard[0].word;
    definitionInput.current.value = lastCard[0].definition;
    setCards(dupeCards);
    setNewCard(lastCard[0]);
  }, []);

  //handles the input name of the new deck
  function handleDeckInputChange(evt) {
    setUpdateDeck({
      ...updateDeck,
      [evt.target.name]: evt.target.value,
    });
  }

  //handles the input change of the newest card
  function handleCardInputChange(evt) {
    setNewCard({
      ...newCard,
      [evt.target.name]: evt.target.value,
    });
  }

  //handles the input change of the rest of the cards
  function handleCardsInputChange(evt, idx) {
    const dupeCards = [...cards];
    dupeCards[idx][evt.target.name] = evt.target.value;
    setCards(dupeCards);
  }

  //adds new card to the deck of cards, resets new card
  async function handleAddCard(newCardData) {
    await setAddingNewCard(true);
    const cardsArr = [...cards];
    cardsArr.push(newCardData);
    setCards(cardsArr);
    setNewCard({
      word: "",
      definition: "",
    });
    wordInput.current.focus();
    wordInput.current.value = "";
    definitionInput.current.value = "";
  }

  function handleCardsDelete(key) {
    const dupeCards = [...cards];
    dupeCards.splice(key, 1);
    setCards(dupeCards);
  }

  function handleDeleteCard() {
    const dupeCards = [...cards];
    let lastCard = dupeCards.splice(-1, 1);
    wordInput.current.value = lastCard[0].word;
    definitionInput.current.value = lastCard[0].definition;
    setNewCard(lastCard[0]);
    setCards(dupeCards);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const cardsArr = [...cards];
    setUpdateDeck(updateDeck);
    cardsArr.push(newCard);
    handleUpdateDeck(updateDeck, cardsArr, deck._id);
    history.push("/decks");
  }

  function checkIfTab(e) {
    if (e.which === 9) {
      e.preventDefault();
      handleAddCard(newCard);
    }
  }

  useEffect(() => {
    formRef.current.checkValidity()
      ? setInvalidForm(false)
      : setInvalidForm(true);
  }, [
    [
      handleCardInputChange,
      handleCardInputChange,
      handleDeckInputChange,
      handleDeleteCard,
    ],
  ]);

  useEffect(() => {
    if (newCard.word === "") {
      setInvalidForm(true);
    }
  }, [[checkIfTab]]);

  return (
    <>
      {/* --------------Header */}
      <div className="container md-bg">
        <div className="big-txt txt-white txt-left header-size">
          <span id="mobile-front-tag" className="txt-dk">
            Name:{" "}
          </span>
          <span id="mobile-front">{updateDeck.name}</span>
        </div>
        <div className="md-txt-2 txt-white txt-left header-size">
          <span id="mobile-back-tag" className="txt-dk">
            Description:{" "}
          </span>
          <span id="mobile-back">{updateDeck.description}</span>
        </div>
        <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
          {/* ------------------DeckInput */}
          <div className="shdo-dk lt-bg-2">
            <div
              id="mobile-card-container"
              className="deck-container flx-spc-ard input-area-top"
            >
              <label id="front-label" className="txt-left">
                Name:
              </label>
              <label id="back-label" className="txt-left">
                Description:
              </label>
              <textarea
                required
                maxLength="25"
                name="name"
                id="front-textarea"
                type="text"
                defaultValue={updateDeck.name}
                onChange={handleDeckInputChange}
              />
              <textarea
                required
                maxLength="100"
                id="back-textarea"
                name="description"
                type="text"
                defaultValue={updateDeck.description}
                onChange={handleDeckInputChange}
              />
            </div>
          </div>

          {/* -------------------CardsInput */}
          {cards.map((c, idx) => (
            <UpdateCard
              card={c}
              handleCardsInputChange={handleCardsInputChange}
              cardKey={idx}
              handleCardsDelete={handleCardsDelete}
            />
          ))}

          {/* --------------------Delete display */}
          {addingNewCard ? (
            <div className="shdo-dk lt-bg-1">
              {/* If the card deck is empty, cant delete the new card input */}
              {cards.length === 0 ? (
                <></>
              ) : (
                <div
                  className="disable-select delete-deck"
                  onClick={handleDeleteCard}
                >
                  <span className="delete-anim">×</span>
                </div>
              )}

              {/* ------------------NewCardInput */}
              <div
                id="mobile-card-container"
                className="newcard-container flx-spc-ard input-area-top"
              >
                <label id="front-label" className="txt-left">
                  Word:
                </label>
                <label id="back-label" className="txt-left">
                  Definition:
                </label>
                <textarea
                  required
                  maxLength="25"
                  id="front-textarea"
                  name="word"
                  type="text"
                  ref={wordInput}
                  onChange={handleCardInputChange}
                />
                <textarea
                  required
                  maxLength="100"
                  id="back-textarea"
                  name="definition"
                  onKeyDown={checkIfTab}
                  type="text"
                  ref={definitionInput}
                  onChange={handleCardInputChange}
                />
                <div
                  id="tab-info"
                  onClick={() => handleAddCard(newCard)}
                  className="lt-bg-2 bdr-radius shdo-lt md-txt-2"
                >
                  Add Card
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          <button
            className="lt-bg-1 bdr-radius shdo-dk"
            id="add-deck-button"
            disabled={invalidForm}
          >
            Update {updateDeck.name}
          </button>
        </form>
      </div>
    </>
  );
}
