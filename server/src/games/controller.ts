// src/games/controller.ts
import { JsonController, Get, Param, NotFoundError, Put, Body, HttpCode, Post, BadRequestError} from 'routing-controllers'
import Game from './entity'

@JsonController()
export default class GameController {

  @Get('/games/:id')
  getGame(
    @Param('id') id: number
  ) {
    return Game.findOne(id)
  }

  @Get('/games')
  getGames() {
    return Game.find()
  }

  @Put('/games/:id')
  async updateGame(
    @Param('id') id: number,
    @Body() update: Partial<Game>
  ) {
    const game = await Game.findOne(id)
    if (!game) throw new NotFoundError('Cannot find game')
    if (update.status==='started') game.status='started'
    if (game.status==='pending') throw new BadRequestError('place your ships first!')
    return Game.merge(game, update).save()
  }

  @Post('/games')
  @HttpCode(201)
  createGame(
    @Body() game: Game
  ) {
    return game.save()
  }

}