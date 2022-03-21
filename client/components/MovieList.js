import React from 'react'
import Movie from './Movie'

const MovieList = (props) => {
    let {movies, addFav} = props
    return <React.Fragment>
        {props.movies.map((movie, idx) => <Movie handleClick={addFav} movie={movie}key={idx}/>)}
        </React.Fragment>
}



export default MovieList