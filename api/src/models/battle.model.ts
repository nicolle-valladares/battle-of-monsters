import { Id, RelationMappings } from 'objection';
import Base from './base';
import { Monster } from './monster.model';

export class Battle extends Base {
  id!: Id;
  monsterA!: number;
  monsterB!: number;
  winner!: number;

  static tableName = 'battle';

  static get relationMappings(): RelationMappings {
    return {
      monsterARelation: {
        relation: Battle.HasOneRelation,
        modelClass: Monster,
        join: {
          from: 'monster.id',
          to: 'battle.monsterA',
        },
      },
      monsterBRelation: {
        relation: Battle.HasOneRelation,
        modelClass: Monster,
        join: {
          from: 'monster.id',
          to: 'battle.monsterB',
        },
      },
      winnerRelation: {
        relation: Battle.HasOneRelation,
        modelClass: Monster,
        join: {
          from: 'monster.id',
          to: 'battle.winner',
        },
      },
    };
  }
}
