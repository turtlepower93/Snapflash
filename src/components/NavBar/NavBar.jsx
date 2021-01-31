import { Link, NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">SF</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><Link exact to="/">MyDecks</Link></li>
            <li><Link exact to="/new">NewDeck</Link></li>
            <li><Link exact to="/search">Search Other Decks</Link></li>
            <li><span className="navbar-text">Welcome, {user.name}</span></li>
            <li><Link onClick={handleLogOut}>Log Out</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}