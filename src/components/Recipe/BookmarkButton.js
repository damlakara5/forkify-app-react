import React from 'react'


const BookmarkButton = ({handleBookmark, bookmarkIcon}) => {
    
  return (
    <button className='bookmark-button d-flex align-items-center justify-content-center ms-auto'  onClick={handleBookmark}>
       <i className="bi-bookmark-fill bookmark-icon" ></i>
    </button>
  )
}

export default BookmarkButton