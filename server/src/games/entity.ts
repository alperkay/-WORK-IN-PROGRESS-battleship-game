// src/games/entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import {emptyBoard, Board, computerBoard} from './logic'

@Entity()
export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {default: 'pending'})
  status: string

  @Column('json')
  userBoard: Board = emptyBoard()

  @Column('json')
  computerBoard: Board = computerBoard()
}