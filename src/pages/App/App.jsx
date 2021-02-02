import { useState, useEffect, useRef } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import * as decksAPI from '../../utilities/decks-api'
import AuthPage from '../AuthPage/AuthPage';
import NewDeckPage from '../NewDeckPage/NewDeckPage';
import DecksListPage from '../DecksListPage/DecksListPage';
import CardsListViewPage from '../CardsListViewPage/CardsListViewPage';
import CardsFlipViewPage from '../CardsFlipViewPage/CardsFlipViewPage';
import SearchDecksPage from '../SearchDecksPage/SearchDecksPage';
import UpdateDeckPage from '../UpdateDeckPage/UpdateDeckPage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [decks, setDecks] = useState([]);
  const [quote, setQuote] = useState('quote');
  const timerRef = useRef();

  //get fun smart people quote!
  useEffect(function() {
    timerRef.current = setInterval(function() {
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
    return response.json();
  })
    .then(function(data) {
    setQuote(data[Math.floor(Math.random()*1600)]);
  });
    }, 9000);
    return function() {
      clearInterval(timerRef.current);
    };
  }, []);
  //get the decks from server and set the state
  useEffect( function() {
    async function getDecks() {
      if(user) {
        const decksObj = await decksAPI.getAll();
        setDecks(decksObj)
      }
    }
    getDecks()
  },[user])

    async function handleAddDeck(newDeckData, newCardsData) {
      newDeckData.cards = newCardsData;
      const newDeck = await decksAPI.createDeck(newDeckData);
      setDecks([
        ...decks,
        newDeck
      ])
  }

  async function handleUpdateDeck(updateDeckData, UpdateCardsData) {
    updateDeckData.cards = UpdateCardsData;
    const updateDeck = await decksAPI.updateDeck(updateDeckData);
    let dupeDecks = [...decks];
    dupeDecks = dupeDecks.filter((d) => 
      d._id !== updateDeck._id
    )
    setDecks([
      ...dupeDecks,
      updateDeck
    ])
  }

    // async function handleUpdateDeck(updateDeckData, UpdateCardsData) {
    //   updateDeckData.cards = UpdateCardsData;
    //   const updateDeck = await decksAPI.updateDeck(updateDeckData);
    //   console.log(decks, updateDeck)
    //   setDecks([
    //     ...decks,
    //     updateDeck
    //   ]);
    // }

    async function handleDeleteDeck(deck){
      await decksAPI.deleteDeck(deck);
      const decksObj = await decksAPI.getAll();
      setDecks(decksObj)
    }

  return (
    <main id="background" className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Switch>
            <div className="container-main">
                <Route path="/new">
                  <NewDeckPage handleAddDeck={handleAddDeck}/>
                </Route>
                <Route path="/decks">
                  <DecksListPage quote={quote} user={user} decks={decks} handleDeleteDeck={handleDeleteDeck} />
                </Route>
                <Route path="/list">
                  <CardsListViewPage />
                </Route>
                <Route path="/flip">
                  <CardsFlipViewPage />
                </Route>
                <Route path="/edit">
                  <UpdateDeckPage handleDeleteDeck={handleDeleteDeck} handleUpdateDeck={handleUpdateDeck}/>
                </Route>
                <Route path="/search">
                  <SearchDecksPage user={user} />
                </Route>
                <Redirect to="/decks" />
            </div>
              </Switch>
            <Footer />
          </>
        :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
