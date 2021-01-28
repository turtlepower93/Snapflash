import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom'
import Card from '../../components/AddCard/AddCard'
import UpdateCard from '../../components/UpdateCard/UpdateCard'

export default function UpdateDeckPage({ handleUpdateDeck }) {
  
  const [updateDeck,setUpdateDeck] = useState({
    name:'',
    description:''
  });
  const [newCard,setNewCard] = useState({
    word:'',
    definition:''
  });
  const [cards,setCards] = useState([]);

  const {state : {deck}} = useLocation()
  const wordInput = useRef();
  const definitionInput = useRef();
  const formRef = useRef();
  const [invalidForm, setInvalidForm] = useState(false);
  const [isAddingCards, setIsAddingCards] = useState(false)
  
  console.log('HELLO I AM ON THE UPDATE PAGE', deck)
  
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
    }, [newCard, cards, updateDeck]);

  // This unpacks the deck to set initial values
  useEffect(() => {
    setUpdateDeck({
      name:deck.name,
      description:deck.description
    })
    const words = [...deck.cards]
    setCards(words);
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
    setUpdateDeck({
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
    handleUpdateDeck(deck,cardsArr,deck._id);
  }

  function checkIfTab(e) {
    if(e.which === 9) {
    e.preventDefault()
    handleAddCard(newCard)
    }
  }

  function changeAddCardState() {
    setIsAddingCards(!isAddingCards)
  }

  return (
    <>
      <h1>Make a New Deck Here</h1>
      <form autocomplete="off" ref={formRef} onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" defaultValue={deck.name} type="text" onChange={handleDeckInputChange}/>
        <label>Description:</label>
        <input name="description" defaultValue={deck.description} type="text" onChange={handleDeckInputChange}/>
        {cards.map((c,idx) => <UpdateCard card={c} handleCardsInputChange={handleCardsInputChange} cardKey={idx}/>)}
          { isAddingCards?
          <>
          <label>Word:</label>
          <input name="word" type="text" ref={wordInput} onChange={handleCardInputChange}/>
          <label>Definition:</label>
          <input name="definition" onKeyDown={checkIfTab} type="text" ref={definitionInput} onChange={handleCardInputChange}/>
          <button disabled={invalidForm}>submit</button>
          </>
          :
          <>
          </>
          }
      </form>
      {
        isAddingCards?
          <button onClick={() => handleAddCard(newCard)}>Add Card</button>
          :<button onClick={changeAddCardState}>Add some new cards</button>
      }



    </>
  )
}