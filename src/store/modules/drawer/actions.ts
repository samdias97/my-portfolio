import { ActionTypes } from './types';

interface ReturnProps {
  type: string;
  payload: {
    state: boolean;
  };
}

// eslint-disable-next-line import/prefer-default-export
export function changeStateDrawer(state: boolean): ReturnProps {
  return {
    type: ActionTypes.changeStateDrawer,
    payload: {
      state,
    },
  };
}
