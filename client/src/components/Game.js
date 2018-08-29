import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getGames, createGame} from '../actions/game'
import {Link} from 'react-router-dom'

class Game extends PureComponent {
  componentWillMount() {
    this.props.getGames()
  }

  render() {
    const { games, createGame } = this.props
    if (!games || Object.values(games).length===0) return null
    const game = Object.values(games)[Object.values(games).length-1]
    return(
      <div>
        <div style={{position: "relative", right: 500}}>
        <h3>Place your fleet on your board</h3>
        <button>Aircraft Carrier (5 spots)</button>
        <p></p>
        <button>Battleship (4 spots)</button>
        <p></p>
        <button>Cruiser (3 spots)</button>
        <p></p>
        <button>Submarine (3 spots)</button>
        <p></p>
        <button>Minesweeper (2 spots)</button>
      </div>
      <div align="center" style={{position: "relative", top: -225}}>
        <h3>Player's Board</h3>
        <table border="1px solid black">
          <tbody>
            {game.userBoard.map(
              row=>(<tr key={`${game.userBoard.indexOf(row)}R`}>{row.map(
                column => (
                  <td align="center" style={{width:27, height:27}} >
                    <button 
                      style={{border:"none", fontWeight:"bold"}} 
                      onClick={()=>console.log(game.userBoard.indexOf(row),"can't get column's index")}
                    >
                      {column}
                    </button>
                  </td>
                )
              )}</tr>)
            )}
          </tbody>
        </table>
        <p></p>
        <h3>Computer's Board</h3>
        <table border="1px solid black">
          <tbody>
            {game.computerBoard.map(
              row=>(<tr>{row.map(
                column => (
                  <td align="center" style={{width:27, height:27, fontWeight:"bold"}} >
                    <button style={{border:"none", fontWeight:"bold"}} onClick={()=>console.log('computer played')}>
                      {column}
                    </button>
                  </td>
                )
              )}</tr>)
            )}
          </tbody>
        </table>
        <p></p>
        <button onClick={createGame}>
        <Link style={{textDecoration: "none"}} to={ `/games/${Object.values(games)[Object.values(games).length-1].id+1}` }>
          START A NEW GAME
        </Link>
      </button>
      </div> 
      </div> 
    ) 
  }

}

const mapStateToProps = (state) => ({
  games: state.games,
})

export default connect(mapStateToProps, {getGames, createGame})(Game)