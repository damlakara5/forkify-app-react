import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResultData } from '../../store/actions'
import SingleResult from '../SearchResults/SingleResult'
import "./Bookmarks.css"

const Bookmarks = () => {
    const dispatch = useDispatch()
    const bookmarkedList = useSelector(state => state.result.bookmarked)
    const listLength = bookmarkedList.length

    useEffect(() => {
        dispatch(fetchResultData())
    }, [dispatch])
    
  return (
    
    <div className={`bookmarks pt-3 ${listLength > 0 ? "" : "opacity-0"} `}>
        <ul className='bookmarks-list '>
            {
                bookmarkedList  &&  bookmarkedList.map(bookmarkItem => (

                    <SingleResult id={bookmarkItem.recipe.id} imgSrc={bookmarkItem.recipe.image_url} publisher={bookmarkItem.recipe.publisher}  title={bookmarkItem.recipe.title}  key="111"/>
                ))
            } 
        </ul>
    </div>
  )
}

export default Bookmarks