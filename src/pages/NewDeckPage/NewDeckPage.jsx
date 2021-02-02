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
  const [invalidForm, setInvalidForm] = useState(true);
  const [addingNewCard,setAddingNewCard] = useState(true)
        
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
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const cardsArr = [...cards];
    cardsArr.push(newCard);
    handleAddDeck(deck,cardsArr);
    history.push('/decks')
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

useEffect(() => {
  console.log()
  console.log('didi I happen')
    formRef.current.checkValidity() ? setInvalidForm(false) : setInvalidForm(true)
},[[handleCardInputChange, handleCardInputChange, handleDeckInputChange, handleDeleteCard]])

useEffect(() => {
  console.log(cards,deck,newCard)
  if(newCard.word === '') {
    setInvalidForm(true);
  }
},[[checkIfTab]])



  return (
    <>
      {/* HeaderText */}
      <div className="container md-bg">
        <div className="big-txt txt-white txt-left"><span className="md-txt-2 txt-dk">Name: </span>
        {deck.name === '' ? 
          <span style={{opacity:'50%',fontStyle:"italic"}}>newDeck</span>
          :
          <span>{deck.name}</span>
        }
        </div>
        <div className="md-txt-2 txt-white txt-left"><span className="md-txt-1 txt-dk">Description: </span> 
        {deck.description === '' ? 
          <span style={{opacity:'50%',fontStyle:"italic"}}>desciption</span>
          :
          <span>{deck.description}</span>
        }
        </div>
        {/* Form */}
        {/* form descriptors */}
        <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
          <div className="shdo-dk lt-bg-2">
            <div className="flx-spc-ard input-area-top">
              <label className="txt-left">Name:</label>
              <label className="txt-left">Description:</label>
            </div>
            <div className="flx-spc-ard input-area-bottom">
              <textarea required className="flx-item-big" name="name"  type="text" onChange={handleDeckInputChange}/>
              <textarea required className="flx-item-big" name="description" type="text" onChange={handleDeckInputChange}/>
            </div>
          </div>
          
          {/* Cards */}
          {cards.map((c,idx) => 
            <AddCard 
              card={c} 
              handleCardsInputChange={handleCardsInputChange} 
              cardKey={idx}
              handleCardsDelete={handleCardsDelete}
              />)}

          {/* AddNewCard */}
          { addingNewCard ?
            <>
              <div className="shdo-dk lt-bg-1">
              {/* If the card deck is empty, cant delete the new card input */}
              {cards.length===0?
              <>
              </> 
              :
              <div className="disable-select delete-deck" onClick={handleDeleteCard}>
                <span className="delete-anim">
                  ×
                </span>
              </div>  
              }
                <div className="flx-spc-ard input-area-top">
                  <label className="txt-left">Word:</label>
                  <label className="txt-left">Definition:</label>
                </div>
              <div className="flx-spc-ard">
                <textarea required className="flx-item-big" name="word" type="text" ref={wordInput} onChange={handleCardInputChange}/>
                <textarea required className="flx-item-big" name="definition" onKeyDown={(e) => checkIfTab(e)} type="text" ref={definitionInput} onChange={handleCardInputChange}/>
              </div>
                <div style={{padding:'1rem'}}>
                  Press Tab to add a new Card
                </div>
              </div>
            </>
            :
            <>
            </>
          }
        <button className="lt-bg-1 bdr-radius shdo-dk" id="add-deck-button" disabled={invalidForm}>Add New Deck</button>
        </form>
      {/* <button onClick={handleDeckBeGone}>Delete Deck!</button> */}
      </div>
    </>
  )
}