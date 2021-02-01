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
      <SearchDecksContainer otherDecks={otherDecks} user={user}/>
    </>
  )
}