import { Link, NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-light lt-bg-1 shdo-dk">
      <div className="navbar-brand txt-dk">
        <Link exact to="/decks">SnapFlash</Link>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link className="nav-link" exact to="/decks">My Decks</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" exact to="/new">Create Deck</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" exact to="/search">Other Decks</Link>
          </li>
        </ul>
          <span className="navbar-text toggle-hidden">Welcome, {user.name}</span>
          <Link className="nav-link" onClick={handleLogOut}>Log Out</Link>
      </div>
    </nav>
  );
}
{/* <a className="navbar-brand" href="/">SF</a>
<li><Link exact to="/">MyDecks</Link></li>
<li><Link exact to="/new">NewDeck</Link></li>
<li><Link exact to="/search">Search Other Decks</Link></li>
<li><span className="navbar-text">Welcome, {user.name}</span></li>
<li><Link onClick={handleLogOut}>Log Out</Link></li> */}