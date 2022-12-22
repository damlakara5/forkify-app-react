import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resultActions } from '../../../../store/result-slice'
import "./SearchPart.css"

const SearchPart = () => {
  const dispatch = useDispatch()
  const [searchInput, setSearchInput]  = useState("")
  const results = useSelector(state => state.result.recipe)


  
  
    const handleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        const filteredData = results && results.filter((result) => {
          return  result.recipe.title.toLowerCase().includes(searchInput);
       
    });
    dispatch(resultActions.filterData({
      filteredSearchData: filteredData
    }))

    
  }



  return (
    <form className='search bg-light d-flex ps-4'>
        <input className='search-input '  type="text" placeholder="Search over 1,000,000 recipes " onChange={handleChange} />
        <button className='search-button '>Search</button>
    </form>
  )
}

export default SearchPart