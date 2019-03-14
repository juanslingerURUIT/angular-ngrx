import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { configReducers } from './config.reducer';
import { postReducers } from './post.reducer';
import { userReducers } from './user.reducer';
import { IAppState } from '../state';

export const appReducers: ActionReducerMap<IAppState, any> = {
	config: configReducers,
	posts: postReducers,
	router: routerReducer,
	users: userReducers
};
