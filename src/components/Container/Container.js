import React from 'react'
import Recipe from '../Recipe/Recipe'
import { Route, Routes } from 'react-router-dom';
import SearchResults from '../SearchResults/SearchResults'
import "./Container.css"
import Header from './Header/Header'
import Message from './Message';
import AddRecipe from '../AddRecipe/AddRecipe';

const Container = () => {
  return (
    <div className='container px-0 ' style={{minHeight: "100vh"}}>
        <Header />
        <div className='container mt-0  'style={{minHeight: "100vh"}} >
          <AddRecipe />
            <div className='row' >
                <div className='col-lg-4 px-0 ' >
                  <SearchResults />
                </div>
                <div className='col-lg-8 px-0 h-100 position-relative'>
                  
                  <Routes>
                    <Route  path='/' element={<Message text="Start by searching for a recipe or an ingredient. Have fun!"/>} /> 
                  </Routes>
                  <Routes>
                    <Route  path='/:id' element={<Recipe  />} /> 
                  </Routes>
                  
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Container