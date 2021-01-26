import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewDeckPage from '../NewDeckPage/NewDeckPage';
import ViewDecksPage from '../ViewDecksPage/ViewDecksPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Switch>
              <Route path="/decks/new">
                <NewDeckPage />
              </Route>
              <Route path="/decks">
                <ViewDecksPage />
              </Route>
              <Redirect to="/orders" />
            </Switch>
          </>
        :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
