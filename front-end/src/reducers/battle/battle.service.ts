import { API_URL } from '../../constants/env';
import { Monster } from '../../models/interfaces/monster.interface';

const createBattle = async (
  monsterA: Monster,
  monsterB: Monster,
): Promise<Monster> =>
  await fetch(`${API_URL}/battle`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ monsterA, monsterB }),
  }).then((response) => response.json());

export const BattleServices = {
  createBattle,
};
