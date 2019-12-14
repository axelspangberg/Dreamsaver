import { RouterReducerState } from '@ngrx/router-store';

import { IDreamsState, initialDreamsState } from './dream.state';

export interface IAppState {
  router?: RouterReducerState;
  dreams: IDreamsState;
}

export const initialAppState: IAppState = {
  dreams: initialDreamsState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
