import React from 'react'
import Movie from './Movie'
import { store } from '../store'

/**
 * Normally a component who handles state in redux should be a class component
 * so they can subscribe to the store and listen in for changes.
 *
 * This particular case is odd since the movies list doesnt change, so for simplicity sake
 * I've left it as a function component (but it should be a class)
 */
const MovieList = () => {
  let { movies } = store.getState()
  return (
    <React.Fragment>
      {movies.map((movie, idx) => (
        <Movie
          handleClick={() => store.dispatch({ type: 'ADD_FAV_MOVIE', movie })}
          movie={movie}
          key={idx}
        />
      ))}
    </React.Fragment>
  )
}

export default MovieList
