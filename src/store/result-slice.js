import { createSlice, current } from "@reduxjs/toolkit";

const resultSlice= createSlice({
    name: "result",
    initialState: {
        recipe: {},
        currentRecipeItem : null,
        bookmarked : [],
        filteredSearchData : []
    },
    reducers:{
        replaceResults(state, action){
            state.recipe = action.payload.recipe || {}
            state.bookmarked = action.payload.bookmarked || []
        },
        renderRecipe(state, action){
            const params = action.payload
            const recipeId = params
            const currentRecipe =current(state.recipe) 

            const existingItem = currentRecipe && currentRecipe.filter(item => item.recipe.id === recipeId)
            state.currentRecipeItem= existingItem
           
        },
        addBookmark(state, action) {
            const currentRe = current(state.currentRecipeItem)[0].recipe
            const isItemExist = current(state.bookmarked).find(item => item.recipe.id === currentRe.id)
        
            if(!isItemExist){
                state.bookmarked.push(current(state.currentRecipeItem[0]))
            }
            else{
                const newA = current(state.bookmarked).filter(item => item.recipe.id !== currentRe.id)
                state.bookmarked = newA
            }
        },
        filterData (state, action){ 
            state.filteredSearchData = action.payload.filteredSearchData || []
        }
    }
})

export const resultActions= resultSlice.actions

export default resultSlice