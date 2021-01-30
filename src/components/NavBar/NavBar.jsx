import { Link, NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <NavLink exact activeStyle={{backgroundColor: 'yellow'}} to="/">MyDecks</NavLink>
      &nbsp; | &nbsp;
      <NavLink exact activeStyle={{backgroundColor: 'yellow'}} to="/new">NewDeck</NavLink>
      &nbsp; | &nbsp;
      <NavLink exact activeStyle={{backgroundColor: 'yellow'}} to="/search">Search Other Decks</NavLink>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}