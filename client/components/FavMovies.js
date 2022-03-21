import React from 'react'
import Movie from './Movie'
import { store } from '../store'

/**
 * FavMovies was originally a stateless functional component.
 * Now that it directly connects to redux, it ties its REACT state to the state of the
 * redux store.  Whenever the redux store updates, the FavMovies component should
 * also update and re-render.  We do this by creating a subscribe listener so we can
 * call this.setState to passing in the updated value as soon as the store changes.
 */
class FavMovies extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      favMovies: [],
    }
  }

  componentDidMount() {
    // This component needs to know about changes to favMovies
    //  The subscribe listens for any time the store changes,
    //  so we can update REACT state and trigger a re-render
    store.subscribe(() =>
      this.setState({
        favMovies: store.getState().favMovies,
      })
    )
  }

  render() {
    const { favMovies } = this.state

    return (
      <React.Fragment>
        {favMovies.map((movie, idx) => (
          /* store.dispatch -> sending the REMOVE action to the reducer */
          <Movie
            handleClick={() =>
              store.dispatch({ type: 'REMOVE_FAV_MOVIE', movie })
            }
            movie={movie}
            key={idx}
          />
        ))}
      </React.Fragment>
    )
  }
}

export default FavMovies
