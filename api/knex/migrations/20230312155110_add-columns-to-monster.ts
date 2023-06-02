import { Knex } from 'knex';
import { Monster } from '../../src/models';

export const up = (knex: Knex): Promise<void> =>
  knex.schema.table(Monster.tableName, (table) => {
    table.string('name').notNullable();
    table.specificType('battles', 'id[]').references('battle.id');
  });

export const down = (knex: Knex): Promise<void> =>
  knex.schema.table(Monster.tableName, (table) => {
    table.dropColumn('name');
    table.dropColumn('battles');
  });
