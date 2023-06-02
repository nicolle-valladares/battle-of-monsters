import { createReducer } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';

import { setBattleWinner } from './battle.actions';

interface BattleState {
  winner: Monster | null;
}

const initialState: BattleState = {
  winner: null,
};

export const battleReducer = createReducer(initialState, (builder) => {
  builder.addCase(setBattleWinner, (state, action) => ({
    ...state,
    winner: action.payload,
  }));
});
