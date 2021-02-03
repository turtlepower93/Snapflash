import { useState, useEffect } from "react";
import DecksListContainer from "../../components/DecksListContainer/DecksListContainer";
import Quote from "../../components/Quote/Quote";

export default function DecksListPage({
  decks,
  handleDeleteDeck,
  user,
  handleHideDeck,
}) {
  return (
    <>
      <Quote></Quote>
      {/* <div className="quote-container">
        <p>{quote.text}</p>
        { quote.author==='' ?
        <p>-author unknown</p>
        :
        <p>-{quote.author}</p>
      }
      </div> */}
      <DecksListContainer
        decks={decks}
        handleDeleteDeck={handleDeleteDeck}
        user={user}
        handleHideDeck={handleHideDeck}
      />
    </>
  );
}
