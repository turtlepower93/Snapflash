import { useLocation } from "react-router-dom";
import FlipViewContainer from "../../components/FlipViewContainer/FlipViewContainer";
import './CardsFlipViewPage.css'

export default function CardsFlipViewPage() {
  const {
    state: { deck },
  } = useLocation();

  return (
    <>
      <div className="center-on-page flip-center">
        <div
          className="lt-bg-3 bdr-radius shdo-dk flip-header"
        >
          <div className="md-txt-3">{deck.name}</div>
          <div className="md-txt-2">{deck.description}</div>
          <div className="md-txt-1">
            Created By: <span style={{ color: "azure" }}>{deck.userName}</span>
          </div>
        </div>
        <FlipViewContainer deck={deck} />
      </div>
    </>
  );
}
