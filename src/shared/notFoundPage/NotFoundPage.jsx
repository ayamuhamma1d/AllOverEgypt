import React from 'react'
import'./notFoundPage.css'
import { Link } from 'react-router-dom'
const NotFoundPage = () => {
  return (
    <div className='page'>

    <h1 className='not-found-title pt-5 mt-5'>404 Error Page ...!</h1>
    <section class="error-container">
      <span>4</span>
      <span><span class="screen-reader-text">0</span></span>
      <span>4</span>
    </section>
    <div className="link-container">
      <Link to="/"  className="more-link  mb-5">Back to Home</Link>
    </div>
    
    </div>
  )
}

export default NotFoundPage