import { Link, NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function Footer({ user, setUser }) {


  return (
    <>
    <footer className="page-footer txt-right lt-bg-1 shdo-lt">SnapFlash</footer>
    </>
  );
}
{/* <a className="navbar-brand" href="/">SF</a>
<li><Link exact to="/">MyDecks</Link></li>
<li><Link exact to="/new">NewDeck</Link></li>
<li><Link exact to="/search">Search Other Decks</Link></li>
<li><span className="navbar-text">Welcome, {user.name}</span></li>
<li><Link onClick={handleLogOut}>Log Out</Link></li> */}