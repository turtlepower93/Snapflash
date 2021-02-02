import { useLocation } from 'react-router-dom';
import FlipViewContainer from '../../components/FlipViewContainer/FlipViewContainer';

export default function CardsFlipViewPage() {
  
  const {state : {deck}} = useLocation()

  return (
    <>
      <div className="lt-bg-3 bdr-radius shdo-lt"style={{width:"80%" ,padding:'1rem', margin:"1.5rem auto"}}>
        <div className="md-txt-3">{deck.name}</div>
        <div className="md-txt-2">Description: {deck.description}</div>
        <div className="md-txt-1">Created By: {deck.userName}</div>
      </div>
      <FlipViewContainer deck={deck}/>
    </>
  )
}