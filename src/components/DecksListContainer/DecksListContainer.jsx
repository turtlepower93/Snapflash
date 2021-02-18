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
        <div className="big-txt txt-white">My Decks</div>
        <div className="card-grid">
          <div
            className="card shdo-dk lt-bg-1 newcard-card"
            id="newcard-attributes"
          >
            <div className="flx-ctr-down" style={{ background: "#ffb997" }}>
              <Link
                className="lt-bg-1 big-txt txt-dk"
                to={{ pathname: "/new" }}
              >
                Create a Deck
                <div className="big-txt" txt-dk>
                  +
                </div>
              </Link>
            </div>
          </div>
          {deck}
        </div>
      </div>
    </>
  );
}
