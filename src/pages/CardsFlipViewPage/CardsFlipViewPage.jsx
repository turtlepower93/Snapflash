import { useLocation } from 'react-router-dom';
import FlipViewContainer from '../../components/FlipViewContainer/FlipViewContainer';

export default function CardsFlipViewPage() {
  
  const {state : {deck}} = useLocation()

  return (
    <>
      <div className="center-on-page">
        <div className="lt-bg-3 bdr-radius shdo-dk"style={{width:"60%" ,padding:'1rem', margin:"auto"}}>
          <div className="md-txt-3">{deck.name}</div>
          <div className="md-txt-2">Description: {deck.description}</div>
          <div className="md-txt-1">Created By: <span style={{color:'azure'}}>{deck.userName}</span></div>
        </div>
        <FlipViewContainer deck={deck}/>
      </div>
    </>
  )
}