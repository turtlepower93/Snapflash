import {useEffect, useState} from 'react';
import SearchDecksContainer from '../../components/SearchDecksContainer/SearchDecksContainer'
import * as searchAPI from '../../utilities/search-api'


export default function SearchDecksPage({ user }) {
  
  const [search,setSearch] = useState();
  const [otherDecks, setOtherDecks] = useState([])

  useEffect( function() {
      async function getOtherDecks() {
      const decksObj = await searchAPI.getAllOtherDecks();
      setOtherDecks(decksObj)
      }
      getOtherDecks();
      // console.log(otherDecks)
    },[])

  return (
    <>
      <h1>Other Peoples Decks</h1>
      <SearchDecksContainer otherDecks={otherDecks} user={user}/>
    </>
  )
}