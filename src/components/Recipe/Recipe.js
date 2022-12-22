import React, { useEffect, useState } from 'react'
import "./Recipe.css"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { resultActions } from '../../store/result-slice'
import RecipeDetails from './RecipeDetails'
import BookmarkButton from './BookmarkButton'
import { sendData } from '../../store/actions'

const Recipe = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const id = params.id
    const currentRecipe = useSelector(state => state.result.currentRecipeItem)
    const bookmarkedList = useSelector(state => state.result.bookmarked)

    const [bookmarkIcon , setBookmarkIcon] = useState(false)

    const showedRecipe = currentRecipe && currentRecipe[0].recipe


    useEffect(()=> {
        dispatch(resultActions.renderRecipe(id))
    }, [dispatch, id, bookmarkedList, showedRecipe])

    
    const handleBookmark = () => {
        dispatch(resultActions.addBookmark())
        dispatch(sendData(bookmarkedList , "bookmarks"))
        setBookmarkIcon(!bookmarkIcon)
    }
  return (
    <div className='recipe h-100'>
       {
            showedRecipe && 
            <>
              <figure className='recipe-fig'>
                    <img className='recipe-img' src={showedRecipe.image_url} />
                    <h1 className='recipe-title'><span>{showedRecipe.title}</span></h1>
                </figure>
                <div className='d-flex recipe-detail_wrapper align-items-center'>
                    <RecipeDetails  text={`${showedRecipe.cooking_time} MINUTE`} iconName="bi-clock"  />
                    <RecipeDetails  text={`${showedRecipe.servings} Servings`} iconName="bi-people"  />
                    <BookmarkButton  handleBookmark={handleBookmark} bookmarkIcon={bookmarkIcon} />
                </div>
                <div className='recipe-ingredients'>
                    <h2 className='mx-auto recipe-header mb-4'>RECIPE INGREDIENTS</h2>
                    <ul className='recipe-ingredients_list'>
                        {
                            showedRecipe.ingredients.map(ingredient => (
                                <li className='d-flex'>
                                    <i class="bi bi-check-lg me-2"></i>
                                    {ingredient.quantity && <p className='me-1'>{ingredient.quantity}</p>}
                                    <p className='me-1'>{ingredient.unit}</p>
                                    <p>{ingredient.description}</p>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>
            </>
        }  
        
    </div>
  )
}

export default Recipe