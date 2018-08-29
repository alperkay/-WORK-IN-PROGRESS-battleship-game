import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const ADD_GAME = 'ADD_GAME'
export const UPDATE_GAMES = 'UPDATE_GAMES'

const addGame = game => ({
  type: ADD_GAME,
  payload: game
})

const updateGames = games => ({
  type: UPDATE_GAMES,
  payload: games
})

export const createGame = () => (dispatch) => {

  request
    .post(`${baseUrl}/games`)
    .then(result => dispatch(addGame(result.body)))
    .catch(err => console.error(err))
}

export const getGames = () => (dispatch) => {

  request
    .get(`${baseUrl}/games`)
    .then(result => dispatch(updateGames(result.body)))
    .catch(err => console.error(err))
}
