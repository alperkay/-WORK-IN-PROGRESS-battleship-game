import {ADD_GAME, UPDATE_GAMES} from '../actions/game'

export default (state = null, {type, payload}) => {
  switch (type) {
    
    case ADD_GAME:
      return {
        ...state,
        [payload.id]: payload
      }

    case UPDATE_GAMES:
      return payload.reduce((games, game) => {
        games[game.id] = game
        return games
      }, {})

    default:
      return state
  }
}
