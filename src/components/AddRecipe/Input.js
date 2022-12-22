import React from 'react'

const Input = ({label, value, name, type, placeholder}) => {
 
  return (
    <div className='d-flex mb-2'>
        <label  for={name}  >{label} </label>
          <input className='add-recipe_input ms-auto' id={name} required defaultValue={value} name={name} type={type} placeholder={placeholder}></input>
       
    </div>
  )
}

export default Input