import React from 'react'

const RecipeDetails = ({iconName, text}) => {
  return (
    <div className='recipe-details d-flex me-3'>
            <i class={`bi ${iconName} recipe-icon`}></i>
            <p>{text}</p>
    </div>
  )
}

export default RecipeDetails