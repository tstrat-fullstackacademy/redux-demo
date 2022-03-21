import React from 'react'
import Movie from './Movie'

const FavMovies = (props) => {
    let {favMovies, removeFav} = props
    return <React.Fragment>
        {favMovies.map((movie, idx) => <Movie handleClick={removeFav} movie={movie}key={idx}/>)}
        </React.Fragment>
}



export default FavMovies