import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import knex from '../db/knex';
import { Monster } from '../models';

async function getAllMonsters(req: Request, res: Response) {
  try {
    const monsters = await knex.select().from<Monster>(Monster.tableName);

    return res.status(StatusCodes.OK).json(monsters);
  } catch (error) {
    return console.error(error);
  }
}

export const MonsterController = { getAllMonsters };
