import React from 'react'
import { Link } from "react-router-dom";
const SingleResult = ({imgSrc, title, publisher, id}) => {
  return (
    <li className='result-list'>
        <Link  to={`/${id}`} className='d-flex text-decoration-none result-link align-items-center ' >
          <figure className='result-img_container me-4'>
              <img  src={imgSrc} className="result-img " />
          </figure>
            
            <div className='text-start'>
                <h4 className='title'>  {title} </h4>
                <p className='publisher '>  {publisher}  </p>
            </div>
        </Link>
    </li>
  )
}

export default SingleResult