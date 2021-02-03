import {useEffect, useState} from 'react';
import SearchDecksContainer from '../../components/SearchDecksContainer/SearchDecksContainer'
import * as searchAPI from '../../utilities/search-api'


export default function SearchDecksPage({ user }) {
  
  const [otherDecks, setOtherDecks] = useState([])

  useEffect( function() {
      console.log('Am I running at all?')
      async function getOtherDecks() {
      const decksObj = await searchAPI.getAllOtherDecks();
      setOtherDecks(decksObj)
      }
      getOtherDecks();
    },[])

  return (
    <>
      <SearchDecksContainer otherDecks={otherDecks} user={user}/>
    </>
  )
}