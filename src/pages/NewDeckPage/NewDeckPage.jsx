import { waitForElementToBeRemoved } from '@testing-library/react';
import { useState, useRef, useEffect } from 'react';
import AddCard from '../../components/AddCard/AddCard'

export default function NewDeckPage({ handleAddDeck, handleDeleteDeck }) {
  // useRef to check validity (all cards have definitions)
  // const deck = useLocation().state.deck;
  const [deck,setDeck] = useState({
    name:'',
    description:''
  });
  const [newCard,setNewCard] = useState({
    word:'',
    definition:''
  });
  const [cards,setCards] = useState([]);

  const wordInput = useRef();
  const definitionInput = useRef();
  const formRef = useRef();
  const [invalidForm, setInvalidForm] = useState(false);
  const [deckBeGone, setDeckBeGone] = useState(false)


  //Checks to see that all fields have a value, otherwise the form is invalid.
  useEffect(() => {
    let hits = 0;
    let length = 0;
    formRef.current.childNodes.forEach((n) => {
      if(n.localName === 'input'){
        length += 1
        if(n.value) {
          hits += 1;
        }
    }
    hits === length ? setInvalidForm(false) : setInvalidForm(true);
    })
  }, [newCard, cards, deck]);
  

  // useEffect(() => {
  //   focusFirst.current.focus()
  // },[])

  function handleCardInputChange(evt) {
    console.log({[evt.target.name]:evt.target.value})
    setNewCard({
      ...newCard,
      [evt.target.name]:evt.target.value
    })
  }

  function handleDeckInputChange(evt) {
    console.log({[evt.target.name]:evt.target.value})
    setDeck({
      ...deck,
      [evt.target.name]:evt.target.value
    })
  }

  function handleCardsInputChange(evt,idx) {
    const dupeCards = [...cards]
    dupeCards[idx][evt.target.name] = evt.target.value;
    setCards(dupeCards);
  }

  function handleAddCard(newCardData) {
    const cardsArr = [...cards];
    cardsArr.push(newCardData);
    setCards(cardsArr);
    setNewCard({
      word:'',
      definition:''
    });
    wordInput.current.focus();
    wordInput.current.value = '';
    definitionInput.current.value = '';
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const cardsArr = [...cards];
    cardsArr.push(newCard);
    handleAddDeck(deck,cardsArr);
  }

  function checkIfTab(e) {
    if(e.which === 9) {
    e.preventDefault()
    handleAddCard(newCard)
    }
  }

  useEffect(() =>{
    setDeck({
      name:'',
      description:''
    });
    setNewCard({
      word:'',
      definition:''
    });
    setCards([]);
    console.log(deck, 'and', cards)
    setDeckBeGone(false);
  },[deckBeGone])
  
  function handleDeckBeGone() {
    setDeckBeGone(true)
  }

  return (
    <>
      <h1>Make a New Deck Here</h1>
      <form autocomplete="off" ref={formRef} onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name"  type="text" onChange={handleDeckInputChange}/>
        <label>Description:</label>
        <input name="description" type="text" onChange={handleDeckInputChange}/>
        {cards.map((c,idx) => <AddCard card={c} handleCardsInputChange={handleCardsInputChange} cardKey={idx}/>)}
        <label>Word:</label>
        <input name="word" type="text" ref={wordInput} onChange={handleCardInputChange}/>
        <label>Definition:</label>
        <input name="definition" onKeyDown={checkIfTab} type="text" ref={definitionInput} onChange={handleCardInputChange}/>
        <button disabled={invalidForm}>submit</button>
      </form>
      <button onClick={handleDeckBeGone}>Delete Deck!</button>
      <button onClick={() => handleAddCard(newCard)}>Add Card</button>
    </>
  )
}