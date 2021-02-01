import { useEffect, useState, useRef } from 'react';
import { useLocation, useHistory} from 'react-router-dom'
import Card from '../../components/AddCard/AddCard'
import UpdateCard from '../../components/UpdateCard/UpdateCard'

export default function UpdateDeckPage({ handleUpdateDeck }) {
  
  let history = useHistory();

  const [updateDeck,setUpdateDeck] = useState({
    name:'',
    description:'',
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
  
  // console.log('HELLO I AM ON THE UPDATE PAGE', deck)

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
  }, [cards, updateDeck, newCard]);

  // This unpacks the deck to set initial values
  useEffect(() => {
    console.log(deck)
    setUpdateDeck({
      _id:deck._id,
      name:deck.name,
      description:deck.description,
      user:deck.user
    })
    const cards = [...deck.cards]
    let dupeCards = [...cards]
    let lastCard = dupeCards.splice(-1,1)
    wordInput.current.value = lastCard[0].word
    definitionInput.current.value = lastCard[0].definition
    setCards(dupeCards);
    setNewCard(lastCard[0])
  },[])

  //handles the input name of the new deck
  function handleDeckInputChange(evt) {
    // console.log({[evt.target.name]:evt.target.value})
    setUpdateDeck({
      ...updateDeck,
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
    setInvalidForm(true)
  }

  function handleCardsDelete(key) {
    const dupeCards = [...cards]
    dupeCards.splice(key,1);
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

  function handleSubmit(evt) {
    evt.preventDefault();
    const cardsArr = [...cards];
    console.log(updateDeck);
    setUpdateDeck(updateDeck);
    cardsArr.push(newCard);
    handleUpdateDeck(updateDeck,cardsArr,deck._id);
    history.push('/decks')
  }


  // function handleSubmit(evt) {
  //   evt.preventDefault();
  //   const cardsArr = [...cards];
  //   //setUpdateDeck(updateDeck)
  //   cardsArr.push(newCard);
  //   console.log(cardsArr, updateDeck)
  //   handleUpdateDeck(updateDeck,cardsArr,deck._id);
  // }

  function checkIfTab(e) {
    if(e.which === 9) {
    e.preventDefault()
    handleAddCard(newCard)
    }
  }

  return (
    <>
      <div className="container md-bg">
      <div className="big-txt txt-white txt-left"><span className="md-txt-2 txt-dk">Name: </span>{updateDeck.name}</div>
      <div className="md-txt-2 txt-white txt-left"><span className="md-txt-1 txt-dk">Description: </span>{updateDeck.description}</div>
      
      <form autocomplete="off" ref={formRef} onSubmit={handleSubmit}>

        <div className="shdo-dk lt-bg-2">
            <div className="flx-spc-ard input-area-top">
              <label className="txt-left">Name:</label>
              <label className="txt-left">Description:</label>
            </div>
            <div className="flx-spc-ard input-area-bottom">
              <textarea className="flx-item-big" name="name"  type="text" defaultValue={updateDeck.name} onChange={handleDeckInputChange}/>
              <textarea className="flx-item-big" name="description" type="text" defaultValue={updateDeck.description} onChange={handleDeckInputChange}/>
            </div>
        </div>



        {cards.map((c,idx) => 
          <UpdateCard 
            card={c} 
            handleCardsInputChange={handleCardsInputChange} 
            cardKey={idx}
            handleCardsDelete={handleCardsDelete}
            />)}
          { addingNewCard ?
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
                  <textarea className="flx-item-big" name="word" type="text" ref={wordInput} onChange={handleCardInputChange}/>
                  <textarea className="flx-item-big" name="definition" onKeyDown={checkIfTab} type="text" ref={definitionInput} onChange={handleCardInputChange}/>
                </div>
                <div style={{padding:'1rem'}}>
                  Press Tab to add a new Card
                </div>
              </div>
            :
            <>
            </>
          }            
        <button className="lt-bg-1 bdr-radius shdo-dk" id="add-deck-button" disabled={invalidForm}>Update {updateDeck.name}</button>
      </form>
      </div>
    </>
  )
}