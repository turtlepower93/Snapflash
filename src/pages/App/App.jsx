import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import * as decksAPI from '../../utilities/decks-api'
import AuthPage from '../AuthPage/AuthPage';
import NewDeckPage from '../NewDeckPage/NewDeckPage';
import DecksListViewPage from '../DecksListViewPage/DecksListViewPage';
import CardsListViewPage from '../CardsListViewPage/CardsListViewPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [decks, setDecks] = useState([]);

  //get the decks from server and set the state
  useEffect( function() {
    async function getDecks() {
    const decksObj = await decksAPI.getAll();
    console.log(JSON.stringify(decksObj))
    setDecks(decksObj)
    }
    getDecks();
  },[])


    async function handleAddDeck(newDeckData, newCardsData) {
      console.log(newDeckData);
      console.log(newCardsData);
      newDeckData.cards = newCardsData;
      const newDeck = await decksAPI.createDeck(newDeckData);
      console.log(newDeck)



    // alert(newDeck)
    //newAPI service to add cards to deck you've already created
    // setDecks([...decks, newDeck]);
  }



  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Switch>
              <Route path="/new">
                <NewDeckPage handleAddDeck={handleAddDeck}/>
              </Route>
              <Route path="/decks">
                <DecksListViewPage decks={decks} />
              </Route>
              <Route path="/list">
                <CardsListViewPage decks={decks} />
              </Route>
              <Redirect to="/decks" />
            </Switch>
          </>
        :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
