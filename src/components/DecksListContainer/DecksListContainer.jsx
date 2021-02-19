import Deck from "../Deck/Deck";
import { Link } from "react-router-dom";
import "./DecksListContainer.css";

export default function DecksListContainer({
  decks,
  handleDeleteDeck,
  user,
  handleHideDeck,
}) {
  const deck = decks.map((i, idx) => {
    return (
      <Deck
        key={i._id}
        deck={i}
        handleDeleteDeck={handleDeleteDeck}
        currentUser={user}
        handleHideDeck={handleHideDeck}
      />
    );
  });

  return (
    <>
      <div id="mobile-size" className="container md-bg">
        <div className="big-txt txt-white">My Sets</div>
        <Link
          to={{ pathname: "/new" }}
          style={{
            textAlign: "center",
            display: "block",
            position: "relative",
            color: "black",
            width:"50%",
            padding: "1rem 0 1rem 0",
            margin: "0 auto 1rem",
            borderRadius:'10px',
          }}
          className="lt-bg-2 md-txt-3 txt-white shdo-dk link-hover"
        >
          Create a Set
        </Link>
        <div className="card-grid">{deck}</div>
      </div>
    </>
  );
}
