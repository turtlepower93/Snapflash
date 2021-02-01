import { waitForElementToBeRemoved } from '@testing-library/react';
import { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import AddCard from '../../components/AddCard/AddCard'

export default function NewDeckPage({ handleAddDeck }) {
  // useRef to check validity (all cards have definitions)
  // const deck = useLocation().state.deck;
  
  const history = useHistory()
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
  const [addingNewCard,setAddingNewCard] = useState(true)
  // const [changeInChild,setChangeInChild] = useState(false)


  //Checks to see that all fields have a value, otherwise the form is invalid.
  useEffect(() => {
    // console.log('Am I Running?')
    let hits = 0;
    let length = 0;
    // console.log(formRef)
    formRef.current.childNodes.forEach((n) => {
      // console.log(n)
      if(n.localName === 'textarea'){
        length += 1
        if(n.value) {
          hits += 1;
        }
      }
      if(n.localName === 'div') {
        n.childNodes.forEach((c) => {
          if(c.localName === 'textarea'){
            length += 1
            if(c.value) {
              hits += 1;
            }
        }
        })
      }
    })
    // console.log("I say the form is: ", invalidForm, ' hits=',hits, ' length=', length )
    if (hits === length) {
      setInvalidForm(false)
    } else {
      setInvalidForm(true)
    }
  }, [cards, deck, newCard]);
  

  // useEffect(() => {
  //   focusFirst.current.focus()
  // },[])

  function handleCardInputChange(evt) {
    // console.log({[evt.target.name]:evt.target.value})
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
    setInvalidForm(true);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const cardsArr = [...cards];
    cardsArr.push(newCard);
    handleAddDeck(deck,cardsArr);
    history.push('/')
  }

  function checkIfTab(e) {
    if(e.which === 9) {
    e.preventDefault()
    handleAddCard(newCard)
    }
  }

  function handleCardsDelete(key) {
    console.log('Hello?')
    const dupeCards = [...cards]
    dupeCards.splice(key,1);
    console.log(dupeCards)
    setCards(dupeCards);
}

function handleDeleteCard() {
  const dupeCards = [...cards];
  let lastCard = dupeCards.splice(-1,1);

  wordInput.current.value = lastCard[0].word
  definitionInput.current.value = lastCard[0].definition
  setNewCard(lastCard[0]);
  setCards(dupeCards);
}

  // -----Delete contents of inputs when deck is pressed
  // useEffect(() =>{
  //   setDeck({
  //     name:'',
  //     description:''
  //   });
  //   setNewCard({
  //     word:'',
  //     definition:''
  //   });
  //   setCards([]);
  //   console.log(deck, 'and', cards)
  //   setDeckBeGone(false);
  // },[deckBeGone])
  
  // function handleDeckBeGone() {
  //   setDeckBeGone(true)
  // }
  // console.log(invalidForm)
  return (
    <>
      <div className="container md-bg">
      <div className="big-txt txt-white">Make a New Deck Here</div>
        <form autocomplete="off" ref={formRef} onSubmit={handleSubmit}>
          <div className="name-description-container shdo-dk lt-bg-1">
            <label>Name:</label>
            <textarea name="name"  type="text" onChange={handleDeckInputChange}/>
            <label>Description:</label>
            <textarea name="description" type="text" onChange={handleDeckInputChange}/>
          </div>
          {cards.map((c,idx) => 
            <AddCard 
              card={c} 
              handleCardsInputChange={handleCardsInputChange} 
              cardKey={idx}
              handleCardsDelete={handleCardsDelete}
              />)}
          { addingNewCard ?
            <>
              <label>Word:</label>
              <textarea name="word" type="text" ref={wordInput} onChange={handleCardInputChange}/>
              <label>Definition:</label>
              <textarea name="definition" onKeyDown={checkIfTab} type="text" ref={definitionInput} onChange={handleCardInputChange}/>
              {cards.length===0?
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
      </div>
      {/* <button onClick={handleDeckBeGone}>Delete Deck!</button> */}
      <button onClick={() => handleAddCard(newCard)}>Add Card</button>
    </>
  )
}