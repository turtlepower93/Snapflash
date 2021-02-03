import { useLocation } from "react-router-dom";
import CardListContainer from "../../components/CardListContainer/CardListContainer";

export default function CardsListViewPage() {
  const location = useLocation();

  const {
    state: { deck },
  } = useLocation();

  return (
    <>
      <h1>{deck.name}</h1>
      <h3>{deck.description}</h3>
      <CardListContainer location={location} deck={deck} />
    </>
  );
}
