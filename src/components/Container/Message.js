import React from 'react'

const Message = ({text}) => {
  return (
    <div className='d-flex justify-content-center mt-5'> 
        <i class="bi bi-emoji-smile me-3" style={{color: "#f38e82", fontSize: "30px"}}></i>
        <p className='w-50 text-start' style={{fontSize: "20px"}}>{text} </p>
    </div>
  )
}

export default Message