import { RootState } from '../../app/store';

export const selectWinner = (state: RootState) => state.battle.winner;
