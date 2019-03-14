import { RouterReducerState } from '@ngrx/router-store';

import { IConfigState, initialConfigState } from './config.state';
import { IPostState, initialPostState } from './post.state';
import { initialUserState, IUserState } from './user.state';

export interface IAppState {
	config: IConfigState;
	posts: IPostState;
	router?: RouterReducerState;
	users: IUserState;
}

export const initialAppState: IAppState = {
	config: initialConfigState,
	posts: initialPostState,
	users: initialUserState
};

export function getInitialState(): IAppState {
	return initialAppState;
}
