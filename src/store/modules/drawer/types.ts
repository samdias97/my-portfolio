// eslint-disable-next-line no-shadow
export enum ActionTypes {
  changeStateDrawer = 'CHANGE_STATE_DRAWER',
}

export interface IDrawerProps {
  state: boolean;
}

export interface IProjectProps {
  drawer: IDrawerProps;
}
