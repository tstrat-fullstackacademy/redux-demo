import { createStore } from 'redux'
import movies from './movies.json'

/* Just like in react, redux state needs some initial values to function */
const initialState = {
  movies,
  favMovies: [],
}

/**
 * Reducer function is designed to take in actions and evaluate them against the
 * current state of redux (making any changes to that state).  At the end, it returns
 * the updated state of redux so that subscribers can be notified of the changes
 * that occurrred.
 *
 * @param {*} state - the current state of the redux store
 *                  - Default: Starts with the initial state of the store on startup
 * @param {*} action - the action to perform ON the redux store
 * @returns - new updated state
 */
const reducer = (state = initialState, action) => {
  let favMovies = state.favMovies.slice()

  switch (action.type) {
    case 'ADD_FAV_MOVIE':
      let found = favMovies.find((m) => m.id === action.movie.id)
      if (!found) {
        favMovies.push(action.movie)
      }
      return { ...state, favMovies }
    case 'REMOVE_FAV_MOVIE':
      let idx = favMovies.findIndex((m) => m.id === action.movie.id)
      if (idx >= 0) {
        // found a movie to remove
        favMovies.splice(idx, 1)
      }
      return { ...state, favMovies }
    default:
      return state
  }
}

export const store = createStore(reducer)
