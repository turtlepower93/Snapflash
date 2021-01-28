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
  const [addingNewCard, setAddingNewCard] = useState(true)
  
  console.log('HELLO I AM ON THE UPDATE PAGE', deck)
  
  //Checks to see that all fields have a value, otherwise the form is invalid.
    useEffect(() => {
      async function waitCheckValid() {
        await checkValidity();
      }
      waitCheckValid();
      }, [updateDeck,newCard,cards]);

    function checkValidity() {
      let hits = 0;
      let length = 0;
      // console.log(formRef)
      formRef.current.childNodes.forEach((n) => {
        // console.log(n)
        if(n.localName === 'textarea'){
          // console.log(n)
          length += 1
          if(n.value) {
            hits += 1;
          }
      }
      return hits === length ? setInvalidForm(false) : setInvalidForm(true);
      })
    }

  // This unpacks the deck to set initial values
  useEffect(() => {
    setUpdateDeck({
      name:deck.name,
      description:deck.description
    })
    const words = [...deck.cards]
    setCards(words);
  },[])

  //handles the input name of the new deck
  function handleDeckInputChange(evt) {
    // console.log({[evt.target.name]:evt.target.value})
    setUpdateDeck({
      ...deck,
      [evt.target.name]:evt.target.value
    })
  }

  //handles the input change of the newest card
  function handleCardInputChange(evt) {
    // console.log({[evt.target.name]:evt.target.value})
    setNewCard({
      ...newCard,
      [evt.target.name]:evt.target.value
    })
  }

  //handles the input change of the rest of the cards
  function handleCardsInputChange(evt,idx) {
    const dupeCards = [...cards]
    dupeCards[idx][evt.target.name] = evt.target.value;
    setCards(dupeCards);

  }

  //adds new card to the deck of cards, resets new card
  async function handleAddCard(newCardData) {
    await setAddingNewCard(true)
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
    if(newCard.definition === '' && newCard.name === '') {
      // console.log('state is empty')
    }
    cardsArr.push(newCard);
    handleUpdateDeck(deck,cardsArr,deck._id);
  }

  function checkIfTab(e) {
    if(e.which === 9) {
    e.preventDefault()
    handleAddCard(newCard)
    }
  }

  function handleCardsDelete(key) {

}

  async function handleDeleteCard() {

  }

  async function handleCardsDelete(key) {

}

  return (
    <>
      <h1>Make a New Deck Here</h1>
      <form autocomplete="off" ref={formRef} onSubmit={handleSubmit}>
        <label>Name:</label>
        <textarea name="name"  type="text" defaultValue={updateDeck.name} onChange={handleDeckInputChange}/>
        <label>Description:</label>
        <textarea name="description" type="text" defaultValue={updateDeck.description} onChange={handleDeckInputChange}/>
        {cards.map((c,idx) => 
          <UpdateCard 
            card={c} 
            handleCardsInputChange={handleCardsInputChange} 
            cardKey={idx}
            handleCardsDelete={handleCardsDelete}
            />)}
        { addingNewCard ?
          <>
            {/* {console.log('after I Hit add card')} */}
            <label>Word:</label>
            <textarea name="word" type="text" ref={wordInput} onChange={handleCardInputChange}/>
            <label>Definition:</label>
            <textarea name="definition" onKeyDown={checkIfTab} type="text" ref={definitionInput} onChange={handleCardInputChange}/>
            {cards.length===0 ?
            <>
            </> 
            :
            <p onClick={handleDeleteCard}>DELETE</p>
            }
            </>
            :
            <>
            </>
        }
        <button disabled={invalidForm}>submit</button>
      </form>
      {/* <button onClick={handleDeckBeGone}>Delete Deck!</button> */}
      <button onClick={() => handleAddCard(newCard)}>Add Card</button>
    </>
  )
}