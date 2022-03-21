import React from 'react'

const Movie = (props) => {
    let {movie, handleClick} = props
    return <div className='movie' onClick={() => handleClick(movie)}>
        <img src={movie.image}/>
        {/* <h2>{movie.title}</h2> */}
    </div>
}

export default Movie