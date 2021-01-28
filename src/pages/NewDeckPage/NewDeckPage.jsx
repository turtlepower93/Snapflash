import { useState, useRef, useEffect } from 'react';
import AddCard from '../../components/AddCard/AddCard'

export default function NewDeckPage({ handleAddDeck }) {
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

  const focusFirst = useRef();
  const wordInput = useRef();
  const definitionInput = useRef();
  const formRef = useRef();
  const [invalidForm, setInvalidForm] = useState(true);

  //CHECK FORM VALIDITY!!!
  //iterate over all childs

  useEffect(() => {
    console.log(formRef)
    formRef.current.checkValidity() ? setInvalidForm(false) : setInvalidForm(true);
    console.log(formRef.current.children)
  }, [cards,newCard]);
  

  useEffect(() => {
    focusFirst.current.focus()
  },[])

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

  return (
    <>
      <h1>Make a New Deck Here</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" ref={focusFirst} type="text" onChange={handleDeckInputChange}/>
        <label>Description:</label>
        <input name="description" type="text" onChange={handleDeckInputChange}/>
        {cards.map((c,idx) => <AddCard card={c} handleCardsInputChange={handleCardsInputChange} cardKey={idx}/>)}
        <label>Word:</label>
        <input name="word" type="text" ref={wordInput} onChange={handleCardInputChange}/>
        <label>Definition:</label>
        <input name="definition" type="text" ref={definitionInput} onChange={handleCardInputChange}/>
        <button disabled={invalidForm}>submit</button>
      </form>
      <button onClick={() => handleAddCard(newCard)}>Add Card</button>

    </>
  )
}