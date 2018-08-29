// src/index.ts
import 'reflect-metadata'
import {useKoaServer} from "routing-controllers"
import GameController from "./games/controller"
import setupDb from './db'
import * as Koa from 'koa'

const port = process.env.PORT || 4000
const app = new Koa()

useKoaServer(app, {
  cors: true,
  controllers: [GameController]
}

setupDb()
  .then(_ =>
    app.listen(port, () => console.log('Listening on port 4000'))
  )
  .catch(err => console.error(err))