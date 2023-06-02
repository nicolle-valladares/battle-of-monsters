import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';

export const setBattleWinner = createAction<Monster | null>(
  'monsters/setBattleWinner',
);
