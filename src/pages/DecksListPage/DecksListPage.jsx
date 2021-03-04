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
      {/* <Quote /> */}
      <DecksListContainer
        decks={decks}
        handleDeleteDeck={handleDeleteDeck}
        user={user}
        handleHideDeck={handleHideDeck}
      />
    </>
  );
}
