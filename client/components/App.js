import React from 'react'
import MovieList from './MovieList'
import FavMovies from './FavMovies'

/**
 * This app component used to be a CLASS component.  But because it no longer
 * is the owner of state in this application and doesnt directly depend on
 * the state to render anything, this component can be rewritten as a simple
 * stateless functional component
 */
function App() {
  return (
    <div className='containers'>
      <h1>Favorite Movies</h1>
      <section>
        <FavMovies />
      </section>
      <h1>Popular Movies</h1>
      <section>
        <MovieList />
      </section>
    </div>
  )
}

export default App
