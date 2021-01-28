import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import NewCardInput from '../../components/NewCardInput/NewCardInput'
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

  // function handleSubmit(evt){
  //   evt.preventDefault();
  //   console.log()
  //   console.log({
  //     ...cards, 
  //     [evt.target.name]: evt.target.value}
  //   )
  // };

  function handleCardInputChange(evt) {
    setNewCard({
      ...newCard,
      [evt.target.name]:evt.target.value
    })
  }

  function handleDeckInputChange(evt) {
    setDeck({
      ...deck,
      [evt.target.name]:evt.target.value
    })
  }

  function handleAddCard(newCardData) {
    const cardsArr = [...cards]
    console.log(cardsArr)
    cardsArr.push(newCardData) //newCardData should be its own object
    setCards(cardsArr) 
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const cardsArr = [...cards]
    cardsArr.unshift(newCard);
    handleAddDeck(deck,cardsArr);
  }

  return (
    <>
      <h1>Make a New Deck Here</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" type="text" onChange={handleDeckInputChange}/>
        <label>Description:</label>
        <input name="description" type="text" onChange={handleDeckInputChange}/>
        <label>Word:</label>
        <input name="word" type="text" onChange={handleCardInputChange}/>
        <label>Definition:</label>
        <input name="definition" type="text" onChange={handleCardInputChange}/>
        {cards.map((c) => <AddCard card={c}/>)}
        <button>submit</button>
      </form>
      <button onClick={() => handleAddCard(newCard)}>Add Card</button>

    </>
  )
}