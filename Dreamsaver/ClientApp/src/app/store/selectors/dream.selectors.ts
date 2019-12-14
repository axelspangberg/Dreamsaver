import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { IDreamsState } from '../state/dream.state';

const selectDreams = (state: IAppState) => state.dreams;

export const selectDreamList = createSelector(
  selectDreams,
  (state: IDreamsState) => state.dreams,
);
