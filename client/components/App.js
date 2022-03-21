import React from 'react'
import MovieList from './MovieList'
import FavMovies from './FavMovies'

import movies from '../movies.json'
class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            movies: movies,
            favMovies: []
        }

        this.addFavMovie = this.addFavMovie.bind(this)
        this.removeMovie = this.removeMovie.bind(this)
    }

    addFavMovie(movie) {
        let favMovies = this.state.favMovies.slice() // copy of favMovies

        let found = favMovies.find(m=> m.id === movie.id) 
        if (!found) // not already in list
            this.setState({ favMovies: [...favMovies, movie]})
    }

    removeMovie(movie) {
        let favMovies = this.state.favMovies.slice()
        let idx = favMovies.findIndex(m => m.id === movie.id)
        if (idx >= 0) { // found a movie to remove
            favMovies.splice(idx, 1)
            this.setState({favMovies})
        }
    }

    render() {
        return <div className='containers'>
            <h1>Favorite Movies</h1>
            <section>
                { this.state.favMovies.length ? <FavMovies removeFav={this.removeMovie} favMovies={this.state.favMovies}/> : <h3>No Favorite Movies Picked</h3>}
            </section>
            <h1>Popular Movies</h1> 
            <section>
                <MovieList movies={this.state.movies} addFav={this.addFavMovie}/>
            </section>
        </div>
    }
}

export default App;