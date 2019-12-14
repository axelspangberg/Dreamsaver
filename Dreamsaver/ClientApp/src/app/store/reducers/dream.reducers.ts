import { initialDreamsState, IDreamsState } from '../state/dream.state';
import { EDreamsActions, DreamActions } from '../actions/dream.actions';

export const dreamReducers = (
  state = initialDreamsState,
  action: DreamActions,
): IDreamsState => {
  switch (action.type) {
    case EDreamsActions.GetDreamsSuccess: {
      return {
        ...state,
        dreams: action.payload,
      };
    }
    default:
      return state;
  }
};
