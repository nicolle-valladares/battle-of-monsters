import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import knex from '../db/knex';
import {
  ApplicationError,
  BadRequest,
  InternalError,
} from '../errorHandler/applicationErrors';
import { Battle, Monster } from '../models';

async function getAllBattles(req: Request, res: Response) {
  try {
    const battles = await knex.select().from<Battle>(Battle.tableName);

    return res.status(StatusCodes.OK).json(battles);
  } catch (error) {
    return console.error(error);
  }
}

async function createBattle(req: Request, res: Response, next: NextFunction) {
  try {
    const { monsterA, monsterB } = req.body;

    if (!monsterA || !monsterB) {
      throw new BadRequest('You need to send both monsters');
    }

    const monstersExist = await knex<Monster>(Monster.tableName)
      .where('id', monsterA.id)
      .orWhere('id', monsterB.id);

    if (monstersExist.length < 2) {
      throw new InternalError('You need to send true monsters');
    }

    const winner = await makeMonstersBattle(monsterA, monsterB);

    await knex
      .insert({
        monsterA: monsterA.id,
        monsterB: monsterB.id,
        winner: winner.id,
      })
      .into(Battle.tableName);

    return res.status(StatusCodes.OK).json(winner);
  } catch (error) {
    next(error);
  }
}

const makeMonstersBattle = async (monsterA: Monster, monsterB: Monster) => {
  let [attacker, defender] = [monsterA, monsterB];

  if (
    monsterB.speed > monsterA.speed ||
    (monsterB.speed == monsterA.speed && monsterB.attack > monsterA.attack)
  ) {
    [attacker, defender] = [monsterB, monsterA];
  }
  while (attacker.hp > 0 && defender.hp > 0) {
    const attackerDamage =
      attacker.attack > defender.defense
        ? attacker.attack - defender.defense
        : 1;

    defender.hp -= attackerDamage;

    if (defender.hp > 0) {
      const defenderDamage =
        defender.attack > attacker.defense
          ? defender.attack - attacker.defense
          : 1;

      attacker.hp -= defenderDamage;
    }
  }

  return attacker.attack > 0 ? attacker : defender;
};

export const BattleController = {
  getAllBattles,
  createBattle,
};
