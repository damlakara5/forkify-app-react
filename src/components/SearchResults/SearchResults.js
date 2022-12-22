
import React, { useEffect } from 'react'
import {useSelector} from "react-redux"
import "./SearchResults.css"
import SingleResult from './SingleResult'

const SearchResults = () => {
  const results = useSelector(state => state.result.filteredSearchData)
 
  useEffect(()=> {
  }, [results])
  return (
    <div className='bg-light pt-5  search-results-wrapper  '>
        <ul className='results px-0 '>
        {
              results.length > 0 && results.map(result => (
                <SingleResult 
                    imgSrc={result.recipe.image_url} 
                    title={result.recipe.title}  
                    publisher={result.recipe.publisher}
                    id= {result.recipe.id}
                 />
              ))
           }
        </ul>
    </div>
  )
}

export default SearchResults