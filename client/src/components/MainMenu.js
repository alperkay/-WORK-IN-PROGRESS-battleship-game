import React, {PureComponent} from 'react'
import {getGames, createGame} from '../actions/game'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class MainMenu extends PureComponent {
  componentWillMount() {
    this.props.getGames()
  }

  render() {
    const {games, createGame} = this.props
    if (!games) return null
    return(
      <div>
        <p></p>
        <button onClick={createGame}>
       <Link style={{textDecoration: "none"}} to={ `/games/${Object.values(games).length+1}` }>
          NEW GAME
        </Link> 
      </button>
      </div>
      
    )
  }

}

const mapStateToProps = (state) => ({
  games: state.games
  // game: state.games[props.match.params.id]
})

export default connect(mapStateToProps, {getGames, createGame})(MainMenu)