import { RouterReducerState } from '@ngrx/router-store';

import { IConfigState, initialConfigState } from './config';
import { initialUserState, IUserState } from './user';

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
