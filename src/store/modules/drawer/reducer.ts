import { Reducer } from 'redux';
import produce from 'immer';
import { IDrawerProps, ActionTypes } from './types';

const INITIAL_STATE: IDrawerProps = {
  state: false,
};

const Drawer: Reducer<IDrawerProps> = (state = INITIAL_STATE, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.changeStateDrawer: {
        // eslint-disable-next-line no-param-reassign
        draft.state = action.payload.state;
        break;
      }
      default: {
        return draft;
      }
    }
  });

export default Drawer;
