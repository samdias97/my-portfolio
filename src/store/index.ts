import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IDrawerProps } from './modules/drawer/types';
import rootReducer from './modules/rootReducer';

export interface IState {
  drawer: IDrawerProps;
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
