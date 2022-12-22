import React, { useEffect, useState } from 'react'
import Input from './Input'
import ModalTitle from './ModalTitle'
import "./AddRecipe.css"
import UploadButton from './UploadButton'
import Message from '../Container/Message'
import { useDispatch } from 'react-redux'
import { sendData } from '../../store/actions'

const AddRecipe = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [requestData , setRequestData ] = useState()
    const dispatch = useDispatch()
    useEffect(() => {} , [showSuccessMessage])

    const handleAddRecipe = (event) => {
        setShowSuccessMessage(true)

        console.log(event.target[0].value)


          setRequestData([ 
            {
                "recipe": {"publisher":"BBC Good Food","ingredients":[{"quantity":4,"unit":"","description":"large pitta breads"},{"quantity":4,"unit":"tbsps","description":"tomato pure"},{"quantity":2,"unit":"tsps","description":"mixed herbs"},{"quantity":2,"unit":"","description":"tomatoes sliced"},{"quantity":6,"unit":"","description":"slices salami torn into small pieces"},{"quantity":50,"unit":"g","description":"cheddar grated"}],"source_url":"http://www.bbcgoodfood.com/recipes/1649634/pitta-pizzas","image_url":"http://forkify-api.herokuapp.com/images/1649634_MEDIUMd3fc.jpg","title":"Pitta pizzas","servings":4,"cooking_time":30,"id":"5ed6604591c37cdc054bc990"}}
            ] )
        
        dispatch(sendData(requestData , "food"))
    }
    
  return (
    <div className="modal fade" id="addRecipeModal" tabindex="-1" aria-labelledby="addRecipeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content ">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="addRecipeModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowSuccessMessage(false)}></button>
            </div>
            <div class="modal-body container-fluid ">
                {
                    showSuccessMessage &&
                    <Message text="Recipe was successfully uploaded :)" />
                }
                {
                    !showSuccessMessage &&
                    <form onSubmit={handleAddRecipe}>
                        <div className='row'>
                        <div className='col-lg-6'>
                            <ModalTitle  text="RECIPE DATA" />
                            <Input  label="Title" value="TEST" type="text"  name="title"/>
                            <Input  label="URL" value="TEST23" type="text"  name="sourceUrl"/>
                            <Input  label="Image URL" value="TEST23" type="text"  name="image"/>
                            <Input  label="Publisher" value="TEST23" type="text"  name="publisher"/>
                            <Input  label="Prep Time" value="23" type="number"  name="cookingTime"/>
                            <Input  label="Servings" value="23" type="number"  name="servings" />
                        </div>
                        <div className='col-lg-6'>
                            <ModalTitle  text="INGREDIENTS" />
                            <Input  label="Ingredient 1" value="0.5,kg,Rice" type="text"  name="ingredient-1" placeholder="Format: 'Quantity,Unit,Description'"  />
                            <Input  label="Ingredient 2" value="1,,Avocado" type="text"  name="ingredient-2" placeholder="Format: 'Quantity,Unit,Description'"/>
                            <Input  label="Ingredient 3" value=",,salt" type="text"  name="ingredient-3" placeholder="Format: 'Quantity,Unit,Description'"/>
                            <Input  label="Ingredient 4"  type="text"  name="ingredient-4" placeholder="Format: 'Quantity,Unit,Description'"/>
                            <Input  label="Ingredient 5"  type="text"  name="ingredient-5" placeholder="Format: 'Quantity,Unit,Description'"/>
                            <Input  label="Ingredient 6"  type="text"  name="ingredient-6" placeholder="Format: 'Quantity,Unit,Description'"/>
                        </div>
                        </div>
                        <UploadButton  />
                    </form>
                }
            </div>
            </div>
        </div>
    </div>
  )
}

export default AddRecipe