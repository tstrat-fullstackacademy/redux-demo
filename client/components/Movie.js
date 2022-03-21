import React from 'react'

/* Just a normal stateless display function.  No redux or crazy mechanics here */
const Movie = (props) => {
  let { movie, handleClick } = props
  return (
    <div className='movie' onClick={() => handleClick(movie)}>
      <img src={movie.image} />
    </div>
  )
}

export default Movie
