import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { battleReducer } from '../reducers/battle/battle.reducer';
import { monstersReducer } from '../reducers/monsters/monsters.reducer';

export const store = configureStore({
  reducer: {
    monsters: monstersReducer,
    battle: battleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
