import { Knex } from 'knex';
import { Battle } from '../../src/models';

export const up = (knex: Knex): Promise<void> =>
  knex.schema.table(Battle.tableName, (table) => {
    table.foreign('monsterA').references('monster.id');
    table.foreign('monsterB').references('monster.id');
    table.foreign('winner').references('monster.id');
  });

export async function down(knex: Knex): Promise<void> {}
