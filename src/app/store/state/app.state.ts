import { RouterReducerState } from '@ngrx/router-store';

import { IConfigState, initialConfigState } from './config.state';
import { initialUserState, IUserState } from './user.state';

export interface IAppState {
	config: IConfigState;
	router?: RouterReducerState;
	users: IUserState;
}

export const initialAppState: IAppState = {
	users: initialUserState,
	config: initialConfigState
};

export function getInitialState(): IAppState {
	return initialAppState;
}
