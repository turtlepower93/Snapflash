import { Link } from "react-router-dom";

export default function OtherDeck({ deck }) {
  return (
    <>
      <div>CreatedBy: {deck.user}</div>
      <div>{deck.name}</div>
      <div>{deck.description}</div>
      <Link to={{ pathname: "/list", state: { deck } }}>List View</Link>
      <Link to={{ pathname: "/flip", state: { deck } }}>Flip View</Link>
    </>
  );
}
